'use client'
import React, { useState, useEffect, FormEventHandler } from 'react';
import { getProducts } from '@/lib/getProducts';
import addNewProduct from '@/lib/addNewProduct';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);


  useEffect(() => {
    async function fetchProducts() {
      const productData = await getProducts();
      setProducts(productData);
    }
    fetchProducts();
  }, []);

  // seting on add product ===============
  const handleAddButtonClick = () => {
    setShowModal(true);
  };
  const handleCloseDiglog = () => {
    setShowModal(false);
  };


  // setting on edit product ===============
  const handleEditButtonClick = () => {
    setShowEditModal(true)
  }
  const handleCloseEditDialog = () => {
    setShowEditModal(false)
  }

  // to add new product =========
  const [newProduct, setNewProduct] = useState('')
  const [newPrice, setNewPrice] = useState('')

  
  // to edit product====================
  const [productToEdit, setProductToEdit] = useState('');
  const [priceToEdit, setPriceToEdit] = useState('');


  const handleSaveProduct: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // Create a new product object
    const newProductObject = {
      product: newProduct,
      price: newPrice,
      id: 0,
    };



    // Add the new product to your list of products
    addNewProduct(newProductObject);

    // Clear the input fields
    setNewProduct('');
    setNewPrice('');

    // Close the dialog
    handleCloseDiglog();

    // Auto-refresh after 1 second
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  //to submit edit page 
  const handleSaveEditProduct = () => {
    //continue to when we click on edit button
  }



  return (
    <div className="p-4 sm:ml-64">
      <div className="p-6  border-2 border-gray-400  rounded">
        <div className="add-product flex justify-between align-center">
          <span className='text-2xl'>List Product </span>
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600"
            onClick={handleAddButtonClick} // Add the event handler to show the modal
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        {products.map((product, index) => {
          return (
            <div key={product.product + index} className="item flex items-center justify-between border border-gray-800 p-2 m-2 rounded">
              <div className="left-item">
                <p>{product.product}</p>
                <strong className="text-red-500">${product.price}</strong>
              </div>
              <div className="action">
                <button onClick={handleEditButtonClick} type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>
                <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}


        {/* Main add product modal */}
        {showModal && (
          <div id="authentication-modal" aria-hidden="true" className="fixed top-20 left-0 right-0 z-50 w-2/4 m-auto p-4 overflow-x-hidden overflow-y-auto ">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg onClick={handleCloseDiglog} className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">To add product</h3>
                <form className="space-y-6" onSubmit={handleSaveProduct}>
                  <div>
                    <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</label>
                    <input type="text"
                      name="product-name"
                      id="product-name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg f
                    ocus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="add product name"
                      value={newProduct}
                      onChange={e => setNewProduct(e.target.value)}
                      required />
                  </div>
                  <div>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="text"
                      name="prict"
                      id="prict"
                      placeholder="•••$"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={newPrice}
                      onChange={e => setNewPrice(e.target.value)}
                      required />
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Product</button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Main edit product modal */}
        {showEditModal && (
          <div id="authentication-modal" aria-hidden="true" className="fixed top-20 left-0 right-0 z-50 w-2/4 m-auto p-4 overflow-x-hidden overflow-y-auto ">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg onClick={handleCloseEditDialog} className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">To Edit product</h3>
                <form className="space-y-6" onSubmit={handleSaveEditProduct}>
                  <div>
                    <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</label>
                    <input
                      type="text"
                      name="product-name"
                      id="product-name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="add product name"
                      value={productToEdit}
                      onChange={(e) => setProductToEdit(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="•••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={priceToEdit}
                      onChange={(e) => setPriceToEdit(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Edit Product</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
