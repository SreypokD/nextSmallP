

export default async function getProductResult(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action : 'query',
    generator: 'search',
    gsrsearch :searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*'
  })

  const res = await fetch('https://64e4523bc5556380291302c7.mockapi.io/Products?' + searchParams)
  return res.json()
}
