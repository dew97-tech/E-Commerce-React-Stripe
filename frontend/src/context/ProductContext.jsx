import React, { createContext, useState, useEffect } from "react";

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
   const [cart, setCart] = useState([]);

   // Fetch all products and categories on component mount
   useEffect(() => {
      async function fetchData() {
         try {
            const productsRes = await fetch("https://fakestoreapi.com/products");
            const categoriesRes = await fetch("https://fakestoreapi.com/products/categories");

            const productsData = await productsRes.json();
            const categoriesData = await categoriesRes.json();

            setProducts(productsData);
            setFilteredProducts(productsData);
            setCategories(categoriesData);
            setIsLoading(false);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      }

      fetchData();
   }, []);
   useEffect(() => {
      filterProductsByCategoryAndSearch();
   }, [queryProducts, selectedCategory]);

   const getProductsByCategory = (category) => {
      return products.filter((product) => product.category === category);
   };

   const getProductById = (productId) => {
      return products.find((product) => product.id === productId);
   };

   const filterProductsByCategoryAndSearch = () => {
      let filteredProducts = products;
      if (selectedCategory || queryProducts) {
         if (selectedCategory) {
            filteredProducts = getProductsByCategory(selectedCategory);
         }
         if (queryProducts) {
            filteredProducts = filteredProducts.filter((product) =>
               product.title.toLowerCase().includes(queryProducts.toLowerCase())
            );
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
      return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
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
      // States
      products: filteredProducts ? filteredProducts : filterProductsByCategoryAndSearch,
      categories,
      isLoading,
      queryProducts,
      filteredProducts,
      cart,
      selectedCategory,
      // State Setters
      setSelectedCategory,
      setFilteredProducts,
      setQueryProducts,
      setCart,
   };

   return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};
