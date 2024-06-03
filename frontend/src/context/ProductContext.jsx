import React, { createContext, useState, useEffect } from "react";
import useSWR, { mutate } from "swr";
// Create context
export const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
   // State for storing products
   const [products, setProducts] = useState([]);
   // State for storing categories
   const [categories, setCategories] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [filteredProducts, setFilteredProducts] = useState([]);
   const [queryProducts, setQueryProducts] = useState("");
   const [selectedRating, setSelectedRating] = useState(null); // State for selected rating
   const [cart, setCart] = useState([]);

   // Use SWR to fetch products and categories
   const { data: productsData, error: productsError } = useSWR(
      `${import.meta.env.VITE_STRAPI_API_URL}/products?populate=*`,
      fetcher
   );
   const { data: categoriesData, error: categoriesError } = useSWR(
      `${import.meta.env.VITE_STRAPI_API_URL}/categories?populate=*`,
      fetcher
   );

   // Helper function to fetch data
   async function fetcher(url) {
      const res = await fetch(url);
      const { data } = await res.json();
      if (!res.ok) throw new Error("An error occurred while fetching the data.");
      return data;
   }

   useEffect(() => {
      if (productsData && !productsError) {
         setProducts(productsData);
         setFilteredProducts(productsData);
         setCategories(categoriesData);
         setIsLoading(false);
      }
      console.log("productsData", productsData);
   }, [productsData, categoriesData]);
   useEffect(() => {
      filterProductsByCategoryAndSearch();
   }, [queryProducts, selectedCategory, selectedRating]);

   // This function filters the products by category
   const getProductsByCategory = (category) => {
      // The filter method is used to create a new array with all products that pass the test implemented by the provided function
      return products.filter((product) =>
         product?.attributes?.categories?.data.some((cat) => cat?.attributes?.name === category)
      );
   };

   // This function filters the products by rating
   const getProductsByRating = (rating) => {
      // The filter method is used to create a new array with all products that pass the test implemented by the provided function
      return products.filter((product) => product?.attributes?.rating === rating);
   };

   // This function retrieves a product by its ID
   const getProductById = (productId) => {
      // In this case, the test is whether the product's id matches the provided productId
      return products.find((product) => product?.id === productId);
   };

   const filterProductsByCategoryAndSearch = () => {
      let filteredProducts = products;
      if (selectedCategory || queryProducts || selectedRating !== null) {
         if (selectedCategory) {
            filteredProducts = getProductsByCategory(selectedCategory);
         }
         if (queryProducts) {
            filteredProducts = filteredProducts.filter((product) =>
               product?.attributes?.title.toLowerCase().includes(queryProducts.toLowerCase())
            );
         }
         if (selectedRating !== null) {
            filteredProducts = filteredProducts.filter((product) => product?.attributes?.rating === selectedRating);
         }
      }

      setFilteredProducts(filteredProducts);
   };

   const filterProductsBySearch = () => {
      filterProductsByCategoryAndSearch();
   };

   // Function to add an item to the cart with quantity tracking
   const addToCart = (product) => {
      const existingCartItem = cart.find((item) => item.id === product.id);
      if (existingCartItem) {
         // If the item is already in the cart, update the quantity
         const updatedCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
         );
         setCart(updatedCart);
      } else {
         // If the item is not in the cart, add it with quantity 1
         setCart([...cart, { ...product, quantity: 1 }]);
      }
   };

   const clearCart = () => {
      setCart([]);
   };

   // Function to calculate the total price of items in the cart
   const calculateTotalPrice = () => {
      return cart
         .reduce((total, item) => {
            // Ensure that item.price and item.quantity are valid numbers
            const itemPrice = typeof item.attributes?.price === "number" ? item.attributes.price : 0;
            const itemQuantity = typeof item.quantity === "number" ? item.quantity : 0;
            // Calculate the subtotal for the current item and add it to the total
            return total + itemPrice * itemQuantity;
         }, 0)
         .toFixed(2); // Convert the total to a string with 2 decimal places
   };

   // Context value
   const contextValue = {
      // Functions
      getProductsByCategory,
      getProductById,
      filterProductsBySearch,
      addToCart,
      clearCart,
      calculateTotalPrice,
      getProductsByRating,
      // States
      products: filteredProducts ? filteredProducts : filterProductsByCategoryAndSearch,
      categories,
      isLoading,
      queryProducts,
      filteredProducts,
      cart,
      selectedCategory,
      selectedRating,
      // State Setters
      setSelectedRating,
      setSelectedCategory,
      setFilteredProducts,
      setQueryProducts,
      setCart,
   };

   return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};
