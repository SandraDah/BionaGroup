import Link from 'next/link';
import type {Lang} from '@/lib/content';

const invitation={
 sv:{label:'UTVECKLA MED BIONA',title:'Vill ni bli en del av Bionas utveckling?',body:'Vi söker samarbeten med företag inom råvara, teknik, industri, hantverk och logistik. Tillsammans kan vi utveckla förutsättningarna för lokala Biobruk och renare vatten. Berätta vad ni kan bidra med, så utforskar vi möjligheterna tillsammans.',button:'Prata partnerskap med oss'},
 en:{label:'DEVELOP WITH BIONA',title:'Would you like to help shape Biona’s development?',body:'We welcome dialogue with businesses in feedstock, technology, industry, skilled trades and logistics. Together, we can develop the conditions for local Biobruk facilities and cleaner water. Tell us what you can contribute, and let’s explore the possibilities together.',button:'Discuss a partnership with us'},
 de:{label:'MIT BIONA ENTWICKELN',title:'Möchten Sie Bionas Entwicklung mitgestalten?',body:'Wir suchen den Austausch mit Unternehmen aus den Bereichen Rohstoffe, Technologie, Industrie, Handwerk und Logistik. Gemeinsam können wir die Voraussetzungen für lokale Biobruk-Anlagen und saubereres Wasser entwickeln. Erzählen Sie uns, was Sie beitragen können, und lassen Sie uns die Möglichkeiten gemeinsam erkunden.',button:'Über eine Zusammenarbeit sprechen'}
};
export default function PartnerInvitation({lang}:{lang:Lang}){
 const c=invitation[lang];
 return <section className="partner-invitation" aria-labelledby="partner-invitation-title"><div className="container"><p className="eyebrow">{c.label}</p><h2 id="partner-invitation-title">{c.title}</h2><p className="partner-invitation-body">{c.body}</p><Link className="button button-copper" href={`/${lang}/kontakt/`}>{c.button}</Link></div></section>;
}
