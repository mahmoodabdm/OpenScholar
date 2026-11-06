
import Link from 'next/link';
export default function Navbar(){
  const links=[['Search','/search'],['Citation Generator','/citation-generator'],['DOI Lookup','/doi-lookup'],['Features','/features'],['Free Tools','/free-tools'],['Pricing','/pricing'],['Blog','/blog'],['About','/about'],['Contact','/contact']];
  return (<header style={{background:'#0F2A44',padding:'14px 20px',position:'sticky',top:0,zIndex:50}}>
    <nav style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
      <Link href="/" style={{color:'#fff',fontWeight:800,fontSize:22,textDecoration:'none'}}>Noor <span style={{color:'#60A5FA'}}>Scholar</span></Link>
      <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>{links.map(([l,h])=>(<Link key={h} href={h} style={{color:'#E2E8F0',textDecoration:'none',fontSize:14}}>{l}</Link>))}</div>
      <Link href="/search" style={{background:'#2563EB',color:'#fff',padding:'8px 16px',borderRadius:20,textDecoration:'none',fontWeight:700}}>Start Free</Link>
    </nav>
  </header>);
}
