import React, { useState,useEffect } from 'react'

const  useUserDetails=()=> {
    const [userData, setUserData]=useState([])

    useEffect(()=>{
        fetchUserDetails()
      },[])

const fetchUserDetails=async()=>{
    const data= await fetch('https://api.github.com/users/kuldeepn')
    const json=await data.json();
setUserData(json);
}

  return userData;
   
}

export default useUserDetails