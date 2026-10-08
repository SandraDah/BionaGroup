# Biona Group

Biona Groups första webbversion: en mörkgrön och kopparfärgad, responsiv webbplats för kunder, industriella partners, etableringsaktörer och investerare.

## Starta lokalt

Kräver Node.js 20.9 eller senare och npm.

```bash
npm ci
npm run dev
```

Öppna http://localhost:3000/sv/. `npm run build` producerar en statisk webbplats i `out/`. `npm run preview` serverar den färdiga exporten på port 3000 och kräver Python 3. Webbplatsen kan publiceras hos en värd som stöder statiska filer eller som ett vanligt Next.js-projekt med exportkonfigurationen kvar.

## Struktur och innehåll

- `lib/content.ts`: alla svenska, engelska och tyska texter, ledningens namn och roller.
- `app/[lang]/page.tsx`: startsida.
- `app/[lang]/[slug]/page.tsx`: Biobruk, teknik, aktivt kol, vätgas, etableringar, om Biona, partners och kontakt.
- `components/`: navigation, språkval, sidfot och återanvändbara sektioner.
- `app/globals.css`: design, mobilanpassning och reducerad rörelse.
- `public/images/biobruk-concept.webp`: optimerad AI-genererad konceptvisualisering.

Samtliga 27 språksidor förgenereras. Språkvalet bevarar aktuell sida. Root-adressen leder till svenska startsidan med manuella språkval som reserv. Navigation, regionernas utfällbara information och kontakt via mailto fungerar utan externa tjänster. Kontaktformulär och nyhetsarkiv är inte implementerade. Inga egna analysverktyg eller externa typsnitt används. Vimeo laddas först när besökaren startar filmen.

## Innehållsstatus och granskning inför publik lansering

Webbversionen utgår från Sandras tillhandahållna underlag. BET 1 250–1 280 m²/g anges som två rapporterade tester av testmaterial; labbrapporter har inte granskats i detta repo. Uppgifterna är inte en allmän produktgaranti och kundspecifik rening behöver verifieras. Inga allmänna PFAS-garantier, påhittade kundreferenser, värderingar, nyheter eller anläggningsbeslut har lagts till.

Vision 20/20 är ett långsiktigt mål. Vätgas genom elektrolys är ett planerat utvecklingsområde. Returflöden och regenerering beskrivs som under utvärdering. Klimatnytta behöver underbyggas för respektive anläggning.

Ledningen visas med fem namn, roller och originalporträtt från den tillhandahållna PwC-presentationen, ”Company Presentation Biona v3”, PDF-sida 6 (tryckt sida 5). Porträtten extraheras från respektive namngiven kolumn och sparas som WebP utan ändringar av personernas utseende. Samma sektion används på startsidan och Om Biona i alla tre språk. Kontaktlänk går till Joacim Sagers adress från det tillhandahållna underlaget.

Inför officiell lansering bör Biona godkänna produkttexter, tester, roller, kontaktadress och språkversioner samt komplettera faktaunderlaget. Sidan ska inte användas för att utlova volymer eller klimatprestanda utan verifierade specifikationer.

## Bild och design

Designriktning: mörk skogsgrön, varm koppar, stora serifrubriker och industriell fotograferingskänsla. De tre uppladdade designförslagen är referenser och har inte bäddats in som webbsidor.

Hero-bilden är skapad med bildskapande och markeras synligt som konceptvisualisering. Den visar inte en befintlig Biona-anläggning. Bildbrief: skandinavisk träbaserad cirkulär processindustri i skog vid skymning, rostfria torn, kopparfärgade ljus, ingen text eller personer. Produktionsbilden är WebP, cirka 288 kB.

## Kontrollera

```bash
npm run typecheck
npm run build
```

Kontrollera dessutom navigation, språkbyte, mobilmeny, regioninformation, kontaktlänk, läsbarhet, tangentbordsfokus och sidornas metadata i webbläsare.

## Officiell identitet och film

Loggan i sidhuvud och sidfot är den befintliga vektorloggan från `https://biona.se/`, extraherad ur den offentliga sidans SVG-resurs `svg-648367983_47370` med oförändrade banor och färger. Favicon är samma PNG-resurs som den befintliga sidan använder. Ersätt inte med en skriven eller AI-genererad logotyp.

Filmen ”Från rest till resurs” är Bionas Vimeo-video: `https://vimeo.com/1090022360` (59 sekunder enligt Vimeos oEmbed-metadata). Förhandsbilden kommer från samma videos officiella metadata. Spelaren laddas först efter ett klick. Den använder Vimeos `dnt=1`; tredjepartsinnehåll förklaras före uppspelning och i sidfoten. En direktlänk till Vimeo finns som reserv.

`components/Film.tsx` innehåller filmsektionen och dess tre språkversioner. Filmen i sig är originalversionen och har inte översatts eller ändrats.

En privat visningsversion publiceras separat för granskning. Ändringen innebär ingen ompekning av biona.se och ingen ändring av den befintliga webbplatsen. Webbplatskod granskas fortsatt i GitHub.

## Beredskap och rent vatten

Filmen ligger direkt efter huvudvyn. Beredskap beskrivs som Bionas ambition. Den nya konceptbilden `public/images/resilient-sweden-water.webp` skapades med ImageGen: ett glas rent vatten, svensk skog, vattendrag och lokal industri i ljust naturligt dagsljus, utan text eller logotyper. Den är märkt som AI-genererad konceptbild, inte dokumentation av en befintlig anläggning.

## Etableringsnätverket

Sverigekartan använder Natural Earth 1:110m Admin 0 Countries (public domain), https://naturalearth.s3.amazonaws.com/110m_cultural/ne_110m_admin_0_countries.zip. Nätverk, nav och ringar är schematiska, utan namngivna orter, kunder eller partners. Kartkontrollerna framhäver terminaler, kunder respektive partners. Bildkänslan utgår från användarens Biona-referenser: ljus natur, dämpat grönt, vatten och organiska linjer. Tidigare ortnamn i regionlistorna ersätts med norr, söder, väst och öst.

## Visionens tillväxtanimation

Den tidigare statiska nätverkskartan ersätts på samma plats av en styrbar illustration som växer från 1 till 20 möjliga Biobruk. Uppspelning sker efter klick, kan pausas och återstartas, samt styras med ett tangentbordstillgängligt reglage. Nav, samverkanspunkter och förbindelser växer tillsammans. De 20 navens positioner är schematiska inom landkonturen och visar inte beslutade orter eller en tidplan. Vid prefers-reduced-motion visas 20 nav utan rörelse; reglaget finns kvar.

## Activated carbon and PFAS

The product page invites municipalities and water utilities to discuss innovation procurement and testing. Ongoing extensive quality tests and planned sales launch in November 2026 are provided by Biona. BET values describe reported material tests, not verified PFAS removal performance. No participating municipality, contract or removal percentage is invented. Contact actions lead to the existing contact page. Swedish, English and German copy is included.

## Revised network and product copy

Feedstock species are confidential and omitted from all technology translations. Activated-carbon section 3 describes the next validation step positively; the repeated final BET panel is removed. Establishment headlines are distinct. Growth begins schematically in central Sweden, then the southwest and east, with clearly overlapping 28/55/82 rings. Illustrative customer markers span Sweden from the first hub; terminal and partner markers grow with the hubs. Locations remain illustrative.

## Biona concept imagery

Two generated cinematic scenes extend the supplied demo mood: a small modular forest-and-lake Biobruk and a branded freight truck. The official Biona SVG was supplied as a logo reference. The facility image appears on the homepage and Biobruk page; logistics follows the establishment map. Standalone images have localized alt text and AI concept captions. Generation brief: cinematic Swedish industry, forest and water, subdued blue-grey light, green livery, faithful dotted Biona logo, no overlay copy or extra slogans. Created with the built-in image generator. Assets: public/images/biona-biobruk-brand.webp and public/images/biona-transport-brand.webp.
