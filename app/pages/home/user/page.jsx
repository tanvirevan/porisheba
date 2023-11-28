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
            <Expart></Expart>
            <Contact></Contact>
            <Footer></Footer>
         </div>
         
      )
   }