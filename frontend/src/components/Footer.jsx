import React from "react";

const Footer = () => {
   return (
      <footer className='footer flex justify-between items-center p-4 border-t-2 text-md mt-auto'>
         <aside className='flex items-center'>
            <img src='assets/images/logo.png' alt='logo' className='w-8 h-8' />
            <span className='align-center font-bold'>SHOP NOW</span>
         </aside>
         <span>Copyright © {new Date().getFullYear()} - All right reserved</span>
      </footer>
   );
};

export default Footer;
