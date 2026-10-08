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

## Early film and resilience story

- Film is the first section after the hero in Swedish, English and German.
- New section describes resilient Sweden and clean water as Biona’s ambition, supported by local resources, customer validation and planned industrial capacity.
- New AI-generated landscape image visually reviewed; it is clearly captioned as a concept and has localized alt text, explicit dimensions and lazy loading.
- Production build and TypeScript passed. All 1,265 internal links, resources and anchors resolve. Homepage section order checked for each locale. Responsive rules are present; a new browser screenshot was not taken.

## Establishment network

- Natural Earth public-domain Sweden outline with illustrative north/west/east/south hubs, ripple rings and terminal/customer/supplier markers. Named locations removed from all regional lists.
- Build and TypeScript passed. All three location routes checked for one H1, four accessible filter controls and schematic map explanation; 1,289 internal resources/links/anchors resolve.
- Swedish location page visually reviewed in browser. Terminal filter sets aria-pressed and dims ten non-terminal markers; full-network control restores all markers. Screenshot captured. No mobile browser run claimed.

## Animated Vision 20/20

- Static network map replaced in place with a user-controlled growth illustration from 1 to 20 potential hubs. No autoplay or geographic commitments.
- Generated 20 schematic hub coordinates inside the Sweden outline, 19 inter-hub links and 40 collaboration markers.
- Production build and TypeScript passed; all three location exports have one H1, one initial hub and a localized range input from 1 to 20.
- Browser verification: playback grew to 15 hubs; pause kept 15 on the next inspection; resume reached exactly 20 and stopped with Replay. Keyboard Home/End selected 1/20 and rendered the matching hub count. Final layout visually reviewed.
- Reduced-motion handling implemented with matchMedia and CSS, showing 20 static hubs and retaining the slider; this preference was not emulated in browser.

## Activated carbon and PFAS

- Updated all three product pages and homepage summaries with PFAS treatment, municipal innovation-procurement/testing invitation and planned sales launch November 2026.
- Production build and TypeScript passed. All three product exports have one H1, five section anchors and valid testing/contact actions.
- Swedish hero visually reviewed in browser; quality-testing action navigated to #del-2. Screenshot captured. Responsive CSS included; no mobile browser test claimed.
- Quality tests and launch timing are Biona-provided statements. BET values are not presented as verified PFAS removal results.

## Network clarity and confidential feedstock

- Production build and TypeScript passed. All technology exports omit the confidential species; product exports omit the final metric panel; location pages use distinct hero and map headings.
- Browser review: initial national customer points and visible rings; ArrowRight selected two hubs; End displayed 20 hubs with overlapping rings. Partners filter selected successfully and dimmed 27 other markers. Screenshot captured.

## Branded concept scenes

- Generated a compact modular Biobruk and a freight truck using the supplied demo mood and official Biona logo references. Revised to subdued forest greens and cinematic light following user feedback.
- Final production build and TypeScript passed. All nine locale/page combinations reference the intended WebP assets. Detail scenes have localized alt text and AI-concept captions.
- Swedish Biobruk page visually reviewed and screenshot captured. No mobile browser test claimed.

## Resilience image mood

- Revised the existing glass/river/waterworks/village scene to match the subdued cinematic forest-green palette of the Biobruk and truck images. Copy, localized alt text and concept caption preserved.
- Production build and TypeScript passed. All three homepage exports reference the new exported image. Swedish section visually reviewed and screenshot captured.

## Benefit-led hero

- Approved homepage headline and introduction implemented in Swedish, English and German. Product action opens activated carbon; film action remains #film. Quality-test/November 2026 status follows the actions.
- Production build and TypeScript passed. All three exports checked for one H1, product/film actions, launch status and no BET values in the hero. Swedish desktop layout visually reviewed and screenshot captured.

## Direct leadership contact

- Five user-supplied email addresses are present on all localized home, About and Contact pages. Homepage/About each have five individual mailto contact buttons with person-specific accessible labels. No messages sent during verification.
- Visible image captions now say Concept image/Konceptbild/Konzeptbild. Production build and TypeScript passed. Swedish leadership cards visually reviewed; long-address line breaking improved.

Homepage fossil-free introduction: static output verified in Swedish, English and German; Swedish hero visually checked at desktop size. PFAS and pharmaceutical residues are presented as intended treatment applications. 100% fossil-free is qualified as a goal; no unverified world-first or complete removal claims were added.

Headline and partner logos: production build and TypeScript pass. All three home and partner exports checked for revised headline and local logo resources. Swedish homepage and partner row visually verified on desktop. Responsive logo grid stacks on narrow screens. Official source assets: PwC slim-header-v2/PwC-logo.svg; Setterwalls inline header SVG; Bränna Natur WordPress custom-logo PNG. Logo placements and fossil-free positioning explicitly requested by Biona; no unverified investment or certification relationship added.
