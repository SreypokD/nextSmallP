

type Product = {
    "id": number,
    "product": string,
    "price": string, 
}

type SearchResult = {
    query?:{
        product?: Product[]
    }
}