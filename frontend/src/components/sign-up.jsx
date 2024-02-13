import { SignUp, ClerkLoading, ClerkLoaded } from "@clerk/clerk-react";
const Sign_Up = () => {
   return (
      <div className='flex items-center justify-center mt-auto'>
         <ClerkLoading>
            <span className='loading loading-ring loading-lg'></span>
         </ClerkLoading>
         <ClerkLoaded>
            <SignUp signInUrl='/sign-in' />
         </ClerkLoaded>
      </div>
   );
};

export default Sign_Up;
