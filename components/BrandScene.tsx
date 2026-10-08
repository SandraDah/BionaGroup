import type {Lang} from '@/lib/content';
const scenes={
 sv:{biobruk:['Ett litet, modulärt framtida Biobruk med Bionas logga på fasaden, omgivet av svensk skog och vatten.','Konceptbild av ett framtida Biobruk.'],transport:['En Biona-profilerad lastbil på en väg genom skog och sjölandskap.','Vätgasdriven lastbil.']},
 en:{biobruk:['A small modular future Biobruk with Biona branding, surrounded by Swedish forests and water.','Concept image of a future Biobruk.'],transport:['A Biona-branded truck travelling through a forest and lake landscape.','Hydrogen-powered truck.']},
 de:{biobruk:['Ein kleines modulares zukünftiges Biobruk mit Biona-Logo, umgeben von schwedischen Wäldern und Wasser.','Konzeptbild eines zukünftigen Biobruk.'],transport:['Ein Lkw mit Biona-Logo auf einer Straße durch Wald- und Seenlandschaft.','Wasserstoffbetriebener Lkw.']}
} as const;
export default function BrandScene({lang,scene}:{lang:Lang;scene:'biobruk'|'transport'}){
 const [alt,caption]=scenes[lang][scene];
 return <section className="brand-scene section"><figure className="container"><img src={`/images/biona-${scene==='biobruk'?'biobruk':'transport'}-brand.webp`} width="1536" height="1024" alt={alt} loading="lazy"/><figcaption>{caption}</figcaption></figure></section>;
}
