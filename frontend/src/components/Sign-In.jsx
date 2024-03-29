import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/clerk-react";
export default function SignInPage() {
   return (
      <div className='flex items-center justify-center mt-auto'>
         <ClerkLoading>
            <span className='loading loading-ring loading-lg'></span>
         </ClerkLoading>
         <ClerkLoaded>
            <SignIn signUpUrl='/sign-up' />
         </ClerkLoaded>
      </div>
   );
}
