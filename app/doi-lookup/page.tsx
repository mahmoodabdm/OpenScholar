
'use client';
import { useState } from 'react';
export default function DoiPage(){
  const [doi,setDoi]=useState(''); const [data,setData]=useState<any>(null); const [loading,setLoading]=useState(false);
  const lookup=async()=>{ setLoading(true); try{ const clean=doi.replace('https://doi.org/','').trim(); const r=await fetch(`https://api.openalex.org/works/https://doi.org/${clean}`); const j=await r.json(); setData(j); }catch(e){ setData(null); } setLoading(false); };
  return (<div className="container"><h1>DOI Lookup</h1><div style={display:'flex',gap:8}><input value={doi} onChange={e=>setDoi(e.target.value)} placeholder="10.1038/nature12373" style={flex:1,padding:12,borderRadius:12,border:'1px solid #CBD5E1'} /><button onClick={lookup} style={background:'#2563EB',color:'#fff',border:'none',padding:'12px 24px',borderRadius:12}>Lookup</button></div>{loading && <p>Loading...</p>}{data && <div className="card" style={marginTop:16}><h2>{data.display_name}</h2><p>{data.authorships?.map((a:any)=>a.author.display_name).join(', ')} • {data.publication_year} • Cited by {data.cited_by_count}</p>{data.open_access?.oa_url && <a href={data.open_access.oa_url} target="_blank">Open Access PDF</a>}</div>}</div>);
}
