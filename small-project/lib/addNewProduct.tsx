

export default async function addNewProduct(product: Product): Promise<Product>{
    const res = await fetch("https://64e4523bc5556380291302c7.mockapi.io/Products", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    
    if (!res.ok) {
      throw new Error('Failed to add new product');
    }
    
    const newProduct = await res.json();
    return newProduct;
  }
