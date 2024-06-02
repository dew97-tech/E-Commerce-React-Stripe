import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import Loading from "./Loading";

export default function FeaturedProducts() {
   const { filteredProducts, isLoading } = useContext(ProductContext);
   //    access the filter property of the product context
   const featuredProducts = filteredProducts.filter((product) => product.attributes.featured === true);
   //    filter the products to only show the featured products
   if (isLoading) {
      return <Loading />;
   }

   return (
      <section className='py-12 md:py-16 lg:py-20'>
         <div className='container px-4 md:px-6 mx-auto sm:px-2'>
            <div className='mb-8 md:mb-12 lg:mb-16'>
               <h2 className='text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl'>Featured Products</h2>
               <p className='text-gray-500 dark:text-gray-400 mt-2 md:text-lg'>
                  Discover our top-selling products across various categories.
               </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10'>
               {featuredProducts.map((product) => (
                  <Link
                     key={product.id}
                     to={`/products/${product.id}`}
                     className='group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col'
                  >
                     <div className='relative'>
                        <img
                           src={
                              import.meta.env.VITE_STRAPI_UPLOADS_URL + product?.attributes?.image?.data?.attributes.url
                           }
                           alt={product?.attributes?.title}
                           width={600}
                           height={400}
                           className='w-full h-60 object-contain'
                        />
                        <div className='absolute badge badge-primary top-4 right-4 px-2 py-3 text-sm text-white font-medium capitalize'>
                           {product?.attributes?.categories?.data[0]?.attributes?.name}
                        </div>
                     </div>
                     <div className='flex flex-col flex-grow p-4 bg-white dark:bg-gray-950'>
                        <div className='flex items-center justify-between mb-2'>
                           <div className='flex items-center gap-1'>
                              <StarIcon className='w-5 h-5 fill-primary' />
                              <span className='text-sm font-medium'>{product?.attributes?.rating}</span>
                           </div>
                           <div className='text-lg font-bold'>{`£${product?.attributes?.price}`}</div>
                        </div>
                        <h3 className='text-lg font-semibold group-hover:text-primary transition-colors'>
                           {product?.attributes?.title}
                        </h3>
                        <div className='mt-auto'>
                           {/* <Button size='sm' className='mt-5 text-white font-medium'>
                              Add to Cart
                           </Button> */}
                           <h3 className='text-sm font-semibold truncate'>{product?.attributes?.description}</h3>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}

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
