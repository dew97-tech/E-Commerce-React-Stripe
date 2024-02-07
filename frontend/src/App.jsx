import * as React from "react";
import { SignedOut, SignedIn, SignInButton } from "@clerk/clerk-react";
import Layout from "./layout";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Featured from "./components/Featured";

function App() {
   return (
      // If user is signed out they can only see the Hero section.
      // If user is signed in they can see the Hero, Products, and Featured sections.
      <Layout>
         <SignedOut>
            {/* Hero */}
            <Hero />
         </SignedOut>
         <SignedIn>
            {/* Products */}
            <Products />
            {/* Featured */}
            <Featured />
         </SignedIn>
      </Layout>
   );
}

export default App;
