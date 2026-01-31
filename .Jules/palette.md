# Palette's Journal

## 2025-02-18 - Clickable Divs Anti-Pattern
**Learning:** The app frequently uses `div` or `p` elements with `onClick` for interactive controls (hamburger menu, modal close), making them inaccessible to keyboard and screen reader users.
**Action:** When touching these components, refactor to semantic `<button>` elements with `type="button"` and appropriate `aria-label`s.
