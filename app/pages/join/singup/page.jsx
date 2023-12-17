/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './style.css';

export default function Signup() {
   const router = useRouter();

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const handleReg =  async (e) => {
      e.preventDefault();
      setIsLoading(true);
      
      const User = { name, email, password};
      const res = await fetch ('http://localhost:4000/users', {
            next:
              {
                revalidate: 0
              },
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(User)
         });
         console.log(res);
         if(res.status === 201){
               router.refresh();
               
               router.push('/pages/join/login');
            }
      };

   useEffect(() => {
      const container = document.getElementById('container');
      const registerBtn = document.getElementById('register');
      const loginBtn = document.getElementById('login');
    
      if (container && registerBtn && loginBtn) {
        registerBtn.addEventListener('click', () => {
          container.classList.add('active');
        });
    
        loginBtn.addEventListener('click', () => {
          container.classList.remove('active');
        });
      }
    }, []);

  return (
    <main>
      <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
         <title>porisheba login</title>
      </head>
      <div className="container active" id="container">
         <div className="form-container sign-up">
            <form onSubmit={handleReg}>
               <h1>Create Account</h1>
               <div className="social-icons">
                  <a href='#' className='bordar-5 hover:border-[#001c5e] hover:text-gray-950 ease-in duration-300'>
                     <i className="fa-brands fa-google"></i>
                  </a>
                  <a href="#"className='bordar-5 hover:border-[#001c5e] hover:text-gray-950 ease-in duration-300'>
                     <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className='bordar-5 hover:border-[#001c5e] hover:text-gray-950 ease-in duration-300'>
                     <i className="fa-brands fa-apple"></i>
                  </a>
               </div>
               <span className='mb-2'>or use your email for registration</span>

               <div className='singup-name w-full'>
                  <label>
                     Name<span className='text-[red]'>*</span>
                  </label>
                  <input 
                     className="shadow-inner border-2 focus:border-[#001c5e] focus:rounded-[14px] focus:text-[#001c5e] ease-in duration-300"
                     placeholder="Your Name"
                     required
                     type="text"
                     onChange={(e) => setName(e.target.value)}
                     value = {name}
                  />
               </div>

               <div className='singup-name w-full'>
                  <label>
                     Email<span className='text-[red]'>*</span>
                  </label>
                  <i className="fa-solid fa-envelope"></i>
                  <input 
                     className="shadow-inner border-2 focus:border-[#001c5e] focus:rounded-[14px] focus:text-[#001c5e] ease-in duration-300" 
                     placeholder="example@gmail.com"
                     required
                     type="email"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                  />
               </div>
               
               <div className='singup-name w-full'>
                  <label>
                     Password<span className='text-[red]'>*</span>
                  </label>
                  <i className="fa-solid fa-lock"></i>
                  <input 
                     className="shadow-inner border-2 focus:border-[#001c5e] focus:rounded-[14px] focus:text-[#001c5e] ease-in duration-300" 
                     placeholder="6+ strong password" 
                     required
                     type="password" 
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                  />
               </div>


               <button className='shadow-md hover:text-[14px] hover:rounded-[25px] ease-in duration-300'>
                  Sign Up
               </button>

            </form>
         </div>

         <div className="toggle-container">
            <div className="toggle">
               <div className="toggle-panel toggle-left">
                  <h1>Welcome Back!</h1>
                  <p>Porisebha is the great for home service in the Bangladesh, login to connnected.</p>
                  <Link href='/pages/join/login'>
                     <button className="shadow-lg hover:text-[14px] hover:rounded-[25px] ease-in duration-300" id="login">Sign In</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
    </main>
  );
}

