/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import U_Navbar from "@/app/global-components/navbar/UserNavbar";
import Hero from "../components/Hero";
import Recommed from "../components/Recomment";
import Expart from "../components/Expart";
import Footer from "../components/Footer";
import Contact from "../components/Contact";


async function getUser(id)
  {
    await new Promise (resolve => setTimeout(resolve,2000));
    const res = await fetch('http://localhost:4000/users/'+id);
    return res.json();
  }

export default async function Userprofile({params}) {
  const user = await getUser(params.id);

  return (
    <div>
      <Hero></Hero>
      <Recommed></Recommed>
      <section>
        <div className="lg:ml-[104px] ">
          <div className="bg-gray-50 rounded-lg mt-10 mb-10">
            <div className="text-[#001b5c] font-bold text-[20px] p-2 pl-2">
              <h1>Expert in your area</h1>
            </div>
            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 pl-4">
              <Expart></Expart>
              <Expart></Expart>
              <Expart></Expart>
              <Expart></Expart>
              <Expart></Expart>
              <Expart></Expart>
              <Expart></Expart>
              <Expart></Expart>
            </div>
          </div>
        </div>
      </section>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
