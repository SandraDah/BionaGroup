import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:{default:'Biona Group | Från skogens resurser till en renare värld',template:'%s | Biona Group'},description:'Biona Group utvecklar cirkulär industri med lokala råvaror, aktivt kol och Biobruk som långsiktig vision.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}) {return children;}
