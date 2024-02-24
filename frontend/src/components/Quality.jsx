import React from "react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
const Quality = () => {
   return (
      <section className='w-full py-12 md:py-12 lg:py-15 dark:bg-gray-800'>
         <div className='container mx-auto my-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
            <img
               alt='Delivery Image'
               className='mx-auto aspect-ration[1/1] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
               height='510'
               src='/assets/images/Delivery.jpg'
               width='650'
            />
            <div className='flex flex-col justify-center'>
               <ul className='grid gap-6'>
                  <li>
                     <div className='grid gap-1'>
                        <h3 className='text-3xl font-bold'>
                           <span className='text-primary'>Quick</span> Delivery
                        </h3>
                        <p className='text-gray-500 dark:text-gray-400'>
                           Get your order delivered fast with our express shipping.
                        </p>
                     </div>
                  </li>
                  <Separator className='border' />
                  <li>
                     <div className='grid gap-1'>
                        <h3 className='text-3xl font-bold'>
                           <span className='text-primary'>Quality</span> Guarantee
                        </h3>
                        <p className='text-gray-500 dark:text-gray-400'>
                           Shop with confidence knowing our products are top-notch.
                        </p>
                     </div>
                  </li>
                  <Separator className='border' />
                  <li>
                     <div className='grid gap-1'>
                        <h3 className='text-3xl font-bold'>
                           <span className='text-primary'>24/7 </span> Support
                        </h3>
                        <p className='text-gray-500 dark:text-gray-400'>
                           Need assistance? Our customer support is always available.
                        </p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Quality;
