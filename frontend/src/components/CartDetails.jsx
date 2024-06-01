import React, { useContext } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { ProductContext } from "../context/ProductContext";
import EmptyCart from "./EmptyCart";
import useImage from "@/hooks/useImage";
import { useAuth } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const CartDetails = () => {
   const { cart, clearCart, products, filterProductsBySearch, setCart, calculateTotalPrice } =
      useContext(ProductContext);
   const { userId } = useAuth();
   const { user } = useUser();

   const handleQuantityChange = (productId, newQuantity) => {
      const updatedCart = cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item));
      setCart(updatedCart); // Update the cart state
      filterProductsBySearch(); // Refresh the filtered products
   };

   const handleRemoveItem = (productId) => {
      toast.warning("Item removed from cart", {
         position: "bottom-right",
         dismissible: true,
      });
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart); // Update the cart state
      filterProductsBySearch(); // Refresh the filtered products
   };

   const handleCOD = async () => {
      const orderData = {
         items: cart.map((item) => ({
            imgUrl: item.attributes.image?.data?.attributes?.url,
            name: item.attributes.title,
            productId: item.id,
            quantity: item.quantity,
            price: item.attributes.price,
         })),
         totalPrice: calculateTotalPrice(),
         paymentMethod: "Cash on Delivery",
         status: false, // Assuming the initial status is pending and represented by false
         user: {
            id: userId,
            fullName: user?.fullName,
         },
         username: user?.fullName,
      };

      try {
         const response = await fetch("http://localhost:1337/api/orders", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: orderData }),
         });

         if (response.ok) {
            toast.success("Order placed successfully", {
               position: "bottom-right",
               dismissible: true,
            });
            clearCart();
         } else {
            const errorData = await response.json();
            console.error("Error placing order:", errorData);
            toast.error("Failed to place order", {
               position: "bottom-right",
               dismissible: true,
            });
         }
      } catch (error) {
         console.error("Error placing order:", error);
         toast.error("Failed to place order", {
            position: "bottom-right",
            dismissible: true,
         });
      }
   };

   return (
      <div className='w-full max-w-5xl mx-auto p-6 my-auto bg-white rounded-lg shadow-md dark:bg-gray-800'>
         {cart.length === 0 ? (
            <EmptyCart />
         ) : (
            <>
               <h2 className='text-3xl font-semibold text-gray-900 dark:text-white mb-10'>Shopping Cart</h2>
               {cart.map((item) => (
                  <div key={item.id} className='mt-4 space-y-4'>
                     <div className='grid grid-cols-6 gap-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg items-center hover:shadow-lg duration-500 animate-out'>
                        <img
                           alt={item.attributes.title}
                           className='aspect-square rounded-md object-contain col-span-1'
                           height='64'
                           src={useImage(item.attributes.image?.data?.attributes?.url)}
                           width='64'
                        />
                        <div className='grid gap-1 col-span-2'>
                           <h3 className='text-md font-medium text-gray-900 dark:text-white'>
                              {item.attributes.title}
                           </h3>
                           <p className='text-sm text-gray-500 dark:text-gray-400'>{item.attributes.category}</p>
                        </div>
                        <div className='flex items-center space-x-2 col-span-1'>
                           <Button
                              size='icon'
                              variant='outline'
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                           >
                              <MinusIcon className='h-4 w-4' />
                              <span className='sr-only'>Decrease quantity</span>
                           </Button>
                           <p className='text-sm text-gray-900 dark:text-white font-medium'>{item.quantity}</p>
                           <Button
                              size='icon'
                              variant='outline'
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                           >
                              <PlusIcon className='h-4 w-4' />
                              <span className='sr-only'>Increase quantity</span>
                           </Button>
                        </div>
                        <p className='text-md font-medium text-gray-900 dark:text-white col-span-1'>
                           ${item.attributes.price * item.quantity}
                        </p>
                        <button className='btn w-2/4 btn-error' size='icon' onClick={() => handleRemoveItem(item.id)}>
                           <TrashIcon className='h-4 w-4 hover:animate-bounce duration-700' />
                           <span className='sr-only'>Remove item</span>
                        </button>
                     </div>
                  </div>
               ))}
               <hr className='mt-10 pt-0' />
               <div className='mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                  <div className='flex justify-end gap-2 items-center'>
                     <div className='flex'>
                        <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Total: </h3>
                        <p className='text-xl font-bold text-primary dark:text-white'>${calculateTotalPrice()}</p>
                     </div>
                  </div>
                  <div className='mt-6'>
                     {/* <Button className='w-full text-white text-md py-5' onClick={handleCheckout}>
                        Proceed to Checkout
                     </Button> */}
                     <Button className='w-full text-white text-md py-5 mt-4' onClick={handleCOD}>
                        Proceed to Checkout
                     </Button>
                  </div>
               </div>
            </>
         )}
      </div>
   );

   function MinusIcon(props) {
      return (
         <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
         >
            <path d='M5 12h14' />
         </svg>
      );
   }

   function PlusIcon(props) {
      return (
         <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
         >
            <path d='M5 12h14' />
            <path d='M12 5v14' />
         </svg>
      );
   }

   function TrashIcon(props) {
      return (
         <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
         >
            <path d='M3 6h18' />
            <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
            <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
         </svg>
      );
   }
};

export default CartDetails;
