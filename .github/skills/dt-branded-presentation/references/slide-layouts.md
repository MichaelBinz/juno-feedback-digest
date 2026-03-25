# Slide Layouts

30+ layouts derived from the Dynatrace Corporate PPT 2026 template (64 slide layouts).
Both Marp and reveal.js templates implement the same layout names.

## Quick Reference

| CSS Class | Description | Background |
|-----------|-------------|------------|
| `cover` | Opening/title slide | Dark (title-dark-bg.png) |
| `cover-speaker` | Title with speaker photos (1–4) | Dark |
| `agenda` | Topic list | Dark (section-dark-bg.png) |
| `content` | Standard content — title + bullets | White |
| `content-centered` | Centered content variant | White |
| `content-2col` | Two-column layout | White |
| `content-image` | Content with image (right side) | White |
| `content-image-left` | Content with image (left side) | White |
| `eyebrow` | Small label above main title | White |
| `title-left` | Large title only, left-aligned | White |
| `title-centered` | Large title only, centered | White |
| `title-middle-left` | Mid-page title, left | White |
| `title-middle-right` | Mid-page title, right | White |
| `section` | Chapter/topic divider | Navy (#1A2440) |
| `section-content` | Section header with body text | Navy |
| `full-image` | Full-bleed image | Image |
| `quote` | Pull-quote with decorative mark | Navy |
| `customer-story` | Case study layout | White |
| `metrics` | KPI metric cards | Navy |
| `hero-cards` | Hero image with 3–4 cards | White |
| `code` | Code snippet slide | Dark (#0F1421) |
| `menu` | Navigation/overview (1–4 items) | Navy |
| `icon-cards` | Cards with icons + title | White |
| `images` | Image grid (2–8 images) | White |
| `text-2col` | Two text columns | White |
| `text-3col` | Three text columns | White |
| `text-4col` | Four text columns | White |
| `closing` | Thank-you / Q&A slide | Dark (closing-dark-bg.png) |
| `blank` | Empty white canvas | White |
| `blank-dark` | Empty dark canvas | Navy |

## Layout–Markup Pairing

Each layout has specific CSS classes. Don't mix markup from one layout into another.

| Markup / CSS Class | Belongs in Layout | Background |
|---|---|---|
| `metrics-grid`, `metric-card`, `metric-value`, `metric-label` | `metrics` | Navy |
| `columns`, `col` (Marp) / `col` divs (reveal.js) | `content-2col` | White |
| `blockquote` with attribution | `quote` | Navy |
| `section__number` + `h1` | `section` | Navy |
| `cover__logo`, `cover__content`, `cover__meta` | `cover` | Dark |
| `<ol>` numbered list | `agenda` | Dark |
| Bullet lists (`<ul>`) | `content`, `content-centered` | White |
| `<pre><code>` blocks | `code` | Dark (#0F1421) |

**Rule:** If a slide doesn't look right, check whether the layout class matches the markup. Metric cards on a `content` (white) layout will clash with the logo and gradient bar at the bottom.

## Presentation Structure

A standard Dynatrace presentation follows this pattern:

```
1. cover          → Opening slide (one per deck)
2. agenda         → Topic overview (optional)
3. section        → Topic divider
4. 2–5 content slides (content, content-2col, content-image, metrics, code, etc.)
5. section        → Next topic divider
6. 2–5 content slides
   … repeat …
N. closing        → Thank you / Q&A (one per deck)
```

**Typical size:** 10–25 slides for a 30-minute presentation.

## Marp Syntax

Apply layouts using HTML comments before each slide:

```markdown
<!-- _class: cover -->
# Title
## Subtitle

---

<!-- _class: section -->
# Section Title

---

<!-- _class: content -->
# Slide Title
- Bullet points

---

<!-- _class: content-2col -->
# Two Columns
<div class="columns">
<div class="col">

### Left Column
- Point A

</div>
<div class="col">

### Right Column
- Point B

</div>
</div>

---

<!-- _class: metrics -->
# Key Metrics
<div class="metrics-grid">
  <div class="metric-card">
    <span class="metric-value">99.9%</span>
    <span class="metric-label">Availability</span>
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

## reveal.js Syntax

Apply layouts as CSS classes on `<section>` elements:

```html
<section class="cover">
  <div class="cover__logo">
    <img src="assets/images/dt-logo-white-horizontal.svg" alt="Dynatrace" height="30" />
  </div>
  <div class="cover__content">
    <h1>Title</h1>
    <h2>Subtitle</h2>
    <p class="cover__meta"><strong>Speaker</strong> &bull; Role &bull; Date</p>
  </div>
</section>

<section class="section">
  <span class="section__number">01</span>
  <h1>Section Title</h1>
</section>

<section class="content">
  <h2>Slide Title</h2>
  <ul><li>Content</li></ul>
</section>

<section class="content-2col">
  <h2>Two Columns</h2>
  <div class="col"><h3>Left</h3><p>Content</p></div>
  <div class="col"><h3>Right</h3><p>Content</p></div>
</section>

<section class="metrics">
  <h2>KPIs</h2>
  <div class="metrics__grid">
    <div class="metric-card">
      <span class="metric-card__value">99.9%</span>
      <span class="metric-card__label">Availability</span>
    </div>
  </div>
</section>

<section class="closing">
  <h1>Thank You</h1>
</section>
```

## Layout Selection Guide

| Content Type | Recommended Layout |
|---|---|
| Opening / title | `cover` or `cover-speaker` |
| Topic overview | `agenda` |
| Topic separator | `section` or `section-content` |
| Text + bullets | `content` |
| Centred statement | `content-centered` or `title-centered` |
| Side-by-side comparison | `content-2col` |
| Text + screenshot/diagram | `content-image` |
| Full-screen image | `full-image` |
| KPIs / numbers | `metrics` |
| Code / config | `code` |
| Customer quote | `quote` |
| Case study | `customer-story` |
| Wrap-up | `closing` |
