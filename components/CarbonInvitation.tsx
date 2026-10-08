import type {Lang} from '@/lib/content';
import {pilotCopy} from '@/lib/pilot';
const email='joacim.sager@bionagroup.se';
export default function CarbonInvitation({lang}:{lang:Lang}){
 const c=pilotCopy[lang];
 return <section className="carbon-invitation section" id="pilotprovning" aria-labelledby="pilot-title"><div className="container"><div className="carbon-invitation-grid"><div><p className="eyebrow">{c.label}</p><h2 className="line-break" id="pilot-title">{c.title}</h2><img className="pilot-water-image" src="/images/resilient-sweden-water-brand.webp" alt="" width="1536" height="1024" loading="lazy"/><span className="pilot-image-caption">{lang==='sv'?'Konceptbild':lang==='de'?'Konzeptbild':'Concept image'}</span></div><div className="pilot-intro"><p>{c.body}</p><p>{c.material}</p><h3>{c.stepsTitle}</h3><ol className="pilot-steps">{c.steps.map(([title,body],i)=><li key={title}><span className="pilot-step-number" aria-hidden="true">0{i+1}</span><div><h4>{title}</h4><p>{body}</p></div></li>)}</ol><p className="pilot-status">{c.status}</p><a className="button button-copper" href={`mailto:${email}?subject=${encodeURIComponent(c.subject)}`}>{c.button}</a><div className="pilot-contact"><strong>Joacim Sager</strong><span>{c.role}</span><a href={`mailto:${email}`}>{email}</a></div></div></div></div></section>;
}
