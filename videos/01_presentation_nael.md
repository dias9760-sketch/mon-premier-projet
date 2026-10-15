# Vidéo 01 — Présentation de Naël : « D'où viennent mes yeux »

## Fiche concept

| | |
|---|---|
| **Objectif** | Faire découvrir Naël et donner envie de s'abonner. Aucun produit. |
| **Public** | 18-35 ans, Mayotte, La Réunion, France métropolitaine et diaspora comorienne ; amateurs de lifestyle, de voyage et de belles images. |
| **Idée centrale** | Son regard intrigue. Il répond à la question qu'on lui pose toujours, et la réponse raconte son histoire et son île. |
| **Émotion** | Curiosité, puis fascination, puis attachement. |
| **Format** | 9:16, 1080 × 1920, **22 à 25 secondes**, voix off, sous-titres. |
| **Esthétique** | Éditorial cinéma, heure dorée, plans lents, peu de mots. |
| **Plateformes** | TikTok et Instagram Reels. |

**Pourquoi une voix off et non une prise de parole face caméra :** la synchronisation labiale reste le point le plus fragile des vidéos IA. Une voix off posée sur des plans silencieux paraît plus réaliste, surtout pour une première vidéo qui doit convaincre.

## Le hook (0 à 2 secondes)

- **Image** : très gros plan sur ses yeux gris-bleu qui s'ouvrent lentement et fixent l'objectif.
- **Texte à l'écran** : « On me demande toujours d'où viennent mes yeux 👀 »
- **Son** : silence de 0,3 seconde, puis la voix off et l'arrivée de la musique.

Ce hook combine trois leviers : un visuel frappant (des yeux clairs sur une peau très foncée), une question que le spectateur se pose déjà, et une réponse promise mais retardée.

## Scénario — voix off

> Voix grave, calme, posée, un léger sourire dans la voix, rythme lent. Environ 60 mots.

| Temps | Voix off |
|---|---|
| 0 – 2 s | « On me demande toujours d'où viennent mes yeux. » |
| 2 – 4,5 s | « Mon père est mahorais. » |
| 4,5 – 7 s | « Ma mère est japonaise. » |
| 7 – 11 s | « Et moi, j'ai grandi ici. À Mayotte. » |
| 11 – 16 s | « Entre le lagon, le shimaoré… et le thé vert de ma mère. » |
| 16 – 20 s | « Je m'appelle Naël. Et je vais te montrer mon île comme tu ne l'as jamais vue. » |
| 20 – 23 s | « On se retrouve au lagon. » |

## Découpage plan par plan

| # | Durée | Plan | Cadrage et mouvement | Action | Lumière et décor | Image de départ |
|---|---|---|---|---|---|---|
| 1 | 0 – 2 s | **Hook** | Très gros plan sur les yeux, léger travelling avant | Il ouvre les yeux et fixe l'objectif | Heure dorée, fond flou de verdure | À générer (P1) |
| 2 | 2 – 4,5 s | Plan rapproché | Caméra fixe, légère profondeur | Sur le ponton de Mamoudzou, il tourne la tête vers l'objectif, le vent dans la chemise | Coucher de soleil, bateaux flous | À générer (P2) |
| 3 | 4,5 – 7 s | Plan de détail | Plongée, ralenti | Ses mains tiennent un bol de thé matcha fumant sur une table en bois | Lumière douce du matin, terrasse | À générer (P3) |
| 4 | 7 – 11 s | Plan d'ensemble | Travelling latéral lent | Il marche sur le sable blanc vers le lagon, de dos | Coucher de soleil | `c5a5d9d3` (dos, plage) |
| 5 | 11 – 16 s | Plan large | Caméra fixe, plan contemplatif | Sous le baobab, il regarde le lagon, le vent dans les feuilles | Heure dorée | `f31a6cf8` (dos, baobab) |
| 6 | 16 – 20 s | Plan en pied | Léger travelling avant | Face caméra sur la plage, main dans la poche, il esquisse un sourire | Heure dorée | `4d36bd61` (face, plage) |
| 7 | 20 – 23 s | **Boucle** | Gros plan, léger travelling avant | Il sourit doucement, regard caméra, puis cligne des yeux. Le dernier plan raccorde avec le plan 1 pour créer une boucle. | Heure dorée | À générer (P4) |

**Transitions** : coupes franches, calées sur le rythme de la musique. Raccord dans le mouvement entre les plans 2 et 3 (il baisse le regard, on enchaîne sur le bol). Fondu très court entre les plans 6 et 7.

## Prompts de génération

Joindre **toujours** la référence `f1f59d14-4eea-4752-adab-9e5a34bb2fab` (`image_references`) et commencer par le bloc d'identité de la fiche Naël.

### Images à générer (Nano Banana Pro, 9:16, 2k)

**P1 — Hook, yeux**
```
[Bloc d'identité Naël] Extreme close-up of his eyes and upper face filling the frame, light grey-blue eyes looking straight into the lens, sharp focus on the irises with natural texture and limbal ring, realistic catchlights, very dark brown skin with visible pores, golden hour side light, blurred green background. 100mm macro look, photorealistic, cinematic.
```

**P2 — Ponton**
```
[Bloc d'identité Naël] Medium close-up from chest up, standing on the wooden jetty of Mamoudzou in Mayotte, head turned three-quarters toward the camera, open beige linen shirt moving in the wind, sunset light on his face, blurred boats and ocean behind. 85mm lens, shallow depth of field, photorealistic, cinematic.
```

**P3 — Thé matcha (détail mains)**
```
Close-up top-down detail shot of a man's hands with very dark brown skin holding a handmade ceramic bowl of frothy green matcha tea with light steam, on a weathered wooden table on a tropical terrace in Mayotte, beige linen sleeve visible, soft morning light, a few frangipani flowers on the table. 50mm lens, photorealistic, natural skin texture, realistic fingers.
```

**P4 — Sourire final**
```
[Bloc d'identité Naël] Close-up portrait, looking straight into the camera with a soft, sincere half-smile, light grey-blue eyes, open beige linen shirt, golden hour light, blurred turquoise lagoon behind. 85mm lens, photorealistic, natural skin texture, realistic teeth.
```

### Animation des images (image vers vidéo)

Utiliser chaque image validée comme **première image** (modèle Higgsfield conseillé au moment de la production via `models_explore`, par exemple Kling ou Veo). Durée de 3 à 5 secondes par clip, puis découpe au montage.

| Plan | Prompt de mouvement |
|---|---|
| 1 | `He slowly opens his eyes and looks directly into the lens, very slow push-in, subtle natural blink, no head movement.` |
| 2 | `He turns his head slowly toward the camera, wind gently moves his linen shirt, boats softly rocking in the background, static camera.` |
| 3 | `Steam rises from the matcha bowl, hands lift the bowl slightly, slow motion, static top-down camera.` |
| 4 | `He walks slowly toward the lagoon, footprints in the sand, slow lateral tracking shot, gentle waves.` |
| 5 | `Wind moves the baobab leaves and his shirt, he stands still looking at the view, static wide shot.` |
| 6 | `He stands relaxed, slight smile appearing, gentle wind, slow push-in.` |
| 7 | `A soft sincere smile appears, then a slow natural blink, very slow push-in.` |

**Consigne commune** : `photorealistic, natural motion, no morphing, keep his face identical to the first frame`.

## Voix, musique et son

- **Voix off** : ElevenLabs. Choisir une voix masculine française grave, calme et chaleureuse, puis la garder pour **toutes** les vidéos de Naël, car elle fait partie de son identité. Débit lent, petites pauses avant « Mon père » et « Je m'appelle Naël ».
- **Musique** : morceau ambiant, afro-house douce ou R&B instrumental, entre 90 et 110 BPM. La prendre dans la bibliothèque commerciale de TikTok ou d'Instagram pour être en règle sur les droits. Montée de la musique au plan 6.
- **Ambiances** : vagues, vent, bateaux, à faible volume sous la voix.
- **Effet sonore** : un léger souffle ou un « whoosh » discret à l'ouverture des yeux (plan 1).

## Montage et habillage

- **Sous-titres** : blancs, police sans empattement en gras, deux à quatre mots par ligne, mot clé en jaune sable (« yeux », « mahorais », « japonaise », « Naël »). À placer au centre ou dans le tiers haut, hors de la zone de l'interface (environ 250 px en bas et 120 px à droite à éviter).
- **Couleurs** : tons chauds et dorés, turquoise du lagon saturé avec mesure, peau fidèle au brun foncé, jamais éclaircie.
- **Rythme** : plans 1 à 3 rapides, plans 4 et 5 plus lents pour respirer, plans 6 et 7 qui remontent avec la musique.
- **Boucle** : le plan 7 se termine sur ses yeux, ce qui raccorde avec le plan 1 et pousse à revoir la vidéo.
- **Contrôle final** : regarder la vidéo sur un téléphone, son coupé puis son activé.

## Publication

- **Couverture** : gros plan sur ses yeux avec le texte « D'où viennent mes yeux ? »
- **Légende** :
  > Mahorais par mon père, japonais par ma mère. Mayotte dans le cœur. 🌊 Je m'appelle Naël, et ici je te montre mon île comme tu ne l'as jamais vue. Tu viens d'où, toi ? 👇
  >
  > ⚠️ Image virtuelle — Naël est un personnage créé par IA.
- **Hashtags** : #Mayotte #976 #Mahorais #Metisse #Lagon #IleAuxParfums #Lifestyle #Voyage
- **Appel à l'action** : la question « Tu viens d'où, toi ? » invite à commenter sans forcer.
- **Mentions obligatoires** : activer l'étiquette « contenu généré par IA » de TikTok et d'Instagram, et garder « Image virtuelle » dans la légende ou à l'écran. *À revérifier avant publication, car les règles évoluent : loi française n° 2023-451 et règles de chaque plateforme.*

## Variantes à tester

| Variante | Hook (texte + voix) | Ce qu'on teste |
|---|---|---|
| A (principale) | « On me demande toujours d'où viennent mes yeux. » | Curiosité sur son apparence |
| B | « Mahorais et japonais. Oui, c'est possible. » | Effet de surprise immédiat |
| C | « Tu ne devineras jamais d'où vient ma mère. » | Défi lancé au spectateur |

Publier la variante A, puis tester B ou C quelques jours plus tard avec le même montage et seulement le hook changé. Comparer la rétention sur les 3 premières secondes, le taux de visionnage complet, les commentaires et les abonnements.

## Points de contrôle avant publication

1. Le visage de Naël est le même dans les 7 plans : yeux, barbe, mâchoire, cheveux.
2. Aucune déformation : mains, doigts, dents, yeux, objets.
3. La peau reste brun très foncé dans tous les plans.
4. La voix est intelligible et les sous-titres n'ont pas de faute.
5. La musique est libre de droits ou issue de la bibliothèque de la plateforme.
6. Les mentions « Image virtuelle » et l'étiquette IA sont présentes.
7. Le rendu a été vérifié sur un téléphone.

---

## Production réalisée (15/10/2026)

**Vidéo finale** : 26,8 s, 1080 × 1920, 30 im/s, H.264 + AAC.
- Higgsfield media_id : `c6656101-a1bd-40a2-a85a-2c24ae0410a0`
- Lien : https://d2ol7oe51mr4n9.cloudfront.net/user_3KViSTlmVjujrQsgUSoKurKeoeU/c6656101-a1bd-40a2-a85a-2c24ae0410a0.mp4

| Élément | Outil | Identifiant |
|---|---|---|
| Image P1 (yeux) | Nano Banana Pro | `5269738a-fd21-4937-bd98-d3063450cda6` |
| Image P2 (ponton) | Nano Banana Pro | `4c16b5bb-8af0-40bf-8edf-b68290fee993` |
| Image P3 (matcha) | Nano Banana Pro | `cd4f157f-f8ac-4abd-8393-d73698d4cc86` |
| Image P4 (sourire) | Nano Banana Pro | `52e63005-630d-45dd-bfb8-0e5f4bcce273` |
| Plan 1 | Kling 3.0 Pro, 5 s, sans son | `89c71667-0742-4e60-abd3-2788e9c3d195` |
| Plan 2 | Kling 3.0 Pro | `eb5238c0-7788-4668-9778-d14f43704f2f` |
| Plan 3 | Kling 3.0 Pro | `3eba4c82-a354-4bed-9355-f3f1b8a5f138` |
| Plan 4 | Kling 3.0 Pro | `9ad790ad-59df-4bd7-aa1e-885bbd3cad2c` |
| Plan 5 | Kling 3.0 Pro (ralenti ×1,1 au montage) | `144198ca-8848-403f-8f27-84e2324bcf10` |
| Plan 6 | Kling 3.0 Pro | `562d57ed-441c-41dd-ab7e-f9808e8df212` |
| Plan 7 | Kling 3.0 Pro | `aa85d8a3-998a-4de4-81cc-be5105a48393` |
| Voix off (retenue) | Higgsfield Seed Audio, voix « Andre », vitesse −12 | `fb9c9909-585d-40e9-9caf-89885382f462` |
| Voix off (non retenue) | Seed Audio, voix « Marcus » | `fb658cc2-8ea9-4343-b093-969ba7faec20` |
| Musique originale | Arcads (ElevenLabs Music), 27 s, instrumentale | `02007649-40ff-4172-ab63-607742ba4972` |

**Voix de Naël** : Seed Audio, preset « Andre » (`f1e8226e-2248-4d5f-b43c-0a79e9949dbf`), `speech_rate` −12. À réutiliser pour toutes les vidéos.

**Montage** (sandbox Higgsfield, ffmpeg) : coupes calées sur la voix off (décalée de 0,3 s), étalonnage léger (saturation +6 %, contraste +3 %), sous-titres Montserrat ExtraBold avec mots clés en jaune sable, hook en haut d'écran, mention « IMAGE VIRTUELLE » discrète en haut à gauche, musique à environ −16 dB sous la voix puis remontée et fondu final.

**Coût** : environ 4 crédits Higgsfield pour la voix et les images, environ 61 pour l'animation des plans et 8 crédits Arcads pour la musique.

**Point à vérifier à l'écoute** : la prononciation de « mahorais » par la voix de synthèse (la transcription automatique l'entend mal). Si elle sonne faux, régénérer la voix off avec l'orthographe phonétique « ma-o-rè ».

## Voix off ElevenLabs (15/10/2026)

La voix Seed Audio n'a pas été retenue. Trois prises ElevenLabs (modèle `eleven_v4`, consigne `[calm, slow, intimate]`) dans `videos/voix_01/` :

| Fichier | Voix | voice_id | Durée |
|---|---|---|---|
| `isac.mp3` | Isac — grave, calme, léger accent ivoirien | `SomyDQQmnE7TsltdiDgp` | 21,8 s |
| `micha.mp3` | Micha — médium-grave, chaude, posée | `qc5bFdt925ro3yydUrYD` | 21,5 s |
| `kenzy.mp3` | Kenzy — jeune, élégante, premium | `xclXfpLYbMIBNgiHTm8S` | 16,9 s |

Flow ElevenLabs : `r6yzBajnNDgxG4ck0qDb`. La voix Rakoto (`LwXmJOoCvgC7Oo043IW7`) n'a pas pu être générée : quota ElevenLabs épuisé (54 crédits restants, 327 nécessaires par prise).
