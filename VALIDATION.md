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

## Leadership portraits

- Five original portraits extracted from the supplied Company Presentation Biona v3, PDF page 6 (printed page 5); names and roles matched to their labelled columns.
- Founding roles included and Joakim Söndergaard and Mattias Jonsson added in Swedish, English and German.
- Responsive portrait cards shared by home and About Biona; explicit image dimensions, lazy loading and descriptive alt text.

## Daylight palette and reported results

- Warm off-white backgrounds, sage-green sections, dark-green text and matching original-logo treatment applied across all locales and detail pages.
- Hero leads with the existing Biona-reported BET interval, 1 250–1 280 m²/g; result section moved directly below hero. No world ranking is asserted.
- The supplied PwC presentation has no numerical BET report or international benchmark. Test values remain Biona-provided information from the existing site content; the result panel explicitly distinguishes this from published laboratory evidence.

- Final production build and TypeScript passed; six localized home/About pages checked for five portrait assets, matching names/alt text, results anchor and three material facts. Portraits visually checked in browser before the daylight update. Latest browser verification was blocked by a browser URL policy after the supervised preview restarted; no final desktop/mobile screenshot is claimed.
