import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const TrustedBrands = () => {
   const brands = [
      {
         id: 1,
         name: "HyperX",
         image: "/assets/images/HyperX.png",
      },
      {
         id: 2,
         name: "Gigabyte",
         image: "/assets/images/Gigabyte.png",
      },
      {
         id: 3,
         name: "Logitech",
         image: "/assets/images/Logitech.png",
      },
      {
         id: 4,
         name: "Razer",
         image: "/assets/images/razer.png",
      },
      {
         id: 5,
         name: "MSI",
         image: "/assets/images/MSI.png",
      },
      {
         id: 6,
         name: "RK ROYAL KLUDGE",
         image: "/assets/images/RKlogo.png",
      },
   ];
   return (
      <section className='text-gray-600 body-font'>
         <div className='container px-5 py-24 mx-auto'>
            <div className='text-center mb-20'>
               <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
                  We have various products from different brands
               </h1>
               <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
                  Whatever you need, we have it. We have a wide range of products from different brands. We have the
                  best deals and the best prices.
               </p>
               <div className='flex mt-6 justify-center'>
                  <div className='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
               </div>
            </div>
            <Carousel
               plugins={[
                  Autoplay({
                     delay: 3000,
                  }),
               ]}
               opts={{
                  align: "start",
                  loop: true,
                  onmouseenter: false,
               }}
            >
               <CarouselContent>
                  {brands.map((brand, index) => (
                     <CarouselItem key={brand.id} className='md:basis-1/2 lg:basis-1/3'>
                        {/* Images of Different Brands */}
                        <Card className='h-64 '>
                           <CardContent className='flex items-center justify-center'>
                              <img alt={brand.name} className='object-cover h-full' src={brand.image} />
                           </CardContent>
                        </Card>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <CarouselPrevious />
               <CarouselNext />
            </Carousel>
         </div>
      </section>
   );
};

export default TrustedBrands;
