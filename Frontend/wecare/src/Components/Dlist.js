import React from 'react'
import {
    Navbar, 
    MobileNav,
    Typography,
    Button,
    IconButton,
    } from "@material-tailwind/react";

function Dlist() {
  return (
    <div className='w-screen h-screen flex justify-center'>
        <div class="w-2/4 flex flex-col shadow-lg">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead class="border-b bg-gray-800"/>
              <tr className='bg-black'>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Sr-no
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Doctor Name 
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Specialization
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Connect
                </th>
              </tr>
            <thead class="border-b" />
            <tbody>
              <tr class="bg-white border-b"></tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Dr T.S.Kler

                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cardiologist
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href='https://calldoctorabhi.herokuapp.com/ '>
                <Button variant="gradient" color='blue' size="sm" fullWidth className="mb-2">
            <span>Connect</span>
          </Button>
          </a>
                </td>
              <tr class="bg-white border-b"/>
              <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Dr Vivek Jawali
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cardiologist
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href='https://calldoctorabhi.herokuapp.com/ '>
                <Button variant="gradient" color='blue' size="sm" fullWidth className="mb-2">
            <span>Connect</span>
          </Button>
          </a>
                </td>
              </tr>
              <tr class="bg-white border-b"/>
              <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Dr. Seshadri Harihar
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  ENT
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href='https://calldoctorabhi.herokuapp.com/ '>
                <Button variant="gradient" color='blue' size="sm" fullWidth className="mb-2">
            <span>Connect</span>
          </Button>
          </a>
                </td>
              </tr>
              <tr class="bg-white border-b"/>
              <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Dr Jayant Arora
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Orthopaedic surgeon
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href='https://calldoctorabhi.herokuapp.com/ '>
                <Button variant="gradient" color='blue' size="sm" fullWidth className="mb-2">
            <span>Connect</span>
          </Button>
          </a>
                </td>
              </tr>
              <tr class="bg-white border-b"/>
              <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Dr Ram Gopal
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Dentist
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href='https://calldoctorabhi.herokuapp.com/ '>
                <Button variant="gradient" color='blue' size="sm" fullWidth className="mb-2">
            <span>Connect</span>
          </Button>
          </a>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Dlist