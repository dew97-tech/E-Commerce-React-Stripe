import React, { useContext, useState } from "react";
import { ProductContext } from "@/context/ProductContext";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, Card } from "@/components/ui/card";
import {
   DropdownMenu,
   DropdownMenuTrigger,
   DropdownMenuContent,
   DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Import Dropdown component
import useImage from "@/hooks/useImage";
import Loading from "./Loading";

const FilterProducts = () => {
   const { categories, setSelectedCategory, selectedCategory, products, isLoading } = useContext(ProductContext);
   const [sortOption, setSortOption] = useState(""); // State for sorting option

   const handleCategoryClick = (category) => {
      if (selectedCategory === category) {
         setSelectedCategory(null);
      } else {
         setSelectedCategory(category);
      }
   };

   const handleSortChange = (option) => {
      setSortOption(option);
   };

   const getSortedProducts = (products) => {
      switch (sortOption) {
         case "price-asc":
            return [...products].sort((a, b) => a.attributes.price - b.attributes.price);
         case "price-desc":
            return [...products].sort((a, b) => b.attributes.price - a.attributes.price);
         default:
            return products;
      }
   };

   const filteredProducts = selectedCategory
      ? products.filter((product) =>
           product?.attributes?.categories?.data?.some((cat) => cat?.attributes?.name === selectedCategory)
        )
      : products;

   const sortedAndFilteredProducts = getSortedProducts(filteredProducts);

   if (isLoading) {
      return <Loading />;
   }
   return (
      <div className='flex flex-col md:flex-row max-w-7xl mx-auto my-8 gap-8'>
         <div className='flex flex-col w-full md:w-1/4 px-4'>
            <div className='mb-8'>
               <h2 className='mb-4 text-xl font-semibold'>Categories</h2>
               <div className='space-y-2'>
                  {categories.map((category, index) => (
                     <div key={category?.id} className='flex items-center space-x-2'>
                        <Checkbox
                           id={`category-${category?.attributes?.name}`}
                           checked={selectedCategory === category?.attributes?.name}
                           onChange={() => handleCategoryClick(category?.attributes?.name)}
                           onClick={() => handleCategoryClick(category?.attributes?.name)}
                        />
                        <label
                           className='text-sm font-medium capitalize'
                           htmlFor={`category-${category?.attributes?.name}`}
                        >
                           {category?.attributes?.name}
                        </label>
                     </div>
                  ))}
               </div>
            </div>
            {/* <div className='mb-8'>
               <h2 className='mb-4 text-xl font-semibold'>Price Range</h2>
               <div className='flex'>
                  <Input className='w-full' type='range' />
               </div>
            </div> */}
            <div>
               <h2 className='mb-4 text-xl font-semibold'>Rating</h2>
               <div className='space-y-2'>
                  {[1, 2, 3, 4, 5].map((rating) => (
                     <div key={rating} className='flex items-center space-x-2'>
                        <Checkbox id={`rating-${rating}`} />
                        <label className='text-sm font-medium' htmlFor={`rating-${rating}`}>
                           {rating} stars
                        </label>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className='w-full md:w-3/4 px-4'>
            <div className='flex justify-between items-center mb-8'>
               <div>
                  <h1 className='text-3xl font-bold'>Summer Collection</h1>
                  <p className='text-gray-600'>Hot Picks from the Summer Collection: Embrace the Season in Style!</p>
               </div>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button className='flex items-center bg-blue-600 text-white hover:bg-blue-700'>
                        <ListOrderedIcon />
                        <span className='ml-2'>Sort by</span>
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='bg-white border border-gray-300 shadow-md rounded-md'>
                     <DropdownMenuItem
                        className='hover:bg-gray-100 p-2 font-semibold'
                        onSelect={() => handleSortChange("price-asc")}
                     >
                        Price: Low to High
                     </DropdownMenuItem>
                     <DropdownMenuItem
                        className='hover:bg-gray-100 p-2 font-semibold'
                        onSelect={() => handleSortChange("price-desc")}
                     >
                        Price: High to Low
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
               {sortedAndFilteredProducts.length === 0 ? (
                  <Card className='w-full group flex flex-col justify-center items-center h-64'>
                     <div className='text-center text-xl font-semibold'>
                        No products are available currently under this category. Feel free to browse other products.
                     </div>
                  </Card>
               ) : (
                  sortedAndFilteredProducts.map((product, index) => (
                     <Card key={index} className='w-full group p-4 flex flex-col justify-between'>
                        <div>
                           <div className='relative'>
                              <Link className='absolute inset-0 z-10' to={`/products/${product.id}`}>
                                 <span className='sr-only'>View</span>
                              </Link>
                              <img
                                 alt={product?.attributes?.title}
                                 className='w-full h-auto mb-4 group-hover:opacity-80 transition-opacity'
                                 height='250'
                                 src={useImage(product?.attributes?.image?.data?.attributes?.url)}
                                 style={{
                                    aspectRatio: "250/250",
                                    objectFit: "contain",
                                 }}
                                 width='250'
                              />
                              <div className='absolute top-2 right-2 bg-white rounded-full p-2 shadow-md group-hover:opacity-100 opacity-0 transition-opacity'>
                                 <HeartIcon className='w-4 h-4 text-gray-600' />
                              </div>
                           </div>
                           <CardTitle className='text-base font-medium group-hover:underline transition-all'>
                              {product?.attributes?.title}
                           </CardTitle>
                        </div>
                        <div className='mt-2'>
                           <CardDescription className='mb-3 text-gray-500 text-sm capitalize'>
                              {product?.attributes?.categories?.data[0]?.attributes?.name}
                           </CardDescription>
                           <div className='flex items-center gap-2'>
                              {product?.attributes?.rating && (
                                 <>
                                    {[...Array(product?.attributes?.rating)].map((_, i) => (
                                       <StarIcon
                                          key={i}
                                          className={`${
                                             i < product?.attributes?.rating ? "text-primary" : "text-gray-300"
                                          } w-6 h-6 fill-current`}
                                       />
                                    ))}
                                    {[...Array(5 - product?.attributes?.rating)].map((_, i) => (
                                       <StarIcon key={i} className='w-6 h-6 fill-current text-gray-300' />
                                    ))}
                                 </>
                              )}
                           </div>
                           <div className='mt-2 font-semibold'>${product?.attributes?.price}</div>
                        </div>
                     </Card>
                  ))
               )}
            </div>
         </div>
      </div>
   );
};

function HeartIcon(props) {
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
         <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
      </svg>
   );
}
function ListOrderedIcon(props) {
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
         <line x1='10' x2='21' y1='6' y2='6' />
         <line x1='10' x2='21' y1='12' y2='12' />
         <line x1='10' x2='21' y1='18' y2='18' />
         <path d='M4 6h1v4' />
         <path d='M4 10h2' />
         <path d='M6 18H4c0-1 2-2 2-3s-1-1.5-2-1' />
      </svg>
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
export default FilterProducts;
