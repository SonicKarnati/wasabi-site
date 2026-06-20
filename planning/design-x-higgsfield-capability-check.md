# Design-X Higgsfield Capability Check

## 1. CLI Installed

Yes.

## 2. CLI Version

`higgsfield 0.2.3 (868f62a6e61ad092074b8af6bb10b17b199b8a15) built 2026-06-18T19:09:33Z`

## 3. Authentication Status

Authenticated.

Account command used:

```bash
higgsfield account status
```

Result:

`saunak.karnati@gmail.com — free plan, 10 credits`

Note: the prompt suggested `higgsfield auth account`, but this CLI build exposes account status under `higgsfield account status`.

## 4. Available Model Categories

`higgsfield model list` returned these categories:

- 3D
- Audio
- Image
- Text
- Video

## 5. Image Generation Available

Yes.

Inspected model:

`cinematic_studio_2_5`

Type:

`image`

Parameters:

- `prompt`
- `aspect_ratio`
- `medias`
- `resolution`

## 6. Video Generation Available

Yes.

Inspected model:

`cinematic_studio_3_0`

Type:

`video`

Parameters:

- `prompt`
- `aspect_ratio`
- `duration`
- `generate_audio`
- `medias`

## 7. Upload Available

Likely yes. CLI help lists an `upload` command for media inputs.

Upload was not needed for this pass.

## 8. Costs / Credits Visible

Yes.

Available credits before generation:

`10 credits`

Cost estimate for one `cinematic_studio_2_5` 1k still:

`2 credits`

## 9. Blockers

No full blocker for image generation.

Video generation was not attempted because the account is on a free plan with limited credits. The prototype uses one generated still and frontend motion/SVG animation for the remaining cinematic slots.

## 10. Proceed Decision

Proceed with a still-first Design-X prototype.

Do not claim that ungenerated video assets exist.
