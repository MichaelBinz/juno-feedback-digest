# Design Tokens

Extracted from the Dynatrace Corporate PPT 2026 template (theme1.xml, Custom 3 scheme).
Identical across both Marp and reveal.js templates.

## Colour Palette

| Role | CSS Variable | Hex | Usage |
|------|-------------|-----|-------|
| Dark 1 | `--dt-dark1` | `#000000` | True black |
| Dark 2 (Navy) | `--dt-dark2` | `#1A2440` | Primary dark backgrounds |
| Light 1 | `--dt-light1` | `#FFFFFF` | White text, white backgrounds |
| Light 2 (Muted) | `--dt-light2` | `#6F747F` | Secondary/muted text |
| Subtle grey | `--dt-color-subtle` | `#B0B5BD` | Subtle borders, captions |
| Accent 1 (Teal) | `--dt-accent1` | `#49C2B3` | Success states, positive metrics |
| Accent 2 (Sky) | `--dt-accent2` | `#3BACF0` | Links on dark, secondary highlight |
| Accent 3 (Blue) | `--dt-accent3` | `#1966FF` | Primary brand accent, headings |
| Accent 4 (Purple) | `--dt-accent4` | `#5E28E5` | Chart accent, gradient element |
| Accent 5 (Deep) | `--dt-accent5` | `#8D1CDC` | Chart accent, gradient element |
| Accent 6 (Pink) | `--dt-accent6` | `#C93FDB` | Chart accent, gradient element |

**Rule:** Do not use colours outside this palette. The gradient bar and accent elements are intentional Dynatrace brand elements.

## Gradient Definitions

### Accent Gradient Bar
Full-width, 4–6px tall. Applied at the bottom of white/light slides and top of section dividers.

```css
background: linear-gradient(90deg,
  var(--dt-accent1),
  var(--dt-accent2),
  var(--dt-accent3),
  var(--dt-accent4),
  var(--dt-accent5),
  var(--dt-accent6)
);
```

### Section Top Bar
6px tall, same gradient, placed at the top of navy section slides.

## CSS Custom Properties (reveal.js mapping)

reveal.js maps Dynatrace tokens to `--r-` variables:

| reveal.js Variable | Maps To |
|---|---|
| `--r-background-color` | `--dt-light1` (#FFFFFF) |
| `--r-main-font` | DTFlow-Light |
| `--r-heading-font` | DTFlow-Medium |
| `--r-main-color` | `--dt-dark2` (#1A2440) |
| `--r-heading-color` | `--dt-dark2` (#1A2440) |
| `--r-link-color` | `--dt-accent3` (#1966FF) |

## Logo Variants

Five SVG/PNG files in [`assets/images/`](../assets/images/):

| File | Usage |
|------|-------|
| `dt-logo-white-horizontal.svg` | White horizontal — cover slides, dark backgrounds (top-left) |
| `dt-logo-black-horizontal.svg` | Black horizontal — light backgrounds |
| `dt-logo-color-horizontal.svg` | Full-colour horizontal — bottom-left on white slides |
| `dt-logo-white-full.svg` | White shield + text — dark slides |
| `decorative-orb.png` | Decorative particle/orb element |

### Logo Placement Rules

- **White/light slides:** Bottom-left, 140px wide, colour or black variant
- **Dark/navy slides:** Top-left, 140px wide, white variant
- **Cover slides:** Top-left, white horizontal variant

## Background Assets

Eight PNG files in [`assets/backgrounds/`](../assets/backgrounds/):

| File | Used For |
|------|----------|
| `cover-gradient-bg.png` | Cover slide — dark with gradient/nebula |
| `title-dark-bg.png` | Title slides on dark background |
| `section-dark-bg.png` | Section dividers, agenda slides |
| `section-header-bg.png` | Section header variant |
| `content-dark-bg.png` | Dark content slides |
| `closing-dark-bg.png` | Closing/thank-you slides |
| `gradient-bar.png` | Thin gradient bar (bottom of white slides) |
| `sidebar-strip.png` | Decorative strip on quote layouts (right edge) |

## Spacing System

| Element | Value |
|---------|-------|
| Slide padding (top/bottom) | 50–100px |
| Slide padding (left/right) | 60–80px |
| Column gap | 40–80px |
| Card border-radius | 8px |
| Card background | `rgba(255, 255, 255, 0.06–0.12)` |
| Card border | `1px solid rgba(255, 255, 255, 0.1)` |
| Gradient bar height | 4–6px |
| Logo width | 140px |
