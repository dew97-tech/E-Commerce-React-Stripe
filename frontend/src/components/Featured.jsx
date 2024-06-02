import React from "react";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import Loading from "./Loading";

const Featured = () => {
   const { filteredProducts, isLoading } = useContext(ProductContext);
   // Access the filter property of the product context only for the first 3 featured products
   const featuredProducts = filteredProducts.filter((product) => product.attributes.featured === true).slice(0, 3);

   if (isLoading) {
      return <Loading />;
   }

   return (
      <section className='flex items-center justify-center py-16 md:py-32 lg:py-40  dark:bg-gray-900'>
         <div className='container grid items-center justify-center gap-6 px-6 text-center md:px-8 lg:px-12'>
            <div className='space-y-4'>
               <h2 className='text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl uppercase p-3'>
                  Featured Products
               </h2>
               {/* <p className='mx-auto max-w-2xl text-gray-600 md:text-2xl lg:text-3xl dark:text-gray-300'>
                  Check out our latest featured products.
               </p> */}
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
               {featuredProducts.map((product) => (
                  <div
                     key={product.id}
                     className='flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-gray-800'
                  >
                     <img
                        className='object-contain object-center w-full h-64 mb-6 rounded-lg dark:bg-gray-700'
                        src={import.meta.env.VITE_STRAPI_UPLOADS_URL + product?.attributes?.image?.data?.attributes.url}
                        alt={product?.attributes?.title}
                     />
                     <div className='flex items-center justify-between'>
                        <p className='text-lg font-semibold'>{product?.attributes?.title}</p>
                        <p className='text-xl font-bold'>£{product?.attributes?.price}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Featured;
