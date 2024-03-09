import React from "react";

const Featured = () => {
   return (
      <section className='flex items-center justify-center py-12 md:py-24 lg:py-32'>
         <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
            <div className='space-y-3'>
               <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight uppercase'>Featured Products</h2>
               <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Check out our latest featured products.
               </p>
            </div>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
               <div className='flex flex-col gap-2'>
                  <img
                     alt='Featured Product 1'
                     className='aspect-square object-cover rounded-lg overflow-hidden'
                     height='400'
                     src='https://placehold.co/600x400'
                     width='400'
                  />
                  <div className='flex flex-col gap-1.5'>
                     <h3 className='font-semibold'>Featured Product 1</h3>
                     <p className='font-semibold'>$99.99</p>
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <img
                     alt='Featured Product 2'
                     className='aspect-square object-cover rounded-lg overflow-hidden'
                     height='400'
                     src='https://placehold.co/600x400'
                     width='400'
                  />
                  <div className='flex flex-col gap-1.5'>
                     <h3 className='font-semibold'>Featured Product 2</h3>
                     <p className='font-semibold'>$129.99</p>
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <img
                     alt='Featured Product 3'
                     className='aspect-square object-cover rounded-lg overflow-hidden'
                     height='400'
                     src='https://placehold.co/600x400'
                     width='400'
                  />
                  <div className='flex flex-col gap-1.5'>
                     <h3 className='font-semibold'>Featured Product 3</h3>
                     <p className='font-semibold'>$79.99</p>
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <img
                     alt='Featured Product 4'
                     className='aspect-square object-cover rounded-lg overflow-hidden'
                     height='400'
                     src='https://placehold.co/600x400'
                     width='400'
                  />
                  <div className='flex flex-col gap-1.5'>
                     <h3 className='font-semibold'>Featured Product 4</h3>
                     <p className='font-semibold'>$149.99</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Featured;
