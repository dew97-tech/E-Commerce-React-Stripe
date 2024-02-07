import { Link } from "react-router-dom";

const Success = () => (
   <div className='flex items-center justify-center my-auto'>
      <div className='p-6 border space-y-4 bg-white rounded-lg shadow-lg'>
         <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-24 h-24 mx-auto text-green-500 border-2 border-green-500 rounded-full p-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
         >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
         </svg>
         <h2 className='text-2xl font-semibold text-center text-gray-700'>Thank You!</h2>
         <p className='text-center text-gray-500'>Your payment was successful.</p>
         <Link to='/' className='block w-full py-2 text-center text-white bg-indigo-600 rounded hover:bg-indigo-700'>
            Back to Home
         </Link>
      </div>
   </div>
);

export default Success;
