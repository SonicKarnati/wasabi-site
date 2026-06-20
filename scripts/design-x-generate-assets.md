# Design-X Higgsfield Asset Generation Workflow

## Capability Commands

```bash
higgsfield --version
higgsfield account status
higgsfield model list
higgsfield model get cinematic_studio_2_5
higgsfield model get cinematic_studio_3_0
```

## Cost Estimate Used

```bash
higgsfield generate cost cinematic_studio_2_5 \
  --prompt "[structured hero still prompt]"
```

Result:

`2 credits`

## Generated Hero Still

```bash
higgsfield generate create cinematic_studio_2_5 \
  --prompt "Subject: 3 to 5 Indian students and one facilitator in a bright classroom or community lab. Action: collaborating around modest laptops, notebook wireframes, and a projected prototype on the wall, with one student pointing and others building. Setting: realistic Indian classroom or community learning lab, warm daylight, practical desks, projector glow, no luxury tech staging. Camera: premium documentary still, slightly low editorial angle, shallow depth of field, cinematic composition with negative space for website headline. Lighting: warm natural window light plus soft projector spill. Palette: Wasabi warm cream, deep forest green, charcoal, subtle terracotta accents. Mood: grounded, capable, energetic, future-ready, human-centered. Style: high-end nonprofit innovation film still, editorial documentary realism. Negative: no stock-photo smiles, no fake logos, no readable fake text, no sci-fi neon, no robotic hands, no overpolished corporate classroom, no celebrity likeness. Use case: hero visual for an experimental cinematic website prototype. Aspect ratio: 16:9." \
  --aspect_ratio 16:9 \
  --resolution 1k \
  --json
```

Returned job:

`7b63fa81-ba40-49c5-aef1-e113af9a160e`

Wait command:

```bash
higgsfield generate wait 7b63fa81-ba40-49c5-aef1-e113af9a160e --json
```

Download command:

```bash
curl -L "[result_url]" \
  -o public/assets/design-x/higgsfield/stills/hero-classroom-still.jpeg
```

## Future Video Commands

Inspect the exact video schema first:

```bash
higgsfield model get cinematic_studio_3_0
```

Potential command shape:

```bash
higgsfield generate cost cinematic_studio_3_0 \
  --prompt "[structured video prompt]" \
  --aspect_ratio 16:9 \
  --duration 5 \
  --generate_audio false
```

```bash
higgsfield generate create cinematic_studio_3_0 \
  --prompt "[structured video prompt]" \
  --aspect_ratio 16:9 \
  --duration 5 \
  --generate_audio false \
  --json
```

Video generation was not run in this pass because the account is on a free plan with limited credits.
