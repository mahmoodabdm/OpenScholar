
'use client';
import { useState } from 'react';
export default function ContactPage(){
  const [sent,setSent]=useState(false);
  return (<div className="container"><h1>Contact Us - 24/7 Research Support</h1>{sent? <div className="card"><h3>Message sent! We will reply within 24 hours.</h3></div> : <form onSubmit={e=>{e.preventDefault(); setSent(true);}} style={display:'grid',gap:12,maxWidth:600}><input required placeholder="Your Name" style={padding:12,borderRadius:10,border:'1px solid #CBD5E1'} /><input required type="email" placeholder="Email (Gmail for AdSense)" style={padding:12,borderRadius:10,border:'1px solid #CBD5E1'} /><textarea required placeholder="Message" rows={5} style={padding:12,borderRadius:10,border:'1px solid #CBD5E1'} /><button style={background:'#2563EB',color:'#fff',border:'none',padding:'14px',borderRadius:12,fontWeight:700}>Send Message</button></form>}</div>);
}
