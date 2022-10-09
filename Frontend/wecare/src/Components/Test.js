import React from 'react'
import { Button } from "@material-tailwind/react";
import { auth } from '../fire';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

function Test() {
  const navigate = useNavigate()
  const provider = getAuth();

  const logOut = ()=>{
    signOut(auth,provider).then(() => {
      // Sign-out successful.
      console.log("logout ghdsdsghjsa")
      navigate('/')
    }).catch((error) => {
      console.log(error);
    });
  }


  return (
     <Button onClick={logOut}>LogOut</Button>

  )
}

export default Test