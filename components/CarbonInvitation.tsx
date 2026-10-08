import Link from 'next/link';
import type {Lang} from '@/lib/content';
import {carbonCopy} from '@/lib/carbon';
export default function CarbonInvitation({lang}:{lang:Lang}){
 const c=carbonCopy[lang];
 return <section className="carbon-invitation section"><div className="container carbon-invitation-grid"><div><p className="eyebrow">{c.label}</p><h2 className="line-break">{c.title}</h2></div><div><p>{c.body}</p><Link className="button button-copper" href={`/${lang}/kontakt/`}>{c.contact}</Link></div></div></section>;
}
