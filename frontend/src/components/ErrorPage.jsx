import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className='flex flex-col items-center justify-center gap-4 p-4 text-center my-auto'>
         <div className='flex flex-col items-center gap-2'>
            <img
               alt='404 Not Found Image'
               className='overflow-hidden rounded-lg object-cover object-center'
               height='200'
               src='/assets/images/404.jpg'
               width='500'
            />
            <div className='space-y-2'>
               <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Oops! Page Not Found</h1>
               <p className='mx-auto max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Sorry, we couldn't find the page you were looking for.
               </p>
            </div>
         </div>
         <Link
            className='inline-flex items-center gap-2 rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm px-4 h-10 text-sm font-medium dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:shadow-sm dark:hover:shadow-lg hover:shadow-lg transition-s'
            to='/'
         >
            <HomeIcon className='h-4 w-4' />
            Go to the homepage
         </Link>
      </div>
   );
   function HomeIcon(props) {
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
            <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
            <polyline points='9 22 9 12 15 12 15 22' />
         </svg>
      );
   }
};

export default ErrorPage;
