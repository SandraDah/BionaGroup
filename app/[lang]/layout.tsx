import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Footer } from '@/components/Site';
import { isLang,languages } from '@/lib/content';
export const dynamicParams=false;
export function generateStaticParams(){return languages.map(lang=>({lang}));}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}) {const {lang}=await params;if(!isLang(lang))notFound();return <html lang={lang}><body><Header lang={lang}/>{children}<Footer lang={lang}/></body></html>;}
