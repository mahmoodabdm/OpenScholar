
'use client';
import { useState } from 'react';
import { makeAPA, makeMLA, makeChicago, makeBibtex } from '@/lib/citation';
export default function CitationTool(){
  const [f,setF]=useState({title:'',authors:'',year:'',journal:'',doi:'',publisher:''});
  const [style,setStyle]=useState<'APA'|'MLA'|'Chicago'>('APA');
  const [out,setOut]=useState('');
  const gen=(s:any)=>{ setStyle(s); const d={...f}; setOut(s==='APA'?makeAPA(d):s==='MLA'?makeMLA(d):makeChicago(d)); };
  return (<div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
      {Object.keys(f).map(k=>(<input key={k} placeholder={k} value={(f as any)[k]} onChange={e=>setF({...f,[k]:e.target.value})} style={{padding:12,borderRadius:10,border:'1px solid #CBD5E1'}} />))}
    </div>
    <div style={{display:'flex',gap:10,marginTop:16}}>
      {['APA','MLA','Chicago'].map(s=>(<button key={s} onClick={()=>gen(s)} style={{padding:'10px 18px',borderRadius:20,border:'none',background:style===s?'#2563EB':'#E2E8F0',color:style===s?'#fff':'#111',cursor:'pointer',fontWeight:700}}>{s==='APA'?'APA 7th':s==='MLA'?'MLA 9th':'Chicago'}</button>))}
      <button onClick={()=>{navigator.clipboard.writeText(out); alert('Copied!');}} style={{padding:'10px 18px',borderRadius:20,background:'#16A34A',color:'#fff',border:'none',cursor:'pointer'}}>Copy</button>
      <button onClick={()=>setOut(makeBibtex(f))} style={{padding:'10px 18px',borderRadius:20,background:'#0F2A44',color:'#fff',border:'none',cursor:'pointer'}}>BibTeX</button>
    </div>
    {out && <div style={{background:'#F8FAFC',padding:16,borderRadius:12,marginTop:16,border:'1px solid #E2E8F0'}}>{out}</div>}
  </div>);
}
