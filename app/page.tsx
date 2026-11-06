
import SearchBar from '@/components/SearchBar';
import CitationTool from '@/components/CitationTool';
import Link from 'next/link';
export const metadata={title:'Noor Scholar - Free Academic Search',description:'Free open-access academic search for international students.'};
export default function Home(){
  const topics=['Deep Learning Transformers','CRISPR Gene Editing','Quantum Computing Algorithms','Renewable Energy Storage','Microplastics in Marine Biology','Alzheimer Disease Biomarkers'];
  return (<div className="container">
    <div style={textAlign:'center',padding:'40px 0'}><h1>Search 250M+ Scholarly Papers - Free</h1><p>Start free. No account, no credit card. Or generate a citation</p><SearchBar/>
    <div>Trending Topics: {topics.map(t=>(<Link key={t} href={`/search?q=${encodeURIComponent(t)}`} style={textDecoration:'none'}><span className="pill">{t}</span></Link>))}</div></div>
    <div style={display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}>{[['250M+','Scholarly Works'],['90M+','Authors'],['100K+','Institutions'],['Free','To Search & Cite']].map(([n,l])=>(<div key={l} className="card" style={textAlign:'center'}><div style={fontSize:32,fontWeight:800,color:'#2563EB'}>{n}</div><div>{l}</div></div>))}</div>
    <div className="card" style={marginTop:24}><h2>Cite in the styles your professors ask for</h2><CitationTool/></div>
    <div style={marginTop:30}><h2>How it works</h2><p>1. Search → 2. Find Open Access PDF → 3. Generate Citation. From search to finished reference list in three steps.</p><Link href="/how-it-works">Learn how it works →</Link></div>
  </div>);
}
