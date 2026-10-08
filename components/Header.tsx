'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { copy, languages, slugs, type Lang } from '@/lib/content';
export function Brand({lang}:{lang:Lang}) { return <Link className="brand" href={`/${lang}/`} aria-label="Biona Group"><span>BIO<span className="brand-o">N</span>A <span className="brand-light">GROUP</span></span><small>A CIRCULAR INDUSTRIAL VISION</small></Link>; }
export default function Header({lang}:{lang:Lang}) {
 const [open,setOpen]=useState(false); const path=usePathname(); const c=copy[lang];
 return <><a className="skip-link" href="#main">{c.skip}</a><header className="header"><div className="header-inner"><Brand lang={lang}/><nav aria-label={lang==='sv'?'Huvudmeny':lang==='de'?'Hauptnavigation':'Main navigation'} className={`navigation ${open?'is-open':''}`}>
 {slugs.filter(s=>s!=='kontakt').map(slug=><Link key={slug} onClick={()=>setOpen(false)} href={`/${lang}/${slug}/`} aria-current={path===`/${lang}/${slug}/`?'page':undefined}>{c.nav[slugs.indexOf(slug)]}</Link>)}
 <Link className="mobile-contact" href={`/${lang}/kontakt/`} onClick={()=>setOpen(false)}>{c.contact}</Link>
 </nav><div className="header-actions"><nav className="languages" aria-label={lang==='sv'?'Välj språk':lang==='de'?'Sprache wählen':'Choose language'}>{languages.map(l=><Link key={l} href={path.replace(/^\/(sv|en|de)(?=\/|$)/,`/${l}`)} lang={l} hrefLang={l} aria-current={lang===l?'true':undefined} onClick={()=>setOpen(false)}>{l.toUpperCase()}</Link>)}</nav><Link className="header-contact" href={`/${lang}/kontakt/`}>{c.contact}</Link><button className={`menu-toggle ${open?'active':''}`} aria-label={open?c.close:c.menu} aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/></button></div></div></header></>;
}
