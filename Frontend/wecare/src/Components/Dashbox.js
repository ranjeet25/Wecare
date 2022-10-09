import React from 'react'
import Dlist from './Dlist';
import { Link } from 'react-router-dom';
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
        <h3 class="mt-5 text-lg font-semibold">Health Monitoring</h3>
        <p class=" mt-2">Free</p>
      </div>
      <div>
        <a href='https://www.nal.usda.gov/human-nutrition-and-food-safety9'>
        <button class="text-white text-md font-semibold bg-blue-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Visit Now</button>
        </a>
      </div>
    </div>
  </div>
</div>
<div class=" flex items-center scale-75">
  <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <img class="rounded-xl" src={p2} alt="" />
    <div class="flex justify-between items-center">
      <div>
        <h1 class="mt-5 text-lg font-semibold">Consult doctor </h1>
        <p class="mt-2">Free</p>
      </div>
      <div>
        <a href='https://calldoctorabhi.herokuapp.com/ '>
        <Link className="flex items-center" to="/dlist">
        <button class="text-white text-md font-semibold bg-blue-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Find Doctor</button>
        </Link>
        </a>
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
        <h1 class="mt-5 text-lg font-semibold">Nutrients Facts</h1>
        <p class="mt-2">Free</p>
      </div>
      <div>
        <a href='https://www.nal.usda.gov/human-nutrition-and-food-safety/'>
        <button class="text-white text-md font-semibold bg-blue-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Get detail</button>
        </a>
      </div>
    </div>
  </div>
</div>
<div class=" flex items-center scale-75">
  <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <img class="rounded-xl" src={p4} alt="" />
    <div class="flex justify-between items-center">
      <div>
        <h1 class="mt-5 text-lg font-semibold">Diseases Info</h1>
        <p class="mt-2">Free</p>
      </div>
      <div>
        <button class="text-white text-md font-semibold bg-blue-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Get Info</button>
      </div>
    </div>
  </div>
</div>
</div>

</div>
  )
}

export default Dashbox