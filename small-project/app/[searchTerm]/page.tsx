import getProductResult from "@/lib/getProductResult"

type Props = {
    params:{
        searchTerm : string
    }
}

export default async function SearchResults({params: {searchTerm}}: Props) {
    const productData: Promise<SearchResult> = getProductResult(searchTerm)
    const data = await productData
    const products: Product[] | undefined = data?.query?.product

    const content = (

        <main>
            {products?
            Object.values(products).map(product =>
                {
                    return <p>{JSON.stringify(product)}</p>
                    
                })
                : <h2 className="text-red-500 text-4xl text-center m-20">{ `${searchTerm} Not fount` } </h2>
            }
        </main>
    )
  return content
}