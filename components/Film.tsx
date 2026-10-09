'use client';
import {useState} from 'react';
import type {Lang} from '@/lib/content';
import {filmCopy} from '@/lib/film';
export default function Film({lang}:{lang:Lang}){
 const c=filmCopy[lang];const [started,setStarted]=useState(false);const [loaded,setLoaded]=useState(false);
 return <section className="film section" id="film" aria-labelledby="film-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">{c.label}</p><h2 id="film-title">{c.title}</h2></div><p>{c.body}</p></div><div className="film-player">
 {started?<><iframe src="https://player.vimeo.com/video/1090022360?autoplay=1&dnt=1&title=0&byline=0&portrait=0" title={c.frame} allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" onLoad={()=>setLoaded(true)}/>{!loaded&&<p className="film-loading" role="status">{c.loading}</p>}</>:<><img src="/images/biona-film-poster.webp" alt="" width="1280" height="720" loading="lazy"/><div className="film-shade"/><button className="film-play" onClick={()=>setStarted(true)} aria-label={c.frame+' · '+c.play}><span className="play-circle"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 11 7-11 7Z" fill="currentColor"/></svg></span><span>{c.play}</span></button><span className="film-duration">BIONA · 00:59</span></>}
 </div><div className="film-caption"><p>{c.privacy}</p><a href="https://vimeo.com/1090022360" target="_blank" rel="noopener noreferrer" className="text-link">{c.external}</a></div></div></section>;
}
