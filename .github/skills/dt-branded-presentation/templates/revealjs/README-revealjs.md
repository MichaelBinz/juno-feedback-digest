# Dynatrace reveal.js Presentation Template

A reveal.js presentation template based on the official Dynatrace Corporate PPT 2026 slide masters.
Features 30+ slide layouts with full brand compliance.

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- For development: a local HTTP server

## Quick Start

1. Open `index.html` in a browser (via a local server at the package root)
2. Edit the slide content directly in `index.html`
3. Each `<section>` element is one slide

## Running a Local Server

```bash
# From the package root:

# Python 3
python3 -m http.server 8000

# Node.js
npx http-server .

# Then open: http://localhost:8000
```

## Slide Layouts

Apply layouts as CSS classes on `<section>` elements:

```html
<section class="cover">...</section>
<section class="section">...</section>
<section class="content">...</section>
<section class="content-2col">...</section>
<section class="content-image">...</section>
<section class="quote">...</section>
<section class="metrics">...</section>
<section class="code">...</section>
<section class="closing">...</section>
```

See `template/docs/slide-layouts.md` for the full 30+ layout catalogue.
See `template/docs/ai-instructions.md` for AI usage instructions.

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `S` | Speaker notes |
| `F` | Fullscreen |
| `O` / `Esc` | Overview grid |

## Exporting to PDF

1. Open `index.html` in Chrome with `?print-pdf` appended to the URL
2. Print dialog → Save as PDF → Landscape → No margins → Background graphics ON

## Structure

```
├── README-revealjs.md
└── template/
    ├── index.html              # Starter presentation
    ├── css/
    │   ├── dynatrace.css       # Theme (fonts, colors, typography)
    │   └── layouts.css         # Slide layout classes
    ├── js/
    │   └── dynatrace-init.js   # Reveal.initialize() config
    ├── assets/
    │   ├── fonts/              # DTFlow family (10 weights)
    │   ├── backgrounds/        # Slide backgrounds
    │   └── images/             # Logos and icons
    ├── vendor/
    │   └── reveal.js/          # reveal.js v5.2.1 (self-contained)
    └── docs/
        ├── ai-instructions.md  # AI usage guide
        └── slide-layouts.md    # Layout catalogue
```
