import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Categories = () => {
   const { categories, setSelectedCategory, selectedCategory } = useContext(ProductContext);

   const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      // console.log(category);
   };

   return (
      <>
         <div className='flex md:ml-auto md:mr-0 items-center justify-end flex-shrink-0 space-x-2 flex-wrap'>
            <button
               onClick={() => handleCategoryClick(null)}
               className={`inline-flex py-2 px-5 rounded-lg items-center hover:bg-blue-600 hover:text-white  focus:outline-none transition-all duration-300 font-medium ${
                  selectedCategory === null ? "bg-primary text-white" : "bg-gray-200"
               }`}
            >
               All
            </button>
            {categories.map((category, index) => (
               <button
                  key={category?.id}
                  onClick={() => handleCategoryClick(category?.attributes?.name)}
                  className={`inline-flex py-2 px-5 rounded-lg items-center  hover:bg-blue-600 hover:text-white focus:outline-none transition-all duration-300 capitalize font-medium ${
                     selectedCategory === category?.attributes?.name ? "bg-primary text-white" : "bg-gray-200"
                  }`}
               >
                  {category?.attributes?.name}
               </button>
            ))}
         </div>
      </>
   );
};

export default Categories;
