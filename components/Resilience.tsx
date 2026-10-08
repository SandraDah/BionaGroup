import Link from 'next/link';
import type {Lang} from '@/lib/content';
import {resilienceCopy} from '@/lib/resilience';
export default function Resilience({lang}:{lang:Lang}){
 const c=resilienceCopy[lang];
 return <section className="resilience section" aria-labelledby="resilience-title"><div className="container resilience-grid"><figure className="resilience-figure"><img src="/images/resilient-sweden-water.webp" alt={c.alt} width="1536" height="1024" loading="lazy" decoding="async"/><figcaption>{c.caption}</figcaption></figure><div className="resilience-copy"><p className="eyebrow">{c.label}</p><h2 className="line-break" id="resilience-title">{c.title}</h2><p>{c.body}</p><ul>{c.points.map(([title,body])=><li key={title}><h3>{title}</h3><p>{body}</p></li>)}</ul><Link className="text-link" href={`/${lang}/biobruk/`}>{c.link}</Link></div></div></section>;
}
