import React from "react";
import Image from 'next/image';
import heroImage from "../../resorce/hero.png";
export default function Hero() {
  return (
    <div className="shadow-md">
{/* Herol section */}
      <div className="Hero_img relative">
        <div className="absolute inset-0 w-full h-full bg-[#000000] bg-opacity-50 rounded-xl"></div>
        <Image
          className="w-[100%] h-[600px] bg-cover rounded-xl" 
          src={heroImage}
          alt="img"
        />
      </div>

      <div className="text-white  absolute top-[165px] left-[250px] w-1/2 mt-16 ">
        <p className="text-xl font-bold text-gray-200">The Best Place to</p>
        <br />
        <p className="text-4xl font-extrabold">Find Professionals</p>
        <br />
        <p className="text-gray-300">
          We connect you with local professional for make
          <br /> your life better. Your problems rest here
        </p>
        <div className="flex text-black ">
          <select className="mt-4 py-3 px-5 rounded-md border-none outline-none" name="" id="">
            <option value="">Select location</option>
            <option value="">Notun Bazar</option>
            <option value="">Notun Bazar</option>
            <option value="">Notun Bazar</option>
          </select>

          <select className="mt-4 ml-5 py-3 px-4 rounded-md text-blue-600 border-none outline-none" name="" id="">
            <option className="text-blue-400" value="">
              Select a Category
            </option>
            <option className="text-blue-400" value="">
              Select a Category
            </option>
            <option className="text-blue-400" value="">
              Select a Category
            </option>
            <option className="text-blue-400" value="">
              Select a Category
            </option>
          </select>
        </div>

        <p className="mt-4 text-gray-300 font-medium">
          Select a category-{" "}
          <span className="text-white font-semibold">
            Home Service, Delivery service{" "}
          </span>
          etc.
        </p>
      </div>
    </div>
  );
}