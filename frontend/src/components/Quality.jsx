import React from "react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
const Quality = () => {
   function HelpCircleIcon(props) {
      return (
         <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
         >
            <circle cx='12' cy='12' r='10' />
            <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
            <path d='M12 17h.01' />
         </svg>
      );
   }

   function KeyIcon(props) {
      return (
         <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
         >
            <circle cx='7.5' cy='15.5' r='5.5' />
            <path d='m21 2-9.6 9.6' />
            <path d='m15.5 7.5 3 3L22 7l-3-3' />
         </svg>
      );
   }

   function SendIcon(props) {
      return (
         <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
         >
            <path d='m22 2-7 20-4-9-9-4Z' />
            <path d='M22 2 11 13' />
         </svg>
      );
   }
   return (
      <div className='flex flex-col items-center justify-center space-y-12 py-10'>
         <h2 className='text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl uppercase'>Shop with Confidence</h2>

         <div className='grid gap-20 md:grid-cols-3 lg:grid-cols-3'>
            <div className='flex flex-col gap-4 items-center border rounded-xl p-5 shadow-md'>
               <SendIcon className='w-12 h-12 text-primary' />
               <h3 className='font-semibold text-lg'>Quick Delivery</h3>
               <p className='text-gray-500'>Get your order delivered fast with our express shipping.</p>
            </div>
            <div className='flex flex-col gap-4 items-center border rounded-xl p-5 shadow-md'>
               <KeyIcon className='w-12 h-12 text-primary' />
               <h3 className='font-semibold text-lg'>Quality Guarantee</h3>
               <p className='text-gray-500'>Shop with confidence knowing our products are top-notch.</p>
            </div>
            <div className='flex flex-col gap-4 items-center border rounded-xl p-5 shadow-md'>
               <HelpCircleIcon className='w-12 h-12 text-primary' />
               <h3 className='font-semibold text-lg'>24/7 Support</h3>
               <p className='text-gray-500'>Need assistance? Our customer support is always available.</p>
            </div>
         </div>
      </div>
   );
};

export default Quality;
