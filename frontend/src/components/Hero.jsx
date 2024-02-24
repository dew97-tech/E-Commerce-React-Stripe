import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Loading from "./Loading";

const Hero = () => {
   const [activeSlide, setActiveSlide] = useState(0);
   const { products } = useContext(ProductContext);
   const [randomProduct, setRandomProduct] = useState(null);

   useEffect(() => {
      if (products.length) {
         setRandomProduct(products[activeSlide]);
      }
      setActiveSlide(Math.floor(Math.random() * products.length));
   }, [products]);

   return (
      <>
         <section className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:h-screen'>
            <div className='container px-4 md:px-6'>
               <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                  <div className='my-auto'>
                     <div className='space-y-2'>
                        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-3'>
                           Welcome to <span className='text-primary'>Shop Now</span>
                        </h1>
                        <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                           We cover your computer needs, from the latest gadgets to the best accessories. We have a wide
                           range of products to choose from. We have the best deals and the best prices.
                        </p>
                        <div className='mt-20'>
                           <Link to='/products'>
                              <button className='inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg hover:transition-all duration-300'>
                                 Browse
                              </button>
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
                        src={randomProduct.image}
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
