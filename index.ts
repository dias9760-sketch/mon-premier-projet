import { config as loadEnv } from 'dotenv';
import {
  createHiggsfieldClient,
  AuthenticationError,
  NotEnoughCreditsError,
  BadInputError,
  ValidationError,
  APIError,
  TimeoutError,
  type V2Response,
} from '@higgsfield/client/v2';

// Load HF_CREDENTIALS (key-id:key-secret) from .env.local at runtime. Never log it.
loadEnv({ path: '.env.local', quiet: true });

const MODEL = 'bytedance/seedance-2.5/text-to-video';

async function main(): Promise<number> {
  if (!process.env.HF_CREDENTIALS) {
    console.error('HF_CREDENTIALS is not set. Add it to .env.local (format key-id:key-secret).');
    return 1;
  }

  const client = createHiggsfieldClient({
    credentials: process.env.HF_CREDENTIALS,
    pollInterval: 5_000,
    // Video generation can take several minutes; the SDK default is 5 minutes.
    maxPollTime: 20 * 60_000,
  });

  console.log(`Submitting ${MODEL} request and waiting for completion...`);

  let result: V2Response;
  try {
    result = await client.subscribe(MODEL, {
      input: {
        prompt: 'A cinematic scene at sunset',
        duration: 5,
        resolution: '720p',
        aspect_ratio: '16:9',
      },
      withPolling: true,
    });
  } catch (error) {
    if (error instanceof AuthenticationError) {
      console.error('Authentication failed: check HF_CREDENTIALS in .env.local.');
    } else if (error instanceof NotEnoughCreditsError) {
      console.error('Not enough Higgsfield credits to run this generation.');
    } else if (error instanceof BadInputError || error instanceof ValidationError) {
      console.error('Request rejected as invalid:', error.message);
    } else if (error instanceof TimeoutError) {
      // The SDK keeps polling non-terminal states (including "canceled") until it times out.
      console.error('Timed out waiting for the request to finish (it may have been canceled).');
    } else if (error instanceof APIError) {
      console.error(`Higgsfield API error (${error.statusCode}):`, error.message);
    } else {
      console.error('Unexpected error:', error instanceof Error ? error.message : error);
    }
    return 1;
  }

  // The SDK types don't list "canceled", but treat any status other than completed as a failure.
  const status = result.status as string;
  switch (status) {
    case 'completed': {
      const url = result.video?.url;
      if (!url) {
        console.error(`Request ${result.request_id} completed but returned no video URL.`);
        return 1;
      }
      console.log(`Request ${result.request_id} completed.`);
      console.log('Video URL:', url);
      return 0;
    }
    case 'nsfw':
      console.error(`Request ${result.request_id} was rejected by moderation (credits refunded).`);
      return 1;
    case 'failed':
      console.error(`Request ${result.request_id} failed (credits refunded).`);
      return 1;
    case 'canceled':
      console.error(`Request ${result.request_id} was canceled.`);
      return 1;
    default:
      console.error(`Request ${result.request_id} ended with unexpected status "${status}".`);
      return 1;
  }
}

process.exitCode = await main();
