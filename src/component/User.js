import React from "react";
import useUserDetails from "../utils/useUserDetails";

const User = () => {

  const userData= useUserDetails();
  console.log(userData)

  const{name,avatar_url}=userData;
  

  return (
    <div className="flex items-center justify-center m-4">
      <h2 className="">{name}</h2>
      <img className="rounded-full h-72 w-72" src={avatar_url}></img>
      
    </div>
  );
};

export default User;
