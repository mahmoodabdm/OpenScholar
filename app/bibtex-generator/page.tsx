
import CitationTool from '@/components/CitationTool';
export const metadata={title:'BibTeX Generator - Noor Scholar',description:'Generate BibTeX for LaTeX.'};
export default function Page(){ return (<div className="container"><h1>BibTeX Generator</h1><p>Fill the form and click BibTeX to generate LaTeX-ready code.</p><CitationTool/></div>); }
