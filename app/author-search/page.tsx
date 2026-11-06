
'use client';
import { useState } from 'react';
export default function AuthorPage(){
  const [q,setQ]=useState(''); const [res,setRes]=useState<any[]>([]);
  const search=async()=>{ const r=await fetch(`https://api.openalex.org/authors?search=${encodeURIComponent(q)}&per-page=10`); const j=await r.json(); setRes(j.results||[]); };
  return (<div className="container"><h1>Author Search - 90M+ Authors</h1><div style={display:'flex',gap:8}><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search author..." style={flex:1,padding:12,borderRadius:12,border:'1px solid #CBD5E1'} /><button onClick={search} style={background:'#2563EB',color:'#fff',border:'none',padding:'12px 24px',borderRadius:12}>Search</button></div>{res.map((a:any)=>(<div key={a.id} className="card" style={marginTop:12}><h3>{a.display_name}</h3><p>Works: {a.works_count} • Cited by {a.cited_by_count} • {a.last_known_institutions?.[0]?.display_name||''}</p></div>))}</div>);
}
