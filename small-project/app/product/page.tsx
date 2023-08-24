import { getProducts } from '@/lib/getProducts'
import React from 'react'

export default async function getAllProduct() {
    const productData : Promise<Product[]> = getProducts()
    const products = await productData
  return (
    <div className="flex flex-wrap gap-5 m-12"> {/* Update the grid-rows class */}
        {products.map((product) => {
          return (
            <div className="item border border-gray-800 p-3 rounded">
              <p>{product.product}</p>
              <strong className="text-red-500">${product.price}</strong>
            </div>
          );
        })}
      </div>
  )
}
