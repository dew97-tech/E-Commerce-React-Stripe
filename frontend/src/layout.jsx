import React from "react";
import Navbar from "@/components/navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

export default function Layout({ children }) {
   return (
      <>
         <div className='flex flex-col items-stretch justify-center min-h-screen'>
            <Navbar />
            {children}
            <Toaster richColors closeButton />
            <Footer />
         </div>
      </>
   );
}
