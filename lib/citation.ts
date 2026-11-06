
export function makeAPA(d:any){ const authors=d.authors||'Author'; const year=d.year||'n.d.'; const title=d.title||''; const journal=d.journal?`, ${d.journal}`:''; return `${authors} (${year}). ${title}${journal}. https://doi.org/${d.doi||''}`.trim(); }
export function makeMLA(d:any){ const authors=d.authors||'Author'; const title=d.title||''; return `${authors}. "${title}." ${d.journal||'Journal'}, ${d.year||''}, doi:${d.doi||''}.`; }
export function makeChicago(d:any){ const authors=d.authors||'Author'; return `${authors}. "${d.title||''}." ${d.journal||'Journal'} (${d.year||''}). https://doi.org/${d.doi||''}.`; }
export function makeBibtex(d:any){ const key=(d.authors||'author').split(' ')[0].toLowerCase()+(d.year||''); return `@article{${key},\n  title={${d.title}},\n  author={${d.authors}},\n  journal={${d.journal}},\n  year={${d.year}},\n  doi={${d.doi}}\n}`; }
