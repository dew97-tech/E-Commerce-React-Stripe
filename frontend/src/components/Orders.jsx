import React, { useEffect, useState } from "react";
import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card";
import { useAuth } from "@clerk/clerk-react";
import Loading from "./Loading";

const Orders = () => {
   const [orders, setOrders] = useState([]);
   const [loading, setLoading] = useState(false);
   const { userId } = useAuth(); // Assuming you have user data from Clerk

   useEffect(() => {
      const fetchOrders = async () => {
         setLoading(true);
         try {
            const response = await fetch(`http://localhost:1337/api/orders?filters[user][$contains]=${userId}`);
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setOrders(data.data);
         } catch (error) {
            console.error("Error fetching orders:", error);
         } finally {
            setLoading(false);
         }
      };

      if (userId) {
         fetchOrders();
         console.log(userId);
      }
   }, [userId]);

   if (loading) {
      return <Loading />;
   }

   return (
      <>
         <section className='container mx-auto px-4 md:px-6 py-8'>
            <h1 className='text-2xl font-bold mb-6'>Order History</h1>
            {orders.length === 0 && <p className='text-xl text-gray-500'>No Orders Placed Yet</p>}
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
               {orders.map((order) => (
                  <Card key={order.id} className='flex flex-col h-full'>
                     <CardHeader>
                        <div className='flex items-center justify-between'>
                           <span className='text-md text-gray-500 dark:text-gray-400'>
                              Order Date:{" "}
                              <span className='font-medium text-primary'>
                                 {" "}
                                 {new Date(order.attributes.createdAt).toLocaleDateString()}
                              </span>
                           </span>
                           <span
                              className={`badge p-2 text-sm font-medium ${
                                 order.attributes.status ? "text-green-500" : "text-yellow-500"
                              }`}
                           >
                              {order.attributes.status ? "Completed" : "Pending"}
                           </span>
                        </div>
                     </CardHeader>
                     <CardContent className='flex-grow'>
                        <ul className='space-y-4'>
                           {order.attributes.items.map((product) => (
                              <>
                                 <li key={product.productId} className='flex items-center gap-4'>
                                    <img
                                       src={`http://localhost:1337${product.imgUrl}`}
                                       alt={product.name}
                                       width={64}
                                       height={64}
                                       className='aspect-square rounded-md object-contain border p-1 shadow-sm'
                                    />
                                    <div className='flex-1'>
                                       <h3 className='text-base font-medium'>{product.name}</h3>
                                       <h2 className='text-base font-medium '>Quantity : {product.quantity}</h2>

                                       <p className='text-sm font-semibold text-accent dark:text-gray-400'>
                                          ${product.price.toFixed(2)}
                                       </p>
                                    </div>
                                 </li>
                                 <hr />
                              </>
                           ))}
                        </ul>
                     </CardContent>
                     <CardFooter>
                        <div className='flex items-center justify-between w-full'>
                           <span className='text-sm font-medium text-black dark:text-gray-400'>
                              Total Price:{" "}
                              <span className='mx-2 text-primary'>${order.attributes.totalPrice.toFixed(2)}</span>
                           </span>
                           <span className='badge text-sm font-medium px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'>
                              {order.attributes.paymentMethod}
                           </span>
                        </div>
                     </CardFooter>
                  </Card>
               ))}
            </div>
         </section>
         {/* <main className='flex flex-col flex-1 gap-8 p-6 bg-gray-50 min-h-screen'>
            <div className='flex items-center justify-center mb-8'>
               <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl'>My Orders</h1>
            </div>
            {orders.length === 0 ? (
               <div className='flex justify-center items-center'>
                  <Loading />
               </div>
            ) : (
               orders.map((order) => (
                  <Card key={order.id} className='bg-white shadow-lg rounded-lg mb-8'>
                     <CardHeader className='bg-gray-200 p-4 rounded-t-lg'>
                        <CardTitle className='text-xl font-semibold'>Order Details</CardTitle>
                     </CardHeader>
                     <CardContent className='p-6'>
                        <div className='grid gap-4 md:grid-cols-2 text-gray-700 mb-4'>
                           <div className='flex justify-between'>
                              <span>Order ID:</span>
                              <span className='font-medium'>#{order.id}</span>
                           </div>
                           <div className='flex justify-between'>
                              <span>Order Date:</span>
                              <span className='font-medium'>
                                 {new Date(order.attributes.createdAt).toLocaleDateString()}
                              </span>
                           </div>
                           <div className='flex justify-between'>
                              <span>Payment Method:</span>
                              <span className='font-medium'>{order.attributes.paymentMethod}</span>
                           </div>
                           <div className='flex justify-between'>
                              <span>Status:</span>
                              <span
                                 className={`font-medium ${
                                    order.attributes.status ? "text-green-500" : "text-yellow-500"
                                 }`}
                              >
                                 {order.attributes.status ? "Completed" : "Pending"}
                              </span>
                           </div>
                        </div>
                     </CardContent>
                     <Card>
                        <CardHeader className='bg-gray-200 p-4'>
                           <CardTitle className='text-lg font-semibold'>Products</CardTitle>
                        </CardHeader>
                        <CardContent className='p-6 grid gap-4'>
                           {order.attributes.items.map((item) => (
                              <div key={item.productId} className='flex items-start gap-4 bg-gray-100 p-4 rounded-lg'>
                                 <img
                                    alt='Product image'
                                    className='aspect-square rounded-md object-contain border p-3'
                                    height='150'
                                    src={`http://localhost:1337${item.imgUrl}`}
                                    width='150'
                                 />
                                 <div className='flex-1'>
                                    <p className='text-sm font-semibold'>{item.name}</p>
                                 </div>
                                 <div className='text-sm'>
                                    <p className='font-medium'>Product ID: {item.productId}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                 </div>
                              </div>
                           ))}
                        </CardContent>
                     </Card>
                     <Card>
                        <CardHeader className='bg-gray-200 p-4 rounded-b-lg'>
                           <CardTitle className='text-lg font-semibold'>Payment Summary</CardTitle>
                        </CardHeader>
                        <CardContent className='p-6 flex justify-between items-center bg-gray-50 rounded-b-lg'>
                           <div className='text-lg font-semibold'>Total Price</div>
                           <div className='text-xl font-bold'>${order.attributes.totalPrice}</div>
                        </CardContent>
                     </Card>
                  </Card>
               ))
            )}
         </main> */}
      </>
   );
};

export default Orders;
