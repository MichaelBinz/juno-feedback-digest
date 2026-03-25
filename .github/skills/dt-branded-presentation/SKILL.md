---
name: dt-branded-presentation
description: "Dynatrace brand guidelines, design tokens, and slide deck creation with Marp or reveal.js. Use when: creating Marp or reveal.js presentations, choosing slide layouts, reviewing slides for brand compliance, looking up Dynatrace colours/fonts/design tokens, applying DTFlow typography, structuring presentation content. Do NOT use for creating standalone graphics, infographics, animations, or PNG exports — use dt-branded-graphics for those."
---

# Dynatrace Branded Presentations

Apply Dynatrace visual identity — colours, typography, layouts, and content rules — to Marp and reveal.js slide decks.

## When to Use

- Creating a new Marp/Marpit or reveal.js presentation
- Reviewing slides for brand compliance
- Looking up Dynatrace colours, fonts, or design tokens
- Choosing the right slide layout for content
- Structuring presentation content (cover → agenda → sections → closing)

## When NOT to Use

- Creating standalone branded graphics (infographics, tables, diagrams, social cards) → use `dt-branded-graphics`
- Creating light animations (animated diagrams, process flows, data reveals) → use `dt-branded-graphics`
- Creating SVG graphics or icons → use `dt-branded-graphics`
- Exporting to PNG → use `dt-branded-graphics`
- Dynatrace product UI/UX design — this skill covers branded *communications* materials, not product interfaces
- Non-Dynatrace branding — do not apply these tokens to third-party or co-branded materials without explicit approval

## Source Templates

Two presentation templates live in `input-sources/inbox/`:

| Template | Format | Path |
|----------|--------|------|
| Marpit/Marp | Markdown slides | `input-sources/inbox/dynatrace-marpit-template-v1.0.0/` |
| reveal.js | HTML slides | `input-sources/inbox/dynatrace-revealjs-template-v1.0.0/` |

Both share identical design tokens, fonts, backgrounds, and logos. They differ only in implementation (Markdown vs HTML).

## Quick Brand Summary

### Colour Palette (10 colours)

| Role | Variable | Hex |
|------|----------|-----|
| Black | `--dt-dark1` | `#000000` |
| Navy (primary dark) | `--dt-dark2` | `#1A2440` |
| White | `--dt-light1` | `#FFFFFF` |
| Muted grey | `--dt-light2` | `#6F747F` |
| Teal | `--dt-accent1` | `#49C2B3` |
| Sky blue | `--dt-accent2` | `#3BACF0` |
| Blue (primary brand) | `--dt-accent3` | `#1966FF` |
| Purple | `--dt-accent4` | `#5E28E5` |
| Deep magenta | `--dt-accent5` | `#8D1CDC` |
| Pink | `--dt-accent6` | `#C93FDB` |

**Gradient bar:** `linear-gradient(90deg, accent1 → accent2 → accent3 → accent4 → accent5 → accent6)` — 4–6px tall, full-width, bottom of white slides.

### Typography

- **Headings:** DTFlow-Medium (500)
- **Body:** DTFlow-Light (300)
- **Bold emphasis:** DTFlow-Semibold (600)
- **Metric values:** DTFlow-Bold (700)
- **Section numbers:** DTFlow-Hairline (100)

### Key Layout Rules

- **Canvas:** 16:9 (1280×720 Marp, 1920×1080 reveal.js)
- **Padding:** 50–100px top/bottom, 60–80px left/right
- **Border radius:** 8px (cards, images, code blocks)
- **Logo:** Bottom-left on white slides (140px wide), top-left on dark slides
- **Gradient bar:** Never remove — it's a core brand element on light slides

## Detailed References

For deeper detail, consult these reference files:

- [Design tokens](./references/design-tokens.md) — full colour palette, CSS variables, gradient definitions
- [Typography](./references/typography.md) — DTFlow font family, weight hierarchy, sizing rules
- [Slide layouts](./references/slide-layouts.md) — 30+ layout catalogue with usage guidance
- [Content guidelines](./references/content-guidelines.md) — structure, do's/don'ts, presentation patterns

## Procedures

### Understand the Brief

**Run this procedure first before any production work.** Ask the user clarifying questions to avoid rework.

1. **Purpose & audience** — Ask: _"Who is this for and where will it be presented?"_ (internal team, external conference, webinar, training, etc.)
2. **Key content** — Ask: _"What data, text, or structure must appear?"_ Get the actual content upfront — bullet lists, table data, metrics, section topics, etc.
3. **Format** — Ask: _"Marp (Markdown) or reveal.js (HTML)?"_ Suggest Marp for most use cases; reveal.js for interactive or custom HTML needs.
4. **Visual style** — Ask: _"Dark or light background? Minimal or data-dense?"_

Once answers are collected, proceed to the matching procedure below.

### Create a Marp Presentation

1. Create a `.md` file with frontmatter:
   ```yaml
   ---
   marp: true
   theme: dynatrace
   size: 16:9
   paginate: true
   ---
   ```
2. Use `<!-- _class: layout-name -->` before each slide to set its layout.
3. **Match markup to layout.** Each layout has specific CSS classes and HTML structures. Don't mix markup from one layout into another — e.g., `metric-card` divs belong in the `metrics` layout (navy), not `content` (white). See the [layout selection guide](./references/slide-layouts.md) for which markup goes with which layout.
4. Follow the standard structure: cover → agenda → (section → 2–5 content slides) × N → closing.
5. Consult the [slide layouts reference](./references/slide-layouts.md) for available layout classes.
6. Follow [content guidelines](./references/content-guidelines.md) for text density and formatting rules.
7. **Ensure asset paths resolve.** The CSS uses `url('theme/assets/...')` paths relative to the markdown file's location (not the CSS file). A `theme/` folder with `assets/fonts/`, `assets/backgrounds/`, and `assets/images/` must be accessible from the directory where the `.md` file lives. Use a symlink if the `.md` file is outside the template folder:
   ```bash
   ln -sf /path/to/dynatrace-marpit-template-v1.0.0/theme ./theme
   ```
8. Export with Marp CLI:
   ```bash
   marp presentation.md --theme theme/dynatrace.css --html --allow-local-files -o output.html
   ```

### Create a reveal.js Presentation

1. Copy `input-sources/inbox/dynatrace-revealjs-template-v1.0.0/index.html` as starting point.
2. Each `<section class="layout-name">` is one slide.
3. Follow the same structure: cover → agenda → sections → closing.
4. Consult the [slide layouts reference](./references/slide-layouts.md) for CSS classes and HTML structure.
5. Serve locally: `python3 -m http.server 8000`

### Review Content for Brand Compliance

1. Check colours against the palette in [design tokens](./references/design-tokens.md) — no off-brand colours allowed.
2. Verify typography uses DTFlow only (see [typography reference](./references/typography.md)).
3. Confirm the gradient bar is present on white slides.
4. Validate logo placement: bottom-left on light backgrounds, top-left on dark.
5. Check slide density against [content guidelines](./references/content-guidelines.md): max 5 bullets, one idea per slide.

### Export to Presentation HTML

Generate self-contained HTML files that can be opened directly in a browser for preview or presentation.

**From a Marp source file:**

1. Export from `md/` to `html/`:
   ```bash
   npx @marp-team/marp-cli --theme theme/assets/dynatrace.css --html --allow-local-files md/graphic.md -o html/graphic.html
   ```
2. The HTML output is self-contained (CSS inlined, JS embedded) but still references `theme/assets/` for fonts and images — that's why the `html/theme` symlink is needed.

**Batch export all Marp sources:**
```bash
for f in md/*.md; do
  base=$(basename "$f" .md)
  npx @marp-team/marp-cli --theme theme/assets/dynatrace.css --html --allow-local-files "$f" -o "html/${base}.html"
done
```

### Visual QA

**Run this after every presentation creation or export.** Open the output and check for common issues before delivering to the user.

1. **Open the output in a browser.** Use the `open_browser_page` tool for HTML exports.
2. **Check these items visually:**

   | Check | What to look for |
   |-------|-----------------|
   | **Fonts** | Is DTFlow rendering? Or did it fall back to Arial/Helvetica? Look for wrong weight — body text that looks too heavy (Regular instead of Light) |
   | **Colours** | Do all colours match the brand palette? No unexpected greys, blacks, or browser-default blues? |
   | **Gradient bar** | Present at the bottom of light backgrounds? Not missing, not doubled? |
   | **Logo** | Correct variant (colour on light, white on dark)? Positioned correctly? Not clipped or overlapping content? |
   | **Layout** | Content within padding boundaries? No overflow, no clipping, no unexpected scrollbars? |
   | **Spacing** | Consistent gaps between elements? No cramped text or oversized whitespace? |
   | **Text** | All content visible? No text cut off, no lorem ipsum left behind, no broken characters? |
   | **Alignment** | Grid items evenly sized? Table columns balanced? Elements centred when they should be? |

3. **If issues are found**, fix them and re-check. Common fixes:
   - Fonts not loading → verify asset symlink and `@font-face` paths
   - Content overflow → reduce font size, shorten text
   - Misaligned elements → check CSS grid/flex properties
   - Wrong colours → compare hex values against [design tokens](./references/design-tokens.md)
4. **Only deliver after a clean visual check.** Do not hand off output that hasn't been visually verified.

### Look Up a Design Token

1. Open [design tokens](./references/design-tokens.md) for the full variable list.
2. Use `--dt-` prefixed CSS custom properties in stylesheets.
3. For reveal.js, also use `--r-` prefixed variables mapped to the same palette.

## Common Pitfalls

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| **Wrong layout for markup** | Cards/metrics look broken on white bg, or bullets look wrong on navy | Each layout has paired CSS classes. `metric-card` → `metrics` layout. Bullets → `content` layout. Check the [layout selection guide](./references/slide-layouts.md). |
| **Fonts not loading** | Text falls back to system font (Arial/Helvetica) | Marp resolves `url()` paths relative to the `.md` file, not the CSS. Ensure a `theme/assets/fonts/` folder is reachable from where the `.md` lives. Symlink if needed. |
| **Missing backgrounds/logos** | No gradient bar, no logo, plain white/navy slides | Same path issue as fonts. The `theme/assets/backgrounds/` and `theme/assets/images/` folders must be accessible relative to the `.md` file. |
| **Logo on dark slides** | Colour logo visible on navy background | Dark layouts (`section`, `metrics`, `cover`, `closing`) override `background-image: none`. If you see a logo on dark, you're using the wrong layout class. |
| **Skipping the brief** | Rework after delivering wrong format or size | Always run the [Understand the Brief](#understand-the-brief) procedure before production. |
