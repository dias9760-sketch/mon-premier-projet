# Prompt Higgsfield — planche multi-vues (référence vidéo)

Modèle : **Nano Banana Pro** (2 crédits, accessible au plan gratuit), format 16:9, 2K.
Référence : la fiche personnage initiale de l'influenceuse (job ID) en `image_references`.

Pourquoi : pour générer plus tard des vidéos réalistes (Kling, Veo, Seedance…), il faut
donner au modèle vidéo le visage et la tenue sous plusieurs angles. Utilisez la planche
comme image de départ (start frame) ou comme référence de personnage.

## Modèle de prompt
```
Professional character reference sheet of the exact same woman shown in the reference image
(keep identical face, skin tone, hair and body), pure white seamless studio background.
Top row: four full-body views evenly spaced, front view, three-quarter view, side profile,
back view, standing upright, arms relaxed, head to toe with feet visible.
Bottom row: four head-and-shoulders close-ups of the same face: front neutral,
three-quarter view, side profile, smile.
[DESCRIPTION DU PERSONNAGE]
Outfit identical in every view: [TENUE + BIJOUX DE LA TÊTE AUX PIEDS]
Photorealistic, visible natural skin texture and pores, natural makeup, no beauty filter,
no airbrushing, soft diffused even studio lighting, sharp fabric and jewelry detail,
consistent lighting across all panels. Exactly one person per panel, no other people,
no props, no text, no labels, no watermark, no logos.
```

## Description du salouva (Imani)
```
traditional Mahoran salouva, a long wrap dress tied above the chest and falling to the ankles,
black cotton printed all over with small bright yellow six-petal curved pinwheel sun flowers,
wide bright red border band at the hem printed with large yellow pinwheel flowers outlined in
black, thin black edge; matching chiromani shawl of the same fabric draped over the left
shoulder; fitted long-sleeve red lace top underneath
```

Astuce : pour un rendu encore plus fidèle du tissu, importez une photo du salouva dans
Higgsfield et ajoutez-la comme deuxième `image_references`.
