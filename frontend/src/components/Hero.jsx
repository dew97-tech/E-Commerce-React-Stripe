import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Loading from "./Loading";
import useFetch from "@/hooks/useFetch";
import useImage from "@/hooks/useImage";
import { Button } from "@/components/ui/button";

const Hero = () => {
   const [randomProduct, setRandomProduct] = useState(null);
   const { data } = useFetch("/products?populate=image");
   // it will run when the data is fetched
   useEffect(() => {
      if (data && !randomProduct) {
         const randomIndex = Math.floor(Math.random() * data.length);
         setRandomProduct(data[randomIndex]);
      }
   }, [data, randomProduct]);

   const imageUrl = useImage(randomProduct?.attributes?.image?.data?.attributes?.url);

   return (
      <>
         <section className='container mx-auto my-auto flex px-5 py-24 md:flex-row flex-col items-center lg:h-screen'>
            <div className='container px-4 md:px-6'>
               <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                  <div className='my-auto'>
                     <div className='space-y-5'>
                        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-3'>
                           Welcome to <span className='text-primary'>Shop Now</span>
                        </h1>
                        <p className='max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400 lowercase'>
                           We cover your computer needs, from the latest gadgets to the best accessories. We have a wide
                           range of products to choose from. We have the best deals and the best prices.
                        </p>
                        <div className='flex flex-col gap-4 min-[400px]:flex-row'>
                           <Button variant='default' className='text-white p-5'>
                              <Link className='font-semibold' to='/products'>
                                 Shop Now
                              </Link>
                           </Button>
                           <Link
                              className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                              to='/about'
                           >
                              Learn More
                           </Link>
                        </div>
                     </div>
                  </div>
                  {randomProduct ? (
                     <img
                        className='mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last lg:aspect-square'
                        alt='hero'
                        height='550'
                        width='550'
                        src={imageUrl}
                     />
                  ) : (
                     <Loading />
                  )}
               </div>
            </div>
         </section>
         {/* <section className='body-font'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
               <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                  <h1 className='title-font sm:text-4xl text-3xl mb-1 font-medium'>One Stop Shop For All Your Needs</h1>
                  <h1 className='text-3xl text-primary mt-2 mb-2'>Browse Our Products Now!</h1>
                  <p className='mb-8 leading-relaxed'>
                     Almost everything you need is here. From food to clothing, from gadgets to appliances, from
                     furniture to home decors, from toys to baby needs, from school supplies to office supplies, from
                     personal care to pet care, from sports to outdoor needs, from automotive to industrial needs and
                     much more.
                  </p>
                  <div className='flex justify-center'>
                     <Link to='/products'>
                        <button className='inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg hover:transition-all duration-300'>
                           Browse
                        </button>
                     </Link>
                  </div>
               </div>
               <div className='lg:max-w-sm lg:w-full md:w-1/2 w-5/6'>
                  {randomProduct && (
                     <img className='object-cover object-center rounded' alt='hero' src={randomProduct.image} />
                  )}
               </div>
            </div>
         </section> */}
      </>
   );
};

export default Hero;
