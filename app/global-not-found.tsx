import './globals.css';
import Link from 'next/link';
export default function NotFound(){return <html lang="sv"><body><main className="not-found"><p className="eyebrow">404 · BIONA GROUP</p><h1>Sidan finns inte.</h1><p>Välj en startsida för att fortsätta.</p><div className="hero-buttons"><Link className="button button-copper" href="/sv/">Svenska</Link><Link className="button button-outline" href="/en/">English</Link><Link className="button button-outline" href="/de/">Deutsch</Link></div></main></body></html>;}
