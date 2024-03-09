import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { ProductContext } from "../context/ProductContext";
import useFetch from "@/hooks/useFetch";
import useImage from "@/hooks/useImage";

const ProductDetails = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const { addToCart } = useContext(ProductContext);
   const { isSignedIn } = useUser();

   const { data, isLoading } = useFetch(`/products?filters[id][$eq]=${id}&populate=image&populate=categories`);
   const product = data?.[0];
   const imageUrl = useImage(product?.attributes?.image?.data?.attributes?.url);

   const [rating, setRating] = useState(0);

   useEffect(() => {
      if (product) {
         setRating(product?.attributes?.rating);
      }
   }, [product]);

   const handleAddToCart = () => {
      addToCart(product);
      toast.success(`${product?.attributes?.title.substring(0, 15)} has been added to your cart.`, {
         position: "bottom-right",
         dismissible: true,
      });
   };

   if (isLoading) {
      return <Loading />;
   }

   return (
      <>
         <div className='grid md:grid-cols-2 lg:grid-cols-2 items-start max-w-6xl px-4 mx-auto mt-auto py-6 gap-6 lg:gap-12'>
            <div className='grid gap-4 my-auto md:gap-10 items-start'>
               <div className='hidden md:flex items-start'>
                  <div className='grid gap-4'>
                     <h1 className='font-bold text-3xl lg:text-4xl'>{product?.attributes?.title}</h1>
                     <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-0.5'>
                           {rating && (
                              <>
                                 {[...Array(rating)].map((_, i) => (
                                    <StarIcon
                                       key={i}
                                       className={`${
                                          i < rating ? "text-primary" : "text-gray-300"
                                       } w-6 h-6 fill-current`}
                                    />
                                 ))}
                                 {[...Array(5 - rating)].map((_, i) => (
                                    <StarIcon key={i} className='w-6 h-6 fill-current text-gray-300' />
                                 ))}
                              </>
                           )}
                        </div>
                     </div>
                     <Separator className='border' />
                     <div>
                        <p>{product?.attributes?.description}</p>
                     </div>
                  </div>
               </div>
               <div className='text-4xl font-bold mr-auto'>$ {product?.attributes?.price}</div>
               <div className=''>
                  {isSignedIn ? (
                     <>
                        <Button onClick={handleAddToCart} className='w-full text-white font-medium duration-500'>
                           Add to Cart
                        </Button>
                        <Toaster richColors closeButton />
                     </>
                  ) : (
                     <>
                        <Link to='/sign-in'>
                           <Button className='w-full text-white font-medium duration-500'>Sign in to buy</Button>
                        </Link>
                        <Toaster richColors />
                     </>
                  )}
               </div>
               <Separator className='border' />
            </div>
            <div className='grid gap-4'>
               <img
                  alt='Product Image'
                  className='aspect-square object-contain object-center p-5 border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800'
                  height={600}
                  src={imageUrl}
                  width={600}
               />
            </div>
         </div>
      </>
   );
};

function StarIcon(props) {
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
         <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
      </svg>
   );
}

export default ProductDetails;
