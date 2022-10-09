import React from 'react'
import p1 from "../Assets/images/health-check.jpg";
import p2 from "../Assets/images/online-doc.png";
import p3 from "../Assets/images/foos.jpg";
import p4 from "../Assets/images/disease.jpg";


function Dashbox() {
  return (
    <div className='w-96 '>
      

    <div className='row1 flex w-screen '>
    <div class="flex items-center scale-75">
  <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <img class="rounded-xl" src={p1} alt="" />
    <div class="flex justify-between items-center">
      <div>
        <h1 class="mt-5 text-2xl font-semibold">Visit Now</h1>
        <p class="mt-2">$11.99</p>
      </div>
      <div>
        <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
      </div>
    </div>
  </div>
</div>
<div class=" flex items-center scale-75">
  <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <img class="rounded-xl" src={p2} alt="" />
    <div class="flex justify-between items-center">
      <div>
        <h1 class="mt-5 text-2xl font-semibold">Aloe Cactus</h1>
        <p class="mt-2">$11.99</p>
      </div>
      <div>
        <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
      </div>
    </div>
  </div>
</div>
</div>


<div className='row1 flex w-screen '>
    <div class="flex items-center scale-75">
  <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <img class="rounded-xl" src={p3} alt="" />
    <div class="flex justify-between items-center">
      <div>
        <h1 class="mt-5 text-2xl font-semibold">Aloe Cactus</h1>
        <p class="mt-2">$11.99</p>
      </div>
      <div>
        <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
      </div>
    </div>
  </div>
</div>
<div class=" flex items-center scale-75">
  <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <img class="rounded-xl" src={p4} alt="" />
    <div class="flex justify-between items-center">
      <div>
        <h1 class="mt-5 text-2xl font-semibold">Aloe Cactus</h1>
        <p class="mt-2">$11.99</p>
      </div>
      <div>
        <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
      </div>
    </div>
  </div>
</div>
</div>

</div>
  )
}

export default Dashbox