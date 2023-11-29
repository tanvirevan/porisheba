'use client'
import React, { Fragment, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import porisebaN from './porishebaN.png';
import { usePathname } from 'next/navigation'
import Dropdown from '../dropdown'
import NavButton from '../button/NavButton';
import ServicesButton from '../button/Services';
import JoinButton from '../button/JoinButton';
import Modal from '../modal';


export default function Navbar ()
   {
      const [isSidebarOpen, setSidebarOpen] = useState(false);
      const [showModal, setshowModal] = useState(false);
      const [isHovered, setIsHovered] = useState(false);
      const toggleSidebar = () => 
         {
            setSidebarOpen(!isSidebarOpen);
         };
      return(
// Start navbar Section
         <div className='relative z-[100] mb-20'> 
            <section className='fixed top-0 left-0 right-0 bg-gray-400 border-none outline-none bg-opacity-70 top-0 shadow-md px-4 rounded-md'>
               <nav className='w-11/12 flex justify-between items-center'>

   {/* Porisheba Logo */}
                  <div>
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
                        {/* <Fragment>
                           <JoinButton ButtonName='Join Now' onClick={() => setshowModal(true)}></JoinButton>
                           <Modal isVisible={showModal} onClose={() => setshowModal(false)}>
                              {<Join></Join>}
                           </Modal>
                     </Fragment> */}
                        <JoinButton Buttonlink='/pages/join' ButtonName='Join Now'></JoinButton>
                     
                  </div>
               </nav>
            </section>
         </div>
      )
      }