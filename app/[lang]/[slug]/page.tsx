import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {copy,isLang,isSlug,languages,slugs,type Lang,type Slug} from '@/lib/content';
import {Breadcrumb,Callout,Loop,People} from '@/components/Site';
import EstablishmentNetwork from '@/components/EstablishmentNetwork';
import {carbonCopy} from '@/lib/carbon';
import CarbonInvitation from '@/components/CarbonInvitation';
import BrandScene from '@/components/BrandScene';
export const dynamicParams=false;
export function generateStaticParams(){return languages.flatMap(lang=>slugs.map(slug=>({lang,slug})));}
export async function generateMetadata({params}:{params:Promise<{lang:string;slug:string}>}):Promise<Metadata>{const {lang,slug}=await params;if(!isLang(lang)||!isSlug(slug))return {};const a=copy[lang].articles[slug];return {title:a.title.replace('\n',' '),description:a.intro};}
export default async function Detail({params}:{params:Promise<{lang:string;slug:string}>}){
 const {lang,slug}=await params;if(!isLang(lang)||!isSlug(slug))notFound();const c=copy[lang];const a=c.articles[slug];
 return <main id="main"><section className="detail-hero">
 <div className="container"><Breadcrumb lang={lang} slug={slug}/><p className="eyebrow">{a.label}</p><h1 className="line-break">{a.title}</h1><p className="detail-intro">{a.intro}</p>{slug==='aktivt-kol'&&<div className="carbon-hero-action"><p className="carbon-launch">{carbonCopy[lang].launch}</p><div className="hero-buttons"><Link className="button button-copper" href={`/${lang}/kontakt/`}>{carbonCopy[lang].join}</Link><a className="button button-outline" href="#del-2">{carbonCopy[lang].tests}</a></div></div>}</div></section>
 {slug==='biobruk'&&<BrandScene lang={lang} scene="biobruk"/>}
 {slug==='etableringar'&&<><EstablishmentNetwork lang={lang}/><BrandScene lang={lang} scene="transport"/></>}
 <section className="article-section section"><div className="container article-layout"><aside><p className="eyebrow">{c.detailLabel}</p><nav aria-label={c.detailLabel}>{a.sections.map((s,i)=><a key={s.title} href={`#del-${i+1}`}><span>0{i+1}</span>{s.title}</a>)}</nav>{slug!=='kontakt'&&<Link className="button button-copper" href={`/${lang}/kontakt/`}>{c.next}</Link>}</aside><div className="article-body">{a.sections.map((s,i)=><section id={`del-${i+1}`} key={s.title}><span className="article-number">0{i+1}</span><h2>{s.title}</h2><p>{s.body}</p></section>)} {slug==='kontakt'&&<ContactPanel lang={lang}/>}</div></div></section>
 {slug==='biobruk'&&<section className="section"><div className="container"><Loop lang={lang}/></div></section>}
 {slug==='om-biona'&&<People lang={lang}/>}
 {slug==='aktivt-kol'?<CarbonInvitation lang={lang}/>:slug!=='kontakt'&&<Callout lang={lang}/>}</main>;
}
function ContactPanel({lang}:{lang:Lang}){const c=copy[lang];return <div className="contact-panel"><p className="eyebrow">{c.emailLabel}</p><h2>Joacim Sager</h2><p>{c.roles[0]}</p><a className="contact-email" href="mailto:joacim.sager@bionagroup.se">joacim.sager@bionagroup.se</a><p>{c.emailNote}</p><div className="contact-detail">Biona Group AB<br/>559401-2808 · Sverige</div></div>;}
