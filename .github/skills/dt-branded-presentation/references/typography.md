# Typography

The Dynatrace visual identity uses the **DTFlow** font family exclusively.

## Font Family

DTFlow ships with 10 weights as OTF files in [`assets/fonts/`](../assets/fonts/):

| Weight Name | CSS Weight | File |
|-------------|-----------|------|
| Hairline | 100 | `DTFlow-Hairline.otf` |
| Thin | 200 | `DTFlow-Thin.otf` |
| Extralight | 250 | `DTFlow-Extralight.otf` |
| Light | 300 | `DTFlow-Light.otf` |
| Regular | 400 | `DTFlow-Regular.otf` |
| Medium | 500 | `DTFlow-Medium.otf` |
| Semibold | 600 | `DTFlow-Semibold.otf` |
| Bold | 700 | `DTFlow-Bold.otf` |
| Extrabold | 800 | `DTFlow-Extrabold.otf` |
| Heavy | 900 | `DTFlow-Heavy.otf` |

## Typographic Hierarchy

| Element | Font | Weight | Typical Size |
|---------|------|--------|-------------|
| Slide title (H1) | DTFlow | Medium (500) | 44–56px |
| Section title | DTFlow | Medium (500) | 56–72px |
| Section number | DTFlow | Hairline (100) | 120–150px |
| Subtitle (H2) | DTFlow | Medium (500) | 32–44px |
| Subheading (H3) | DTFlow | Medium (500) | 24–34px |
| Body text | DTFlow | Light (300) | 24–30px |
| Bullet level 1 | DTFlow | Light (300) | 24–30px |
| Bullet level 2 | DTFlow | Light (300) | 20–26px |
| Caption/label | DTFlow | Light (300) | 16–18px |
| Bold emphasis | DTFlow | Semibold (600) | (inherits) |
| Metric value | DTFlow | Bold (700) | 48–72px |
| Code block | Monospace | Regular (400) | 20–22px |

## Rules

1. **Only DTFlow.** Do not use other fonts (Arial, Helvetica, etc.) in any branded material.
2. **Headings always Medium (500).** Never use Light or Bold for headings.
3. **Body always Light (300).** Never use Regular (400) for body text — it's too heavy.
4. **Bold emphasis = Semibold (600).** Use `**text**` sparingly for emphasis within body text.
5. **Metric values = Bold (700).** Large numbers on metrics/KPI slides.
6. **Section numbers = Hairline (100).** Oversized decorative numbers (120–150px) displayed at low opacity.
7. **Code blocks use Monospace.** The system monospace font, not DTFlow.
8. **Titles are 5–8 words max.** Keep them short and scannable.
9. **No all-caps headings** unless explicitly part of a layout (e.g., eyebrow labels).
10. **Line height:** ~1.4 for body, ~1.2 for headings.

## CSS Font Loading

Both templates load DTFlow via `@font-face` declarations referencing the font files. The canonical copies live in this skill at [`assets/fonts/`](../assets/fonts/).
