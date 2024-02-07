import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

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
         <section className='body-font'>
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
         </section>
      </>
   );
};

export default Hero;
