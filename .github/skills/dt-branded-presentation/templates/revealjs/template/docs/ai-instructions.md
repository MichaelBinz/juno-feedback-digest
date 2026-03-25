# AI Instructions: Dynatrace reveal.js Template

This document provides instructions for AI assistants (e.g., GitHub Copilot, ChatGPT, Claude) on how to use the Dynatrace reveal.js template to generate on-brand slide decks.

---

## 1. Presentation Structure

A well-structured Dynatrace presentation follows this pattern:

```
1. Cover slide          → cover layout
2. Agenda slide         → agenda layout (optional)
3. Section 1 divider    → section layout
4. 2–5 content slides   → content / content-2col / content-image
5. Section 2 divider    → section layout
6. 2–5 content slides
… (repeat for each section)
N. Closing slide        → closing layout
```

**Typical deck size:** 10–25 slides for a 30-minute presentation.

---

## 2. Slide Layout Reference

See `slide-layouts.md` for the full catalogue.

### Quick Reference

| Layout ID         | When to Use                                              |
|-------------------|----------------------------------------------------------|
| `cover`           | First slide only – title, subtitle, speaker, date        |
| `cover-speaker`   | Cover with speaker photo(s)                              |
| `agenda`          | After cover – numbered topic list                        |
| `section`         | Topic separator – one per major section                  |
| `section-content` | Section header with supporting body text                 |
| `content`         | Default slide – title + bullets/paragraphs               |
| `content-centered`| Centered content variant                                 |
| `content-2col`    | Two ideas side-by-side, before/after comparison          |
| `content-image`   | Explain concept with supporting image or screenshot      |
| `content-image-left` | Content with image on the left side                   |
| `eyebrow`         | Small label above the main title                         |
| `title-left`      | Large title only, left-aligned                           |
| `title-centered`  | Large centered title statement                           |
| `full-image`      | Architecture diagram, full-width chart, dense screenshot |
| `quote`           | Key customer quote, impactful statistic                  |
| `metrics`         | KPIs, monitoring values, summary statistics              |
| `customer-story`  | Customer case study layout                               |
| `code`            | Code snippet, config file, API example                   |
| `closing`         | Last slide – thank you, Q&A, contact info                |
| `blank`           | Custom layout – use sparingly                            |
| `blank-dark`      | Custom layout on dark background                         |

---

## 3. Typography Rules

| Element         | Font Family | Weight   | CSS Weight | Typical Size |
|-----------------|-------------|----------|------------|--------------|
| Slide title     | DTFlow      | Medium   | 500        | 44–56px      |
| Section title   | DTFlow      | Medium   | 500        | 56–72px      |
| Section number  | DTFlow      | Hairline | 100        | 120–150px    |
| Body text       | DTFlow      | Light    | 300        | 24–30px      |
| Bullet level 1  | DTFlow      | Light    | 300        | 24–30px      |
| Bullet level 2  | DTFlow      | Light    | 300        | 20–26px      |
| Caption/label   | DTFlow      | Light    | 300        | 16–18px      |
| Code block      | Monospace   | Regular  | 400        | 20–22px      |
| Metric value    | DTFlow      | Bold     | 700        | 48–72px      |
| Bold emphasis   | DTFlow      | Semibold | 600        | (inherits)   |

> The DTFlow font family includes 10 weights: Hairline (100), Thin (200), Extralight (250), Light (300), Regular (400), Medium (500), Semibold (600), Bold (700), Extrabold (800), Heavy (900).

---

## 4. Colour Palette

Extracted from the official Dynatrace Corporate PPT 2026 template (theme1.xml, Custom 3 scheme).

| Role                | CSS Variable       | Hex        | Usage                              |
|---------------------|--------------------|------------|------------------------------------|
| Dark 1              | `--dt-dark1`       | `#000000`  | True black                         |
| Light 1             | `--dt-light1`      | `#FFFFFF`  | White text, white backgrounds      |
| Dark 2 (Navy)       | `--dt-dark2`       | `#1A2440`  | Primary dark backgrounds           |
| Light 2 (Muted)     | `--dt-light2`      | `#6F747F`  | Secondary/muted text               |
| Accent 1 (Teal)     | `--dt-accent1`     | `#49C2B3`  | Success states, positive metrics   |
| Accent 2 (Sky)      | `--dt-accent2`     | `#3BACF0`  | Links on dark, secondary highlight |
| Accent 3 (Blue)     | `--dt-accent3`     | `#1966FF`  | Primary brand accent, headings     |
| Accent 4 (Purple)   | `--dt-accent4`     | `#5E28E5`  | Chart accent, gradient element     |
| Accent 5 (Deep)     | `--dt-accent5`     | `#8D1CDC`  | Chart accent, gradient element     |
| Accent 6 (Pink)     | `--dt-accent6`     | `#C93FDB`  | Chart accent, gradient element     |

**Important:** Do not use colours outside this palette. The gradient bar and accent elements are intentional Dynatrace brand elements.

---

## 5. Using the reveal.js Template

### Setup

1. Open `index.html` in any modern browser (no server needed for basic use)
2. For development: serve via local HTTP server

```bash
python3 -m http.server 8000
# Then open: http://localhost:8000
```

### Authoring a Presentation

Edit `index.html`. Each `<section>` is a slide:

```html
<!-- Cover slide -->
<section class="cover">
  <div class="cover__logo">
    <img src="assets/images/dt-logo-white-horizontal.svg" alt="Dynatrace" height="30" />
  </div>
  <div class="cover__content">
    <h1>Presentation Title</h1>
    <h2>Subtitle or Event Name</h2>
    <p class="cover__meta"><strong>Speaker Name</strong> &bull; Role &bull; Date</p>
  </div>
</section>

<!-- Section divider -->
<section class="section">
  <span class="section__number">01</span>
  <h1>Section 1: Introduction</h1>
</section>

<!-- Standard content -->
<section class="content">
  <h2>Slide Title</h2>
  <ul>
    <li>Bullet point one</li>
    <li>Bullet point two</li>
    <li>Bullet point three</li>
  </ul>
</section>

<!-- Two-column -->
<section class="content-2col">
  <h2>Slide Title</h2>
  <div class="col">
    <h3>Left Column</h3>
    <p>Left content</p>
  </div>
  <div class="col">
    <h3>Right Column</h3>
    <p>Right content</p>
  </div>
</section>

<!-- Metrics -->
<section class="metrics">
  <h2>Key Metrics</h2>
  <div class="metrics__grid">
    <div class="metric-card">
      <span class="metric-card__value">99.9%</span>
      <span class="metric-card__label">Availability</span>
    </div>
    <div class="metric-card">
      <span class="metric-card__value">< 200ms</span>
      <span class="metric-card__label">Response Time</span>
    </div>
  </div>
</section>

<!-- Closing -->
<section class="closing">
  <div class="closing__logo">
    <img src="assets/images/dt-logo-white-horizontal.svg" alt="Dynatrace" />
  </div>
  <h1>Thank You</h1>
  <p>Questions? hello@dynatrace.com</p>
</section>
```

---

## 6. Content Guidelines

### Do's

- **Keep titles concise** – 5–8 words maximum
- **Use 3–5 bullet points** per content slide
- **One idea per slide** – don't overload
- **Use `content-image`** when you have a relevant screenshot or diagram
- **Use consistent padding** – the theme handles margins automatically
- **Prefer bullet points** over long paragraphs
- **Use `metrics` layout** when presenting observability data or KPIs
- **Use `section` dividers** between major topics for visual rhythm

### Don'ts

- **Don't mix dark and light backgrounds** randomly – follow the layout conventions
- **Don't use more than 3 levels of bullet nesting**
- **Don't override brand colours** with non-Dynatrace colours
- **Don't use fonts** other than DTFlow
- **Don't crowd slides** – whitespace is intentional in the Dynatrace brand
- **Don't use low-resolution images** – use at least 1920px wide images for full-bleed layouts
- **Don't remove the gradient bar** – it's a core brand element on light slides

---

## 7. File Reference

### Template Structure

```
index.html               # Starter presentation
css/
  dynatrace.css          # Base theme (fonts, colors, typography)
  layouts.css            # Slide layout classes
js/
  dynatrace-init.js      # Reveal.initialize() configuration
assets/
  fonts/                 # DTFlow font family (.otf, 10 weights)
  backgrounds/           # Slide background images
  images/                # Logos and icons
vendor/
  reveal.js/             # reveal.js v5.2.1 (self-contained)
```
