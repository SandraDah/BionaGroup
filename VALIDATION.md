# Validation · 2026-10-08

- `npm run build`: passed. Static export generated for 27 content routes (9 pages × 3 languages), entry page and 404 page.
- `npm run typecheck`: passed.
- Export inspection: all 27 content routes have correct `html lang`, one H1 and a nonempty meta description. 1,092 internal links, anchors and asset references resolved successfully.
- Browser QA: Swedish home and activated-carbon page rendered successfully. English language switch retained the product page. Region details expanded. German location and contact routes rendered. Contact links use the supplied business address. No horizontal overflow on the inspected desktop view.
- Homepage desktop layout visually inspected. Hero image loads and is visibly labelled as a concept visualisation.
- Mobile breakpoints are implemented; automated mobile browser execution was not completed in this environment. Do a device-width pass before public launch.
- No lab reports were reviewed. Test values and team roles come from user-provided information; launch approval and evidence review remain with Biona.

No live website deployment or merge is part of this change. Contact is by email link; no contact form backend is claimed.

## Brand and film update

- Official Biona SVG paths and favicon retrieved from the existing public biona.se page.
- Vimeo oEmbed confirms Biona video 1090022360, public embed URL, 59-second duration and original thumbnail.
- Third-party player is mounted only after the visitor starts the film; direct Vimeo fallback link remains visible.
- First-party privacy copy updated in all three languages to account for Vimeo.

- Updated production build passed. All 27 routes and 1179 internal links, assets and anchors checked.
- Browser QA: film creates no iframe before start; after the start click one Vimeo iframe loads and playback was visually verified. Official logo and poster inspected.
- Locale pages now use a proper localized root document, and the entry and 404 documents use their own layouts.
