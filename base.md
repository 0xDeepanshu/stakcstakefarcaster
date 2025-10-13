Here’s a **README.md** that summarizes all the essential guidelines and implementation notes for the Base motion/animation system based on the instructions from the motion section of the Base brand page:

***

# Base Motion & Animation Guidelines

Base’s animation principles turn static screens into engaging, living experiences that reinforce identity, guide attention, and reward interaction. Implement these guidelines to ensure all motion in your product aligns with Base’s personality and branding.

## Principles

- **Intention first:** Every animation signals a specific state change or reinforces hierarchy.
- **Playful restraint:** Use small bounces and subtle overshoot to add warmth—avoid excessive novelty.
- **Consistency with flexibility:** Use a single cubic-bezier curve (`0.4, 0, 0.2, 1`) for all transitions. Adjust duration, not timing.
- **Snappy pace:** UI feedback should be quick. Target durations between **120-240 ms**.
- **Square-led choreography:** Many motions should begin or end with the Base Square for brand anchor.
- **Tech-positive polish:** All transitions should feel like speedy, smooth upgrades, not flashy distractions.

## Motion Types

### 1. Tech Scramble Animation

- Reveals text by cascading vertical glyph swaps.
- Use for headlines, teasers, and keynotes—**never** for body text.
- Use Medium weight type, limit effects to **≤800 ms**.
- Pair with a quick fade-in of supporting content to maintain hierarchy.

### 2. Logotype Animations

- The logotype can scramble, rotate, or briefly morph into icons, then snap back to “base”.
- Maintain **tracking and baseline**—animation should end crisp.
- For expressive moments (launches, streams, teasers): use variants.
- General UI: use simple slide-in.
- **Do NOT:** Distort letterforms beyond 10° or exceed 1-second runtime.

### 3. Intro/Outro Presets

Choose from 4 presets:

- **Square-wipe:** Content slides in as the Square moves left-to-right.
- **Center-burst:** Square expands to full-bleed, then collapses, revealing new scene.
- **Grid-mosaic:** Nine mini Squares flip to show new artwork.
- **Type-scramble:** Headline resolves first, then the UI fades in.

**Rules:**

- Keep any sequence **≤800 ms**
- Use only one transition style per story.
- Ensure transitions align with baseline grid before resuming interaction.

## Animation Parameters

| Aspect   | Value           |
|:---------|:----------------|
| **Curve** | cubic-bezier(0.4, 0, 0.2, 1) |
| **Standard Duration** | 120–240 ms (UI feedback) |
| **Max Runtime (headline/type scramble/intro/outro)** | 800 ms |
| **Logotype Distortion** | ≤10° |
| **Logotype Animation** | ≤1 s |

## Misuse — What **Not** to Do

- **Do NOT** use motion blur.
- **Do NOT** use incorrect animation curves or speeds.
- **Do NOT** distort the Square.
- **Do NOT** use 3D rotation.

## Example (CSS)

```css
/* Example: Standard transition */
.transition {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Square-Wipe pseudo-selector example: */
.square-wipe {
  animation: squareWipe 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes squareWipe {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
```

## Credits

For further details and downloadable assets, check the [Base Brand Kit](https://www.base.org/brand).

***

**Adapt and extend these guidelines into your own project based on the context and platforms you use (React, iOS, Unity, etc.).** If you want platform-specific implementation samples (for React, Swift, etc.), let me know!

[1](https://www.base.org/brand/motion#motion)