import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
   const [product, setProduct] = useState(null);
   const { id } = useParams();
   const { addToCart } = useContext(ProductContext);
   const { isSignedIn } = useUser();

   useEffect(() => {
      async function fetchData() {
         const res = await fetch(`https://fakestoreapi.com/products/${id}`);
         const json = await res.json();
         setProduct(json);
      }

      fetchData();
   }, [id]);

   if (!product) {
      return <Loading />;
   }

   return (
      <>
         <div className='hero'>
            <div className='hero-content flex-col lg:flex-row gap-20'>
               <img src={product.image} className='max-w-sm rounded-lg' />
               <div>
                  <h1 className='text-3xl font-bold'>{product.title}</h1>
                  <p className='py-6'>{product.description}</p>
                  <p className='text-2xl font-bold mb-6 text-blue-500'>{`£${product.price.toFixed(2)}`}</p>
                  <div className='flex items-center'>
                     <div className='flex items-center text-yellow-500'>
                        {/* Display stars based on the rating */}
                        {Array.from({ length: Math.floor(product.rating.rate) }, (_, index) => (
                           <svg
                              key={index}
                              className='h-6 w-6 fill-current'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 24 24'
                           >
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z' />
                           </svg>
                        ))}
                        <span className='ml-1 text-lg'>{product.rating.rate}</span>
                     </div>
                     <span className='text-gray-600 ml-2 text-lg'>{`(${product.rating.count} reviews)`}</span>
                  </div>
                  <div>
                     {isSignedIn ? (
                        <button
                           onClick={() => addToCart(product)}
                           className='text-white btn btn-square btn-primary mt-10 px-10'
                        >
                           Add
                        </button>
                     ) : (
                        <Link to='/sign-in' className='text-white btn btn-lg btn-primary mt-10 px-10 text-md'>
                           Sign in to add to cart
                        </Link>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductDetails;
