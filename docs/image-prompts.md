# Nano Banana prompts

Paste one at a time into Gemini (Nano Banana / 2.5 Flash Image). Generate at the
largest resolution offered. Filenames and placements are in [`images.md`](images.md).

**Why these prompts are written this way:** the AI look comes from words like
*beautiful, stunning, perfect, hyperrealistic, 4k, masterpiece* — they pull the
model toward glossy composite renders. Naming a real camera body, a real lens, an
aperture and an ISO pulls it back toward photography. Asking for visible grain,
natural skin texture and a slightly untidy room does the rest. Do not add
quality-booster words to these.

---

## 1 · `hero-home-dusk.jpg` — hero background (16:9)

> Editorial architectural photograph of a modest two-storey American suburban house at blue hour, taken from across a quiet residential street. Warm interior lights glow in the windows against a deep indigo sky with the last of the sunset low on the horizon. The house occupies the right third of the frame; the left third is empty street, a bare tree and open dark sky. Shot on a Canon EOS R6 with a 35mm lens at f/4, ISO 800, handheld, available light only. Slight sensor grain, natural dynamic range with lifted shadows, no HDR look. An ordinary lived-in street: a recycling bin at the kerb, a garden hose coiled by the porch, a slightly uneven lawn. No people. No text, no signage, no house numbers, no logos or brand marks. Documentary real-estate photography, not a 3D rendering.

**Critical:** the left third must stay dark and empty — the headline sits there.

---

## 2 · `why-01-dedicated-line.jpg` — "A dedicated fiber connection" (4:5)

> Candid documentary photograph of a woman in her late thirties on a video call in a small home office, laptop open, one hand raised mid-sentence. A real working desk: a half-finished mug of tea, an open notebook, a tangle of charging cables, a houseplant that needs watering. Soft north-facing window light from camera left, no fill flash. Shot on a Fujifilm X-T4 with a 23mm lens at f/2, ISO 640. Natural skin texture with visible pores and fine lines, no retouching, no beauty filter. Slight grain. Vertical 4:5 framing. Screen turned away or out of focus with no readable content. No text, no logos, no brand marks anywhere. Unposed, caught mid-moment, editorial rather than stock.

---

## 3 · `why-02-symmetrical-speed.jpg` — "Symmetrical throughput" (4:5)

> Candid documentary photograph of a man in his twenties editing video at a home desk, a large monitor in front of him and over-ear headphones resting around his neck, hand on a mouse mid-scrub. A spare bedroom converted into a workspace: an acoustic foam panel taped slightly crooked to the wall, a small camera on a tripod, coiled cables on the floor. Warm practical lamp light mixed with cool evening light from a window behind him. Shot on a Sony A7 III with a 35mm lens at f/2.2, ISO 1250. Realistic screen glow falling on his face, natural skin texture, no retouching. Visible grain in the shadows. Vertical 4:5 framing. Screen content abstract and defocused with no readable text. No logos or brand names. Unposed documentary style.

---

## 4 · `why-03-predictable-pricing.jpg` — "Predictable monthly pricing" (4:5)

> Candid documentary photograph of a woman in her forties at a kitchen table in the morning, laptop open beside a coffee cup and a small stack of opened post, relaxed posture, faint unforced smile as she looks at the screen. An ordinary lived-in kitchen behind her: a fruit bowl, a tea towel over the oven handle, a child's drawing stuck to the fridge. Soft directional morning light from a window at camera right. Shot on a Canon EOS R6 with a 50mm lens at f/2.8, ISO 400. Natural skin texture, no retouching, no beauty filter. Subtle grain. Vertical 4:5 framing. No readable text on the paper or the screen. No logos, no brand names. Unposed, warm, editorial.

---

## 5 · `why-04-no-bundling.jpg` — "No mandatory bundling" (4:5)

> Candid documentary photograph of a family of three on a sofa in a living room in the evening, watching a wall-mounted television, one of them reaching into a bowl of popcorn. Photographed from behind and slightly to one side so faces are mostly turned away. An ordinary lived-in room: a throw blanket bunched on the sofa arm, a stack of books on the side table, a lamp with a slightly crooked shade. Warm lamp light mixed with cool television glow, no additional lighting. Shot on a Nikon Z6 II with a 35mm lens at f/2.5, ISO 1600. Grain visible in the shadows. Vertical 4:5 framing. The television shows soft abstract colour only, with no readable content. No text, no logos, no brand marks anywhere. Unposed, natural, documentary.

---

## 6 · `bundle-internet-mobile.jpg` — bundle section (6:5)

> Candid documentary photograph of two people on a sofa in a bright living room, one scrolling on a phone and the other working on a laptop, sitting comfortably apart and each absorbed in their own thing. Late afternoon light through a large window at camera left throwing long soft shadows across the floor. An ordinary lived-in room: a coffee table with two mugs and a television remote, a rug rucked up at one corner. Shot on a Canon EOS R6 with a 35mm lens at f/2.8, ISO 500. Natural skin texture, no retouching. Slight grain. Horizontal framing with headroom above the subjects. Phone and laptop screens dim and non-specific with no readable content. No text, no logos, no brand names. Unposed, editorial, not stock photography.

---

## 7 · `install-technician.jpg` — How It Works closing block (14:9)

> Candid documentary photograph of a fibre installation technician kneeling beside the exterior wall of a house, routing a thin cable into a small wall-mounted enclosure, with tools laid out on a cloth on the grass beside him. He wears a plain unbranded work shirt and gloves. Overcast midday light, soft and even, no harsh shadows. An ordinary residential exterior: weathered siding, a downpipe, a scatter of leaves on the ground. Shot on a Nikon Z6 II with a 35mm lens at f/4, ISO 400. Realistic detail in the hands and the equipment, natural skin texture. Slight grain. Horizontal framing. No text, no signage, and no company logos on clothing, vehicles or equipment. A working documentary photograph, not a staged advertisement.

---

## 8 · `og-image.jpg` — social share (optional, 1.91:1)

Skip the generation. Once `hero-home-dusk.jpg` is approved, crop it to 1200 × 630
— it is the same scene and keeps the share card consistent with the page.

---

## If a result looks synthetic

Regenerate rather than accept. Add **one** of these to the end of the prompt, not
all of them at once:

- `Shot on Kodak Portra 400, scanned from negative.`
- `Slightly underexposed, recovered in post, shadows retain noise.`
- `Imperfect handheld framing, subject not centred.`

If hands are malformed, re-run asking for the hands to be out of frame or
occluded — that is far more reliable than trying to prompt them into correctness.
