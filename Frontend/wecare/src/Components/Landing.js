import React from 'react'
import Navigation from './Navbar'
import { Outlet, Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import bg from "../Assets/images/hospital.gif";

function Landing() {
  return (
  <div className="Main py-4">
      <Navigation></Navigation>

      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="mt-8">
          <img
            src={bg}
            className=" scale-125 object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
            alt="imjoker"
          />
        </div>
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p> */}
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              We Care for You !!
              <br className="hidden md:block" />
             
              <span className="inline-block text-lg text-blue-400">
                If we not then who will ??
              </span>
            </h2>
            <p className="text-xs text-gray-800 md:text-xs font-semibold">
              It is a special webapp build for human welfare
              health comes before anything else. Our Heart of project is online consultancy 
              in which patient directly talk to top most Qualified  Doctor's
            </p>
          </div>
          <div className="flex items-center">
            <Link to="/login">
              <Button
                variant="gradient"
                size="md"
                color="blue"
                className=" lg:inline-block mr-4 font-dmsans"
              >
                Consult Now
              </Button>
            </Link>
            <a
              href="/dashbox"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-blue-700"
            >
              Other services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing