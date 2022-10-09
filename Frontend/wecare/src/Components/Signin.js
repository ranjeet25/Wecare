import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../fire';
import { useNavigate } from 'react-router-dom'

export default function Signin() {

    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            navigate('/dashboard')
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

    return (
        
        <div class="h-screen flex">
          <div class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-blue-600 i justify-around items-center">
            <div>
              <h1 class="text-white font-bold text-4xl font-sans">We Care</h1>
              <p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
              <button type="submit" class="block w-28 bg-white text-gray-600 mt-4 py-2 rounded-2xl font-bold mb-2"> 
              <Link to="/login">
             <span> LOGIN</span>
              </Link></button>
            </div>
          </div>
          <div class="flex w-1/2 justify-center items-center bg-white">
            <div class="bg-white">
              <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Dear!</h1>
              <p class="text-sm font-normal text-gray-600 mb-7">Please enter your details</p>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input  class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
              </div>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Username" />
              </div>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
              </div>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Role" />
              </div>
              <button type="submit" class="block w-full bg-blue-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"  id='signup'>Signup</button>
              <button  onClick={signInGoogle} class="block w-full bg-blue-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"  id='signup'>Signup With google</button>
              
              <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Any Doubts ?</span>
            </div>

            
          </div>
        </div>
          )
}
