import React from "react";
import { UserProfile } from "@clerk/clerk-react";
const Profile = () => {
   return (
      <div className='mx-auto my-auto p-4 border border-slate-100 rounded-md'>
         <UserProfile path='/user-profile' routing='path' />
      </div>
   );
};

export default Profile;
