'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import porisebaN from './porishebaN.png';
import { usePathname } from 'next/navigation'
import Dropdown from '../dropdown'
import NavButton from '../button/NavButton';
import ServicesButton from '../button/Services';
import JoinButton from '../button/JoinButton';




export default function Navbar ()
   {
      const [isSidebarOpen, setSidebarOpen] = useState(false);
      const [isHovered, setIsHovered] = useState(false);
      const toggleSidebar = () => 
         {
            setSidebarOpen(!isSidebarOpen);
         };
      return(
// Start navbar Section
         <section className=' bg-gray-100 border-none outline-none bg-opacity-50 top-0 shadow-md px-4 rounded-md'>
            <nav className='flex justify-between items-center'>

{/* Porisheba Logo */}
               <div className='group'>
                  <Link href='/'>
                     <Image className='w-[140px] hover:w-[145px] ease-in duration-300'
                        src={porisebaN}
                        alt="img"
                     />
                  </Link>
               </div>

{/* For Small Devices */}
               <div className='md:hidden flex items-center'>
                  <div onClick={toggleSidebar} className="cursor-pointer">
                     <button  
                        className='p-2 rounded text-poriseba-blue mr-2'
                     >
                        ☰ 
                     </button>
                  </div>
               </div>

{/* Start Navbar Button */}
               <div className={`md:flex items-center gap-3 nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-   [-100%] md:w-auto  w-full ${isSidebarOpen ? 'left-0' : 'left-[100%]'}`}>

{/* Home Button */}
                  <NavButton Buttonlink='/' ButtonName='Home'></NavButton>

{/* Dropdown Button */}
                  <ServicesButton Buttonlink='#' ButtonName={<Dropdown></Dropdown>}></ServicesButton>

{/* FindTasker Button */}
                  <NavButton Buttonlink='/pages/findtasker' ButtonName='Find Tasker'></NavButton>

{/* FindJobs Button */}
                  <NavButton Buttonlink='/pages/findjobs' ButtonName='Find Jobs'></NavButton>

{/* Join Button */}
                  <JoinButton Buttonlink='/pages/join' ButtonName='Join Now'></JoinButton>
                  {/* <Modal open={open} onClose={() => setOpen(false)}>
                     <Join></Join>
                  </Modal> */}
                  
               </div>
            </nav>
         </section>
      )
   }