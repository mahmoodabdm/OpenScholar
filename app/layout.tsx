
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
export const metadata: Metadata = { title: 'Noor Scholar - Free Academic Search | 250M+ Papers', description: 'Free open-access academic search engine built on OpenAlex. Search 250M+ papers, generate APA, MLA, Chicago citations. No account required.', keywords: ['academic search','google scholar alternative','free research papers','citation generator','APA generator'], openGraph:{title:'Noor Scholar',description:'Search 250M+ scholarly works free',type:'website'}, robots:{index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}){ return (<html lang="en"><body><Navbar/><main>{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"WebSite","name":"Noor Scholar","url":"https://noorscholar.com","description":"Free academic search engine"})}} /></body></html>); }
