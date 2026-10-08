import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {copy,isLang,isSlug,languages,slugs,type Lang,type Slug} from '@/lib/content';
import {Breadcrumb,Callout,Loop,People} from '@/components/Site';
import EstablishmentNetwork from '@/components/EstablishmentNetwork';
export const dynamicParams=false;
export function generateStaticParams(){return languages.flatMap(lang=>slugs.map(slug=>({lang,slug})));}
export async function generateMetadata({params}:{params:Promise<{lang:string;slug:string}>}):Promise<Metadata>{const {lang,slug}=await params;if(!isLang(lang)||!isSlug(slug))return {};const a=copy[lang].articles[slug];return {title:a.title.replace('\n',' '),description:a.intro};}
export default async function Detail({params}:{params:Promise<{lang:string;slug:string}>}){
 const {lang,slug}=await params;if(!isLang(lang)||!isSlug(slug))notFound();const c=copy[lang];const a=c.articles[slug];
 return <main id="main"><section className={`detail-hero ${slug==='biobruk'?'detail-hero-image':''}`}>
 {slug==='biobruk'&&<><img src="/images/biobruk-concept.webp" alt="" width="1536" height="1024" className="detail-image"/><div className="hero-shade"/></>}
 <div className="container"><Breadcrumb lang={lang} slug={slug}/><p className="eyebrow">{a.label}</p><h1 className="line-break">{a.title}</h1><p className="detail-intro">{a.intro}</p>{slug==='biobruk'&&<p className="concept-label">{c.concept}</p>}</div></section>
 {slug==='etableringar'&&<EstablishmentNetwork lang={lang}/>}
 <section className="article-section section"><div className="container article-layout"><aside><p className="eyebrow">{c.detailLabel}</p><nav aria-label={c.detailLabel}>{a.sections.map((s,i)=><a key={s.title} href={`#del-${i+1}`}><span>0{i+1}</span>{s.title}</a>)}</nav>{slug!=='kontakt'&&<Link className="button button-copper" href={`/${lang}/kontakt/`}>{c.next}</Link>}</aside><div className="article-body">{a.sections.map((s,i)=><section id={`del-${i+1}`} key={s.title}><span className="article-number">0{i+1}</span><h2>{s.title}</h2><p>{s.body}</p></section>)}{slug==='aktivt-kol'&&<div className="inline-metric"><strong>1 250–1 280 <span>m²/g</span></strong><p>{c.bet}</p><small>{c.betNote}</small></div>} {slug==='kontakt'&&<ContactPanel lang={lang}/>}</div></div></section>
 {slug==='biobruk'&&<section className="section"><div className="container"><Loop lang={lang}/></div></section>}
 {slug==='om-biona'&&<People lang={lang}/>}
 {slug!=='kontakt'&&<Callout lang={lang}/>}</main>;
}
function ContactPanel({lang}:{lang:Lang}){const c=copy[lang];return <div className="contact-panel"><p className="eyebrow">{c.emailLabel}</p><h2>Joacim Sager</h2><p>{c.roles[0]}</p><a className="contact-email" href="mailto:joacim.sager@bionagroup.se">joacim.sager@bionagroup.se</a><p>{c.emailNote}</p><div className="contact-detail">Biona Group AB<br/>559401-2808 · Sverige</div></div>;}
