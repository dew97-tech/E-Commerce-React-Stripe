import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/clerk-react";

const Orders = () => {
   const [paymentDetails, setPaymentDetails] = useState(null);
   const { sessionId } = useAuth();

   useEffect(() => {
      const fetchPaymentDetails = async () => {
         try {
            const response = await axios.get(`payment-details/${sessionId}`);
            setPaymentDetails(response.data);
            console.log(response.data);
         } catch (error) {
            console.error(error);
         }
      };

      fetchPaymentDetails();
   }, []);
   return (
      <main className='flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-6'>
         <div className='flex items-center'>
            <h1 className='font-semibold text-lg md:text-2xl lg:text-3xl xl:text-4xl'>Orders #3102</h1>
            <div className='ml-auto flex items-center gap-2'>
               <Button size='icon' variant='outline'>
                  <ChevronLeftIcon className='h-4 w-4' />
                  <span className='sr-only'>Previous</span>
               </Button>
               <Button size='icon' variant='outline'>
                  <ChevronRightIcon className='h-4 w-4' />
                  <span className='sr-only'>Next</span>
               </Button>
            </div>
         </div>
         <Card>
            <CardHeader>
               <CardTitle>Orders Details</CardTitle>
            </CardHeader>
            <CardContent>
               <div className='grid gap-2 md:gap-4 lg:gap-6'>
                  <div className='grid gap-1 text-sm md:grid-cols-2'>
                     <div>Orders number</div>
                     <div className='font-medium text-base md:text-right'>#3102</div>
                  </div>
                  <div className='grid gap-1 text-sm md:grid-cols-2'>
                     <div>Orders date</div>
                     <div className='font-medium text-base md:text-right'>June 23, 2022</div>
                  </div>
                  <div className='grid gap-1 text-sm md:grid-cols-2'>
                     <div>Payment method</div>
                     <div className='font-medium text-base md:text-right'>
                        {paymentDetails?.payment_method_details?.card?.brand} ending in{" "}
                     </div>
                  </div>
                  <div className='grid gap-1 text-sm md:grid-cols-2'>
                     <div>Shipping method</div>
                     <div className='font-medium text-base md:text-right'>Express Shipping</div>
                  </div>
               </div>
            </CardContent>
         </Card>
         <div className='grid gap-4 md:gap-8'>
            <Card>
               <CardHeader>
                  <CardTitle>Products</CardTitle>
               </CardHeader>
               <CardContent className='grid gap-4 md:gap-8'>
                  <div className='flex items-start gap-4 md:gap-8'>
                     <img
                        alt='Product image'
                        className='aspect-square rounded-md object-cover borders'
                        height='150'
                        src='/placeholder.svg'
                        width='150'
                     />
                     <div className='grid gap-1 text-sm md:gap-2'>
                        <div className='font-medium'>Glimmer Lamps</div>
                        <div>Quantity: 2</div>
                        <div>Price: $60.00</div>
                     </div>
                  </div>
                  <div className='flex items-start gap-4 md:gap-8'>
                     <img
                        alt='Product image'
                        className='aspect-square rounded-md object-cover borders'
                        height='150'
                        src='/placeholder.svg'
                        width='150'
                     />
                     <div className='grid gap-1 text-sm md:gap-2'>
                        <div className='font-medium'>Aqua Filters</div>
                        <div>Quantity: 3</div>
                        <div>Price: $49.00</div>
                     </div>
                  </div>
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
               </CardHeader>
               <CardContent className='grid gap-4 md:gap-8'>
                  <div className='flex items-start gap-4 md:gap-8'>
                     <div>Subtotal</div>
                     <div className='ml-auto'>$169.00</div>
                  </div>
                  <div className='flex items-start gap-4 md:gap-8'>
                     <div>Discount</div>
                     <div className='ml-auto'>-$19.00</div>
                  </div>
                  <Separator />
                  <div className='flex items-start font-medium gap-4 md:gap-8'>
                     <div>Total</div>
                     <div className='ml-auto'>$150.00</div>
                  </div>
               </CardContent>
            </Card>
         </div>
         <div className='flex justify-center pt-4'>
            <Button className='w-full md:w-[200px]'>Proceed to payment</Button>
         </div>
      </main>
   );
   function ArrowLeftIcon(props) {
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
            <path d='m12 19-7-7 7-7' />
            <path d='M19 12H5' />
         </svg>
      );
   }
   function ChevronLeftIcon(props) {
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
            <path d='m15 18-6-6 6-6' />
         </svg>
      );
   }

   function ChevronRightIcon(props) {
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
            <path d='m9 18 6-6-6-6' />
         </svg>
      );
   }

   function Package2Icon(props) {
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
            <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' />
            <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9' />
            <path d='M12 3v6' />
         </svg>
      );
   }
};

export default Orders;
