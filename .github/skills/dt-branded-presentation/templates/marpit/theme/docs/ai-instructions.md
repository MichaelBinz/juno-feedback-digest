# AI Instructions: Dynatrace Marpit/Marp Template

This document provides instructions for AI assistants (e.g., GitHub Copilot, ChatGPT, Claude) on how to use the Dynatrace Marpit/Marp template to generate on-brand slide decks.

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

## 5. Using the Marpit/Marp Template

### Setup

1. Install [Marp CLI](https://github.com/marp-team/marp-cli): `npm install -g @marp-team/marp-cli`
2. Or install [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

### Authoring a Presentation

Create a `.md` file starting with:

```markdown
---
marp: true
theme: dynatrace
size: 16:9
paginate: true
---

<!-- _class: cover -->

# Presentation Title
## Subtitle or Event Name

**Speaker Name** | Role | Date

---

<!-- _class: agenda -->

# Agenda

1. Introduction
2. Main Topic
3. Results
4. Next Steps

---

<!-- _class: section -->

# Section 1: Introduction

---

<!-- _class: content -->

# Slide Title

- Bullet point one
- Bullet point two
  - Sub-item
- Bullet point three

---

<!-- _class: content-2col -->

# Two Columns

<div class="columns">
<div class="col">

### Left Column
- Point A
- Point B

</div>
<div class="col">

### Right Column
- Point C
- Point D

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
  <div class="metric-card">
    <span class="metric-value">< 200ms</span>
    <span class="metric-label">Response Time</span>
  </div>
  <div class="metric-card">
    <span class="metric-value">0</span>
    <span class="metric-label">Critical Errors</span>
  </div>
</div>

---

<!-- _class: closing -->

# Thank You

Questions? Contact us at hello@dynatrace.com
```

### Exporting

```bash
# HTML
marp presentation.md --theme theme/dynatrace.css --html --allow-local-files -o output.html

# PDF
marp presentation.md --theme theme/dynatrace.css --html --allow-local-files --pdf -o output.pdf

# PPTX
marp presentation.md --theme theme/dynatrace.css --html --allow-local-files --pptx -o output.pptx
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
theme/
  dynatrace.css          # Marp theme file (register in VS Code or pass to CLI)
assets/
  fonts/                 # DTFlow font family (.otf, 10 weights)
  backgrounds/           # Slide background images
  images/                # Logos and icons
```

