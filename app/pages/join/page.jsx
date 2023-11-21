'use client'
import { useEffect } from 'react';
import Join from './components/join'

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
         <Join></Join>
      </main>
    )
}