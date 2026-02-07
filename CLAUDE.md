# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Jeremy Ricketts (jeremyricketts.com). The site is built with vanilla HTML, CSS, and jQuery—no build system or framework.

## Architecture

**Static Site Structure:**
- Main portfolio site at root (HTML files served directly)
- `/pco/` subdirectory contains a complete Planning Center Online job application page
- `/css/` - Stylesheets (vanilla CSS, no preprocessor)
- `/js/` - JavaScript files with jQuery dependencies
- `/img/` - Images and SVG assets
- `/fonts/` - FontAwesome web fonts

**Key Dependencies:**
- jQuery 1.7.1 (legacy, loaded from CDN with local fallback)
- Modernizr 2.5.3
- FontAwesome (font files)

## Development

**No Build System:** This site has no build process. Changes to HTML, CSS, or JS files are direct edits.

**Serving Locally:** Use any static file server:
```bash
python -m http.server 8000
# or
python3 -m http.server 8000
# or
npx serve
```

**Testing:** No automated tests. Manual browser testing required.

## Deployment

The site appears to be deployed as static files (likely to GitHub Pages or similar). The git repository contains the production-ready files directly.

**Version Control:**
- Main branch: `master`
- Commit and push changes directly to master

## Browser Support

The site includes IE7-9 conditional comments and uses Modernizr for feature detection. There's also a custom iOS orientation fix in the JavaScript.
