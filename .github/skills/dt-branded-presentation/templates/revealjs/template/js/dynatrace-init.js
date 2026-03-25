/**
 * Dynatrace reveal.js – Initialization Script
 *
 * Configures reveal.js with settings appropriate for
 * a 16:9 Dynatrace-branded presentation.
 */

Reveal.initialize({
  // Slide dimensions (matches Dynatrace PowerPoint master: 16:9)
  width: 1920,
  height: 1080,
  margin: 0.02,
  minScale: 0.1,
  maxScale: 2.0,

  // Display options
  controls: true,
  controlsTutorial: false,
  controlsLayout: 'bottom-right',
  progress: false,
  slideNumber: 'c/t',  // current / total
  showSlideNumber: 'print',
  hash: true,
  history: true,

  // Transition
  transition: 'fade',        // none, fade, slide, convex, concave, zoom
  transitionSpeed: 'default',
  backgroundTransition: 'fade',

  // Keyboard shortcuts
  keyboard: true,

  // Overview (press O or Esc)
  overview: true,

  // Vertical centering – set false for top-aligned content
  center: false,

  // Touch navigation
  touch: true,

  // Auto-slide (set to 0 to disable)
  autoSlide: 0,

  // Speaker notes window
  showNotes: false,

  // PDF export settings
  pdfMaxPagesPerSlide: 1,
  pdfSeparateFragments: false,

  // Plugins – conditionally include only those loaded on the page
  plugins: [
    typeof RevealMarkdown  !== 'undefined' ? RevealMarkdown  : null,
    typeof RevealHighlight !== 'undefined' ? RevealHighlight : null,
    typeof RevealNotes     !== 'undefined' ? RevealNotes     : null,
    typeof RevealSearch    !== 'undefined' ? RevealSearch    : null,
  ].filter(Boolean),

  // Markdown settings
  markdown: {
    smartypants: true,
  },

  // Syntax highlighting
  highlight: {
    highlightOnLoad: true,
  },
});
