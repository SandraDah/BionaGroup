import type {Lang} from '@/lib/content';
const scenes={
 sv:{biobruk:['Ett litet, modulärt framtida Biobruk med Bionas logga på fasaden, omgivet av svensk skog och vatten.','AI-genererad konceptbild av ett framtida Biobruk.'],transport:['En Biona-profilerad lastbil på en väg genom skog och sjölandskap.','AI-genererad konceptbild av framtida Biona-logistik.']},
 en:{biobruk:['A small modular future Biobruk with Biona branding, surrounded by Swedish forests and water.','AI-generated concept image of a future Biobruk.'],transport:['A Biona-branded truck travelling through a forest and lake landscape.','AI-generated concept image of future Biona logistics.']},
 de:{biobruk:['Ein kleines modulares zukünftiges Biobruk mit Biona-Logo, umgeben von schwedischen Wäldern und Wasser.','KI-generiertes Konzeptbild eines zukünftigen Biobruk.'],transport:['Ein Lkw mit Biona-Logo auf einer Straße durch Wald- und Seenlandschaft.','KI-generiertes Konzeptbild der künftigen Biona-Logistik.']}
} as const;
export default function BrandScene({lang,scene}:{lang:Lang;scene:'biobruk'|'transport'}){
 const [alt,caption]=scenes[lang][scene];
 return <section className="brand-scene section"><figure className="container"><img src={`/images/biona-${scene==='biobruk'?'biobruk':'transport'}-brand.webp`} width="1536" height="1024" alt={alt} loading="lazy"/><figcaption>{caption}</figcaption></figure></section>;
}
