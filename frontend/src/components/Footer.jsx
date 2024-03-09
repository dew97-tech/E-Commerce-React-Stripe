import React from "react";
import { BsShop } from "react-icons/bs";
const Footer = () => {
   return (
      <>
         <footer className='flex justify-around items-center footer p-10 bg-base-200 text-base-content mt-auto flex-wrap'>
            <aside>
               <img src='/assets/images/logo.png' alt='logo' className='w-35 h-35' />
               <p>
                  <span className='text-xl font-medium flex items-center'>
                     SHOP NOW
                     {/* <BsShop className='ml-2' size='1.5em' /> */}
                  </span>
                  Providing reliable tech since 2022
               </p>
            </aside>
            <nav>
               <h6 className='footer-title text-black'>Services</h6>
               <a className='link link-hover'>Branding</a>
               <a className='link link-hover'>Design</a>
               <a className='link link-hover'>Marketing</a>
               <a className='link link-hover'>Advertisement</a>
            </nav>
            <nav>
               <h6 className='footer-title text-black'>Company</h6>
               <a className='link link-hover'>About us</a>
               <a className='link link-hover'>Contact</a>
               <a className='link link-hover'>Jobs</a>
               <a className='link link-hover'>Press kit</a>
            </nav>
            <nav>
               <h6 className='footer-title text-black'>Legal</h6>
               <a className='link link-hover'>Terms of use</a>
               <a className='link link-hover'>Privacy policy</a>
               <a className='link link-hover'>Cookie policy</a>
            </nav>
         </footer>
      </>
   );
};

export default Footer;
