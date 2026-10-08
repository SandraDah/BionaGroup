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

Ledning visas med namn och roller. Inga syntetiska porträtt eller påhittade personcitat används. Lägg till godkända originalporträtt senare. Kontaktlänk går till Joacim Sagers adress från det tillhandahållna underlaget.

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
