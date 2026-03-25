# Slide Layout Catalogue

Slide layouts for the Dynatrace Marpit/Marp template.
Derived from the Dynatrace Corporate PPT 2026 template (64 slide layouts).

---

## Quick Reference

| CSS Class | POTX Layout | Description | Background |
|-----------|-------------|-------------|------------|
| `cover` | Title Slide | Opening/title slide | Dark (title-dark-bg.png) |
| `cover-speaker` | Title slide 1-4 speakers | Title with speaker photos | Dark |
| `agenda` | Agenda | Topic list | Dark (section-dark-bg.png) |
| `content` | Title+content_left | Standard content | White |
| `content-centered` | Title+content_centered | Centered content | White |
| `content-2col` | Title+content_left_2column | Two-column layout | White |
| `content-image` | Content+image_right/left | Content with image | White |
| `eyebrow` | Title+content+eyebrow | Small label above title | White |
| `title-left` | Title_left | Large title only, left | White |
| `title-centered` | Title_centered | Large title only, centered | White |
| `title-middle-left` | Title_middle aligned_left | Mid-page title, left | White |
| `title-middle-right` | Title_middle aligned_right | Mid-page title, right | White |
| `section` | Section Header | Chapter divider | Navy (#1A2440) |
| `section-content` | Section header+content | Section with body text | Navy |
| `full-image` | Image-fullscreen | Full-bleed image | Image |
| `quote` | Quote | Pull-quote | Navy |
| `customer-story` | Customer story | Case study layout | White |
| `metrics` | *(custom)* | KPI metric cards | Navy |
| `hero-cards` | Hero image+3/4 cards | Hero image with cards | White |
| `code` | *(custom)* | Code snippet slide | Dark (#0F1421) |
| `menu` | Menu slide 1-4 | Navigation/overview | Navy |
| `icon-cards` | Icon cards+title | Cards with icons | White |
| `images` | 2-8 images | Image grid | White |
| `text-2col` | 2 text columns | Multi-column text | White |
| `text-3col` | 3 text columns | Multi-column text | White |
| `text-4col` | 4 text columns | Multi-column text | White |
| `closing` | Thank you slide | Closing/thank-you | Dark (closing-dark-bg.png) |
| `blank` | Blank_graphic | Empty white canvas | White |
| `blank-dark` | Blank_black | Empty dark canvas | Navy |

---

## Marpit Usage

```markdown
---
marp: true
theme: dynatrace
size: 16:9
paginate: true
---

<!-- _class: cover -->
# Title Here
## Subtitle

---

<!-- _class: section -->
# Section Title

---

<!-- _class: content -->
# Slide Title
- Bullet points here

---

<!-- _class: content-2col -->
# Two Columns
<div class="columns">
<div class="col">

### Left
- Point A

</div>
<div class="col">

### Right
- Point B

</div>
</div>

---

<!-- _class: quote -->
> "Quote text here"

— Attribution

---

<!-- _class: closing -->
# Thank You
```

---

## Colour Scheme

| Token | Hex | Usage |
|-------|-----|-------|
| `--dt-dark2` | `#1A2440` | Primary dark background, navy |
| `--dt-accent1` | `#49C2B3` | Teal – success, positive |
| `--dt-accent2` | `#3BACF0` | Sky blue – links on dark |
| `--dt-accent3` | `#1966FF` | Bright blue – primary brand |
| `--dt-accent4` | `#5E28E5` | Purple – gradient accent |
| `--dt-accent5` | `#8D1CDC` | Deep purple – gradient accent |
| `--dt-accent6` | `#C93FDB` | Magenta – gradient accent |

## Typography

| Element | Font | Weight |
|---------|------|--------|
| Headings | DTFlow-Medium | 500 |
| Body text | DTFlow-Light | 300 |
| Bold/emphasis | DTFlow-Semibold | 600 |
| Section numbers | DTFlow-Hairline | 100 |

---

## AI Usage Guidance

1. **Always start with `cover`** – one cover slide per presentation
2. **Use `section` between major topics** – typically 3–6 sections
3. **Use `content` for most slides** – 60–70% of a typical deck
4. **Use `content-2col`** for comparisons (before/after, pros/cons)
5. **Use `metrics`** for KPI dashboards and observability results
6. **Use `code`** for technical demos and configuration examples
7. **Use `quote` sparingly** – max 1–2 per presentation for impact
8. **Always end with `closing`** – one closing slide per presentation
9. **Use `full-image`** for architecture diagrams needing maximum space
10. **Use `agenda`** after the cover slide to set expectations
