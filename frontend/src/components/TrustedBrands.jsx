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
      <section className='body-font'>
         <div className='container px-5 py-24 mx-auto'>
            <div className='text-center mb-10'>
               <h2 className='text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl uppercase p-3'>Our Partners</h2>
               {/* <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Whatever you need, we have it. We have a wide range of products from different brands. We have the
                  best deals and the best prices.
               </p> */}
            </div>
            <Carousel
               plugins={[
                  Autoplay({
                     delay: 3000,
                     stopOnMouseEnter: true,
                  }),
               ]}
               opts={{
                  align: "start",
                  loop: true,
                  onmouseenter: true,
               }}
            >
               <CarouselContent>
                  {brands.map((brand, index) => (
                     <CarouselItem key={brand.id} className='md:basis-1/2 lg:basis-1/3 sm:basis-1'>
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
