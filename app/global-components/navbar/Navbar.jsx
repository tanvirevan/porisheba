'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Cinexoss.jpg'
import { Ubuntu } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Dropdown from '../dropdown'
import NavButton from '../button/Navbar';
import ServicesButton from '../button/Services';
import JoinButton from '../button/Join';
// import Modal from '../Join-modal';
// import Join from '../../pages/join'
const ubantu =  Ubuntu({ subsets: ['greek'],weight: '700' })



export default function Navbar ()
   {
      const Buttonlink = '';
      const ButtonName = '';
      const pathname = usePathname();
      const [isSidebarOpen, setSidebarOpen] = useState(false);
      const toggleSidebar = () => 
         {
            setSidebarOpen(!isSidebarOpen);
         };
      return(
         <section className=' bg-gray-100 border-none outline-none bg-opacity-50 top-0 shadow-md px-4 rounded-md'>
            <nav className='flex justify-between items-center'>
               <div>
                  <Link href='/' className="text-poriseba-blue">
                     <h className={ubantu.className}>Porisheba</h>
                  </Link>
               </div>
               <div className='md:hidden flex items-center'>
                  <div onClick={toggleSidebar} className="cursor-pointer">
                     <button  
                        className='p-2 rounded text-poriseba-blue mr-2'
                     >
                        ☰ 
                     </button>
                  </div>
               </div>
               <div className={`md:flex items-center gap-5 nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-   [-100%] md:w-auto  w-full ${isSidebarOpen ? 'left-0' : 'left-[100%]'}`}>
                  <NavButton Buttonlink='/' ButtonName='Home'></NavButton>
                  <ServicesButton Buttonlink='#' ButtonName={<Dropdown></Dropdown>}></ServicesButton>
                  <NavButton Buttonlink='/pages/findtasker' ButtonName='Find Tasker'></NavButton>
                  <NavButton Buttonlink='/pages/findjobs' ButtonName='Find Jobs'></NavButton>
                  <JoinButton Buttonlink='/pages/join' ButtonName='Join Now'></JoinButton>
                  {/* <Modal open={open} onClose={() => setOpen(false)}>
                     <Join></Join>
                  </Modal> */}
                  
               </div>
            </nav>
         </section>
      )
   }