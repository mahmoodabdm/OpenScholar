
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function SearchBar(){
  const [q,setQ]=useState('');
  const r=useRouter();
  return (<form onSubmit={e=>{e.preventDefault(); if(q.trim()) r.push(`/search?q=${encodeURIComponent(q)}`);}} style={{display:'flex',gap:8,maxWidth:700,margin:'20px auto'}}>
    <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search papers, authors, DOI..." style={{flex:1,padding:'14px 18px',borderRadius:30,border:'1px solid #CBD5E1',fontSize:16}} />
    <button style={{background:'#2563EB',color:'#fff',border:'none',padding:'14px 28px',borderRadius:30,fontWeight:700,cursor:'pointer'}}>Search</button>
  </form>);
}
