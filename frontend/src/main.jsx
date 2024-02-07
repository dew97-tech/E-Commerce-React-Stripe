import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/Routes";
import { ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { ThemeContextProvider } from "./context/ThemeContext";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
   throw new Error("Missing Publishable Key");
}
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ThemeContextProvider>
         <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <ProductProvider>
               <RouterProvider router={router} />
            </ProductProvider>
         </ClerkProvider>
      </ThemeContextProvider>
   </React.StrictMode>
);
