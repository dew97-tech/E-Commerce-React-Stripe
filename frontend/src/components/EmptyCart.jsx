import { Link } from "react-router-dom";

export default function EmptyCart() {
   return (
      <div className='flex items-center justify-center my-auto py-12 bg-gray-100 dark:bg-gray-800'>
         <div className='flex flex-col items-center justify-center gap-2 text-center my-auto'>
            <div className='flex items-center justify-center rounded-full border border-gray-200 w-12 h-12 dark:border-gray-800'>
               <ShoppingCartIcon className='w-6 h-6' />
            </div>
            <div className='space-y-2'>
               <h1 className='text-3xl font-semibold tracking-tighter'>Your cart is empty</h1>
               <p className='text-gray-500 dark:text-gray-400'>You have no items in your cart</p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
               <Link
                  className='inline-flex h-10 mt-auto items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                  to={"/products"}
               >
                  Start Shopping
               </Link>
            </div>
         </div>
      </div>
   );
}

function ShoppingCartIcon(props) {
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
         <circle cx='8' cy='21' r='1' />
         <circle cx='19' cy='21' r='1' />
         <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
      </svg>
   );
}
