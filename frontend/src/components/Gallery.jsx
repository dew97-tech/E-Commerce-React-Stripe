import React, { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";

const Gallery = () => {
   const { products } = useContext(ProductContext);
   return (
      <section class='text-gray-600 body-font'>
         <div class='container px-5 py-24 mx-auto flex flex-wrap'>
            <div class='flex w-full mb-20 flex-wrap'>
               <h1 class='sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4'>
                  Browse Our Gallery
               </h1>
               <p class='lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base'>
                  Here are some of our products. We have a wide range of products to choose from. We have the best deals
                  and the best prices.
               </p>
            </div>
            <div class='flex flex-wrap md:-m-2 -m-1'>
               <div class='flex flex-wrap w-1/2'>
                  <div class='md:p-2 p-1 w-1/2 '>
                     <img
                        alt={products[0]?.title}
                        class='w-full object-contain h-full object-center block border-2 border-gray-200 rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300'
                        src={products[0]?.image}
                     />
                  </div>
                  <div class='md:p-2 p-1 w-1/2'>
                     <img
                        alt={products[1]?.title}
                        class='w-full object-contain h-full object-center block border-2 border-gray-200 rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300'
                        src={products[1]?.image}
                     />
                  </div>
                  <div class='md:p-2 p-1 w-full'>
                     <img
                        alt={products[2]?.title}
                        class='w-full object-contain h-full object-center block border-2 border-gray-200 rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300'
                        src={products[2]?.image}
                     />
                  </div>
               </div>
               <div class='flex flex-wrap w-1/2'>
                  <div class='md:p-2 p-1 w-full'>
                     <img
                        alt={products[3]?.title}
                        class='w-full object-contain h-full object-center block border-2 border-gray-200 rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300'
                        src={products[3]?.image}
                     />
                  </div>
                  <div class='md:p-2 p-1 w-1/2'>
                     <img
                        alt={products[4]?.title}
                        class='w-full object-contain h-full object-center block border-2 border-gray-200 rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300'
                        src={products[4]?.image}
                     />
                  </div>
                  <div class='md:p-2 p-1 w-1/2'>
                     <img
                        alt={products[5]?.title}
                        class='w-full object-contain h-full object-center block border-2 border-gray-200 rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300'
                        src={products[5]?.image}
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Gallery;
