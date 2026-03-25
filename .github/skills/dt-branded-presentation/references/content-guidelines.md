# Content Guidelines

Rules for on-brand Dynatrace presentations, standalone graphics, and animated visuals.

## Do's

- **Keep titles concise** — 5–8 words maximum
- **Use 3–5 bullet points** per content slide
- **One idea per slide** — don't overload
- **Use `content-image`** when you have a relevant screenshot or diagram
- **Use consistent padding** — the theme handles margins automatically
- **Prefer bullet points** over long paragraphs
- **Use `metrics` layout** for observability data or KPIs
- **Use `section` dividers** between major topics for visual rhythm
- **Use high-resolution images** — at least 1920px wide for full-bleed layouts
- **Follow the standard structure** — cover → agenda → sections → closing

## Don'ts

- **Don't mix dark/light backgrounds** randomly — follow layout conventions
- **Don't nest bullets more than 3 levels** deep
- **Don't override brand colours** — only use the 11-colour palette
- **Don't use fonts other than DTFlow** (or system monospace for code)
- **Don't crowd slides** — whitespace is intentional in the Dynatrace brand
- **Don't remove the gradient bar** — it's a core brand element on light slides
- **Don't use low-resolution images** in full-bleed layouts
- **Don't use bold for headings** — headings already use Medium (500); bold (700) is for metric values only
- **Don't use all-caps** unless part of a prescribed layout pattern

## Slide Density

| Slide Type | Max Content |
|---|---|
| Content slide | 5 bullets, ~30 words per bullet |
| Two-column | 3–4 bullets per column |
| Metrics | 3–4 metric cards |
| Quote | One quote, one attribution |
| Code | ~15 lines of code, focus on the key part |
| Section divider | Title only (+ optional subtitle) |

## Colour Usage by Context

| Context | Colours to Use |
|---|---|
| Headings on white slides | `--dt-dark2` (navy) |
| Body text on white slides | `--dt-dark2` (navy) |
| Text on dark slides | `--dt-light1` (white) |
| Links on dark slides | `--dt-accent2` (sky blue) |
| Links on light slides | `--dt-accent3` (blue) |
| Success / positive metrics | `--dt-accent1` (teal) |
| Primary brand accent | `--dt-accent3` (blue) |
| Chart colours | accent1 through accent6 in order |
| Gradient decorations | Full accent1→accent6 spectrum |

## Image Guidelines

- **Screenshots:** Crop to relevant area, add 8px border-radius
- **Diagrams:** Use brand colours only, DTFlow font labels
- **Full-bleed images:** Must be ≥1920×1080px, no text overlay unless on a scrim
- **Speaker photos:** Square or circular, at least 200×200px

## Standalone Graphic Density

Standalone graphics (infographics, social cards, diagrams) can be denser than slides because viewers control their own pace. However, the same brand rules apply (palette, DTFlow fonts, gradient bar, border-radius).

| Graphic Type | Max Content |
|---|---|
| Table | Up to 8 rows; split or paginate beyond that |
| Stat / metric cards | 3–6 cards per graphic |
| Comparison grid | 2–4 columns |
| Infographic section | 1 heading + 3–5 bullets or 1 short paragraph |
| Timeline / process flow | 4–8 steps maximum |

**Do's for standalone graphics:**
- Use the `dt-branded-graphics` skill's boilerplate to ensure correct font embedding and CSS variables
- Include the gradient bar on light backgrounds — same as slides
- Maintain generous padding (40–60px) even on smaller canvases
- Use brand colours for all chart/diagram fills — accent1 through accent6 in order

**Don'ts for standalone graphics:**
- Don't skip the gradient bar — it anchors the Dynatrace brand even on non-slide visuals
- Don't crowd small canvases — adapt content to the canvas size, don't force slide-density content into a 600px-wide image
- Don't use raster logos — always use SVGs from `assets/images/`

## Animation Guidelines

For light CSS/JS animations in branded HTML visuals:

- **Keep motion subtle** — fade, slide, and reveal only. No bounce, spin, or elastic effects.
- **Timing:** 0.4–0.8s per element, ease-out or ease-in-out curves. Total sequence under 5 seconds.
- **Stagger:** 0.1–0.2s between sequential items.
- **Colours in motion:** Animate using brand accents only. Gradient transitions must follow accent1→accent6.
- **No external libraries** — vanilla CSS animations and JS only.
