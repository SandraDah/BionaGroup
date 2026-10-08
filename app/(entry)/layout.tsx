import '../globals.css';
import {metadata as siteMetadata} from '@/lib/metadata';
export const metadata=siteMetadata;
export default function EntryLayout({children}:{children:React.ReactNode}){return <html lang="sv"><body className="language-entry">{children}</body></html>;}
