import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [productsPerPage] = useState(10);
   const { filteredProducts, isLoading } = useContext(ProductContext);

   // Get current products
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = filteredProducts?.slice(indexOfFirstProduct, indexOfLastProduct);

   // Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <>
         <section className='py-8'>
            <div className='container mx-auto flex items-center flex-wrap pt-4 pb-12'>
               <nav id='store' className='w-full z-30 top-0 px-0 py-1'>
                  <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3'>
                     <span className='uppercase tracking-wide no-underline hover:no-underline font-bold text-xl '>
                        Products
                        <hr className='mt-2' />
                     </span>
                     <div className='flex items-center sm:flex-wrap'>
                        <Categories />
                     </div>
                  </div>
               </nav>

               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
                  {(isLoading ? Array.from({ length: productsPerPage }) : currentProducts).map((product, index) => (
                     <div
                        key={index}
                        className='flex flex-col p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'
                     >
                        {isLoading ? (
                           <div className='flex flex-col gap-8 w-52'>
                              <div className='skeleton h-32 w-full'></div>
                              <div className='skeleton h-4 w-28'></div>
                              <div className='skeleton h-4 w-full'></div>
                              <div className='skeleton h-4 w-full'></div>
                           </div>
                        ) : (
                           <Link to={`/products/${product.id}`} className='cursor-pointer'>
                              <img
                                 className='object-contain object-center w-full h-48 mb-4 rounded-lg dark:bg-gray-800'
                                 src={
                                    import.meta.env.VITE_STRAPI_UPLOADS_URL +
                                    product?.attributes?.image?.data?.attributes.url
                                 }
                                 alt={product?.attributes?.title}
                              />
                              <div className='flex items-center justify-between'>
                                 <p className='font-bold'>{product?.attributes?.title}</p>
                              </div>

                              <p className='mt-2'>{`£${product?.attributes?.price}`}</p>
                           </Link>
                        )}
                     </div>
                  ))}
               </div>

               <div className='join mt-10 flex justify-end w-full'>
                  {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map((number) => (
                     <button
                        key={number}
                        onClick={() => paginate(number + 1)}
                        className={`join-item btn ${currentPage === number + 1 ? "btn-active" : ""}`}
                     >
                        {number + 1}
                     </button>
                  ))}
               </div>
            </div>
         </section>
      </>
   );
};

export default Products;
