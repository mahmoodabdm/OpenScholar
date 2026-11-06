
export async function searchWorks(query: string, perPage = 12) {
  const res = await fetch(`https://api.openalex.org/works?search=${encodeURIComponent(query)}&per-page=${perPage}`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.results || [];
}
export async function getWorkByDoi(doi: string) {
  const clean = doi.replace('https://doi.org/','').trim();
  const res = await fetch(`https://api.openalex.org/works/https://doi.org/${clean}`, { next: { revalidate: 60 } });
  if (!res.ok) return null;
  return res.json();
}
export function formatAuthors(authors: any[]) {
  return (authors||[]).map((a:any)=>a.author?.display_name).filter(Boolean).join(', ');
}
