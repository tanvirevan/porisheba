'use client'
import { useEffect } from 'react';
import LoginComp from './components/logincomp'
import Navbar from '../../global-components/navbar/Navbar'

export default function LoginPage() {
   useEffect(() => 
      {
         // Add your script logic here, such as adding event listeners
         const container = document.getElementById('container');
         const registerBtn = document.getElementById('register');
         const loginBtn = document.getElementById('login');
   
         registerBtn.addEventListener('click', () => {
         container.classList.add('active');
         });
   
         loginBtn.addEventListener('click', () => {
         container.classList.remove('active');
         });
      }, []);
   
    return (
      <main>
         {/* <div>
            <Navbar></Navbar>
         </div> */}
         <div>
            <LoginComp></LoginComp>
         </div>
      </main>
    )
}