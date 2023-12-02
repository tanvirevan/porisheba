import Navbar from "@/app/global-components/navbar/Navbar";
import Hero from "./components/Hero";
import Recommed from "./components/Recomment";
import Expart from "./components/Expart";
import Modal from "@/app/global-components/modal";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Login()
   {
      return (
         <div>
            <main>
               <Navbar></Navbar>
            </main>
            <Hero></Hero>
            <Recommed></Recommed>
            <section>
               <div className='lg:ml-[104px] '>
                  <div className='bg-gray-50 rounded-lg mt-10 mb-10'>
                     <div className='text-[#001b5c] font-bold text-[20px] p-2 pl-2'>
                        <h1>Expert in your area</h1>
                     </div>
                     <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 pl-4'>
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
         
      )
   }