import * as React from "react";
import { SignedOut, SignedIn, SignInButton } from "@clerk/clerk-react";
import { Separator } from "./components/ui/separator";
import Layout from "./layout";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Quality from "./components/Quality";
import TrustedBrands from "./components/TrustedBrands";
import Gallery from "./components/Gallery";

function App() {
   return (
      // If user is signed out they can only see the Hero section.
      // If user is signed in they can see the Hero, Products, and Featured sections.
      <Layout>
         <SignedOut>
            <Hero />
            <Separator className='border' />
            <Quality />
            <Separator className='border' />
            <TrustedBrands />
            <Separator className='border' />
            <Gallery />
         </SignedOut>
         <SignedIn>
            <Hero />
            <Separator className='border' />
            <Products />
            <Separator className='border' />
            <Quality />
            <Separator className='border' />
            <TrustedBrands />
            <Separator className='border' />
            <Gallery />
         </SignedIn>
      </Layout>
   );
}

export default App;
