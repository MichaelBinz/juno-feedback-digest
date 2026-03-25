# Dynatrace Marpit/Marp Presentation Template

A Marp/Marpit presentation theme based on the official Dynatrace Corporate PPT 2026 slide masters.
Supports 30+ slide layouts and exports to HTML, PDF, and PPTX.

## Prerequisites

- [Marp CLI](https://github.com/marp-team/marp-cli): `npm install -g @marp-team/marp-cli`
- Or [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

## Quick Start

1. Open this folder in VS Code — the theme is registered automatically via `.vscode/settings.json`
2. Create a `.md` file inside `theme/` (or copy `theme/examples/example-presentation.md`)
3. Add the front matter:

```markdown
---
marp: true
theme: dynatrace
size: 16:9
paginate: true
---
```

4. Apply layouts with `<!-- _class: layout-name -->` directives

## VS Code Setup

The included `.vscode/settings.json` registers the theme automatically.
If you need to set it up manually:

```json
{
  "markdown.marp.themes": [
    "./theme/dynatrace.css"
  ]
}
```

## Export Commands

Run all commands from the **template root directory** (where README-marpit.md lives).
HTML output must be at the root so `url('theme/assets/...')` paths resolve correctly.

```bash
# HTML
marp presentation.md --theme theme/dynatrace.css --html --allow-local-files -o output.html

# PDF
marp presentation.md --theme theme/dynatrace.css --html --allow-local-files --pdf -o output.pdf

# PPTX
marp presentation.md --theme theme/dynatrace.css --html --allow-local-files --pptx -o output.pptx

# Build the example
marp theme/examples/example-presentation.md --theme theme/dynatrace.css --html --allow-local-files -o example.html
```

## Available Layouts

| Directive | Layout |
|-----------|--------|
| `<!-- _class: cover -->` | Cover / title slide (dark) |
| `<!-- _class: cover-speaker -->` | Cover with speaker info |
| `<!-- _class: agenda -->` | Agenda (dark) |
| `<!-- _class: section -->` | Section divider |
| `<!-- _class: content -->` | Standard content (white) |
| `<!-- _class: content-centered -->` | Centered content |
| `<!-- _class: content-2col -->` | Two-column layout |
| `<!-- _class: content-image -->` | Content + image (right) |
| `<!-- _class: content-image-left -->` | Content + image (left) |
| `<!-- _class: title-centered -->` | Large centered title |
| `<!-- _class: quote -->` | Pull quote (dark) |
| `<!-- _class: metrics -->` | KPI cards (dark) |
| `<!-- _class: code -->` | Code slide |
| `<!-- _class: closing -->` | Closing slide |

See `theme/docs/slide-layouts.md` for the full 30+ layout catalogue.
See `theme/docs/ai-instructions.md` for AI usage instructions.

## Structure

```
├── .vscode/
│   └── settings.json        # Registers the Marp theme
├── README-marpit.md
└── theme/
    ├── dynatrace.css        # Marp theme (all layouts)
    ├── assets/
    │   ├── fonts/           # DTFlow family (10 weights)
    │   ├── backgrounds/     # Slide backgrounds
    │   └── images/          # Logos and icons
    ├── examples/
    │   └── example-presentation.md
    └── docs/
        ├── ai-instructions.md
        └── slide-layouts.md
```
