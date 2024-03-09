import React from "react";

const Devs = () => {
   return (
      <div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 mb-12'>
         <div className='space-y-3'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight uppercase'>Meet our Team</h2>
            <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
               Discover why our team is the best at what we do.
            </p>
         </div>
         <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col gap-2'>
               <img
                  alt='Team Member 1'
                  className='aspect-square object-cover rounded-lg overflow-hidden'
                  height='400'
                  src='https://placehold.co/600x400'
                  width='400'
               />
               <div className='flex flex-col gap-1.5'>
                  <h3 className='font-semibold'>John Doe</h3>
                  <p className='font-semibold'>Lead Designer</p>
               </div>
            </div>
            <div className='flex flex-col gap-2'>
               <img
                  alt='Team Member 2'
                  className='aspect-square object-cover rounded-lg overflow-hidden'
                  height='400'
                  src='https://placehold.co/600x400'
                  width='400'
               />
               <div className='flex flex-col gap-1.5'>
                  <h3 className='font-semibold'>Jane Smith</h3>
                  <p className='font-semibold'>Lead Developer</p>
               </div>
            </div>
            <div className='flex flex-col gap-2'>
               <img
                  alt='Team Member 3'
                  className='aspect-square object-cover rounded-lg overflow-hidden'
                  height='400'
                  src='https://placehold.co/600x400'
                  width='400'
               />
               <div className='flex flex-col gap-1.5'>
                  <h3 className='font-semibold'>Alice Johnson</h3>
                  <p className='font-semibold'>Marketing Specialist</p>
               </div>
            </div>
            <div className='flex flex-col gap-2'>
               <img
                  alt='Team Member 4'
                  className='aspect-square object-cover rounded-lg overflow-hidden'
                  height='400'
                  src='https://placehold.co/600x400'
                  width='400'
               />
               <div className='flex flex-col gap-1.5'>
                  <h3 className='font-semibold'>Mike Brown</h3>
                  <p className='font-semibold'>Product Manager</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Devs;
