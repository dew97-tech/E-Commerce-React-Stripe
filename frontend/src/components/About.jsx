import React from "react";

const About = () => {
   return (
      <section className=' body-font'>
         <div className='container px-5 py-24 mx-auto flex flex-col'>
            <div className='lg:w-4/6 mx-auto'>
               <div className='rounded-lg h-64 overflow-hidden'>
                  <img
                     alt='Hero-Image'
                     className='object-cover object-center h-full w-full'
                     src='assets/images/hero.jpg'
                  />
               </div>
               <div className='flex flex-col sm:flex-row mt-10'>
                  <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                     <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 '>
                        <img
                           src='assets/images/profile.jpg'
                           alt='Profile-Image'
                           className='object-cover object-center h-full w-full rounded-lg'
                        />
                     </div>
                     <div className='flex flex-col items-center text-center justify-center'>
                        <h2 className='font-medium title-font mt-4  text-lg'>David Dew Mallick</h2>
                        <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                        <p className='text-base'>
                           A software engineer with a passion for building products that people love.
                        </p>
                     </div>
                  </div>
                  <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                     <p className='leading-relaxed text-lg mb-4'>
                        A simple e-commerce website built with React, Tailwind CSS and Daisy UI. The website is
                        responsive and mobile friendly. The website is also integrated with fakestore api, a dummy api
                        for prototyping e-commerce. The website uses React Context API for state management. The code is
                        hosted on Github and deployed on Vercel.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
