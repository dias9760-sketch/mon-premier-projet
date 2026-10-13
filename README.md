# mon-premier-projet
## Higgsfield Seedance 2.5 example

1. `npm install`
2. Create `.env.local` (git-ignored) containing `HF_CREDENTIALS=key-id:key-secret` — see `.env.example`.
3. `npm start` — submits a billable `bytedance/seedance-2.5/text-to-video` request
   (prompt "A cinematic scene at sunset", 5 s, 720p, 16:9), waits for completion and prints the video URL.
   Failed, moderated (nsfw) or canceled requests exit with a non-zero code.
