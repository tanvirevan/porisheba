'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Cinexoss.jpg'
import { Ubuntu } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Dropdown from '../dropdown'
import Button from '../button/Button';
// import Modal from '../Join-modal';
// import Join from '../../pages/join'
const ubantu =  Ubuntu({ subsets: ['greek'],weight: '700' })



export default function Navbar ()
   {
      // const [open, setOpen] = useState(false)
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
               <div className={`md:flex items-center gap-5 nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full ${
                     isSidebarOpen ? 'left-0' : 'left-[100%]'}`}
               >
                  <Link href='/' className={`text-gray-600 hover:bg-[#001c5e] hover:text-white hover:px-4 py-2 hover:rounded-lg ease-in duration-300 ${pathname === '/' ? 'active': ''}`}>
                     Home
                  </Link>
                  <Link href='/page/services' className={`text-gray-600 hover:bg-[#001c5e] hover:text-white hover:px-2 hover:rounded-lg ease-in duration-300 ${pathname === '/page/services' ? 'active': ''}`}>
                     <Dropdown></Dropdown>
                  </Link>
                  <Link href='/pages/findtasker'className={`text-gray-600 hover:bg-[#001c5e] hover:text-white hover:px-4 py-2 hover:rounded-xl ease-in duration-300  ${pathname === '/pages/findtasker' ? 'active': ''}`}>Find Tasker
                  </Link>
                  <Link href='/pages/findjobs'className={`text-gray-600 hover:bg-[#001c5e] hover:text-white hover:px-4 py-2 hover:rounded-xl ease-in duration-300 ${pathname === '/pages/findjobs' ? 'active': ''}`}>Find Jobs
                  </Link>
                  <Link href='' className={`bg-poriseba-blue text-white px-5 py-2 rounded hover:text-white hover:rounded-xl ease-in duration-200 ${pathname === '/pages/join' ? 'active': ''}`} >Join Now
                  </Link>

                  {/* <Modal open={open} onClose={() => setOpen(false)}>
                     <Join></Join>
                  </Modal> */}
                  {/* <Button href='./pages/join'>Join</Button> */}
               </div>
            </nav>
         </section>
      )
   }