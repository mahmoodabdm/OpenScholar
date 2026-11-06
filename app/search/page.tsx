
import { searchWorks } from '@/lib/openalex';
import Link from 'next/link';
export const metadata={title:'Search - Noor Scholar',description:'Search 250M+ scholarly works.'};
export default async function SearchPage({searchParams}:{searchParams:{q?:string}}){
  const q=searchParams?.q||'';
  const results=q? await searchWorks(q):[];
  return (<div className="container"><h1>Academic Search</h1><form action="/search" style={display:'flex',gap:8}><input name="q" defaultValue={q} placeholder="Search papers..." style={flex:1,padding:12,borderRadius:20,border:'1px solid #CBD5E1'} /><button style={background:'#2563EB',color:'#fff',border:'none',padding:'12px 24px',borderRadius:20}>Search</button></form>
  <p>{q? `Results for "${q}" - Live from OpenAlex`: 'Try: Deep Learning, CRISPR, Quantum Computing'}</p>
  <div style={display:'grid',gap:14}>{results.map((w:any)=>(
    <div key={w.id} className="card"><h3>{w.display_name}</h3><p>{w.authorships?.slice(0,4).map((a:any)=>a.author.display_name).join(', ')} • {w.publication_year} • Cited by {w.cited_by_count}</p><p>{w.primary_location?.source?.display_name||''}</p><div style={display:'flex',gap:10}><a href={`https://doi.org/${w.doi?.replace('https://doi.org/','')||''}`} target="_blank">DOI</a>{w.open_access?.oa_url && <a href={w.open_access.oa_url} target="_blank">Open Access PDF</a>}<Link href="/citation-generator">Cite</Link></div></div>
  ))}</div></div>);
}
