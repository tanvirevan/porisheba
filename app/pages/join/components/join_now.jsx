import React from 'react'
import './style.css'
import Link from 'next/link'
export default function logincomponet() {
  return (
   <div>
      <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
         <title>porisheba login</title>
      </head>
      <div className="container" id="container">
         <div className="form-container sign-up">
            <form>
               <h1>Create Account</h1>
               <div className="social-icons">
                  <a href="#" className='bordar-5 hover:border-[#001c5e] hover:text-gray-950 ease-in duration-300'>
                     <i class="fa-brands fa-google"></i>
                  </a>
                  <a href="#"className='bordar-5 hover:border-[#001c5e] hover:text-gray-950 ease-in duration-300'>
                     <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className='bordar-5 hover:border-[#001c5e] hover:text-gray-950 ease-in duration-300'>
                     <i class="fa-brands fa-apple"></i>
                  </a>
               </div>
               <span className='mb-2'>or use your email for registration</span>

               <div className='singup-name w-full'>
                  <label className='' for="">Name<span className='text-[red]'>*</span></label>
                  <input className="shadow-inner border-2 focus:border-[#001c5e] focus:rounded-[14px] ease-in duration-300" type="text" placeholder="Your Name" required/>
                  
               </div>

               <div className='singup-name w-full'>
                  <label For="">Email<span className='text-[red]'>*</span></label>
                  <i class="fa-solid fa-envelope"></i>
                  <input className="shadow-inner border-2 focus:border-[#001c5e] focus:rounded-[14px] ease-in duration-300" type="email" placeholder="example@gmail.com" required/>
               </div>
               
               <div className='singup-name w-full'>
                  <label For="">Password<span className='text-[red]'>*</span></label>
                  <i class="fa-solid fa-lock"></i>
                  <input className="shadow-inner border-2 focus:border-[#001c5e] focus:rounded-[14px] ease-in duration-300" type="password" placeholder="8+ strong character" required/>
               </div>

               <Link href='###'>
                  <button className='shadow-md hover:text-[14px] hover:rounded-[25px] ease-in duration-300'>
                  Sign Up
                  </button>
               </Link>
            </form>
         </div>

         <div className="form-container sign-in">
            <form>
               <h1 className=''>Sign In</h1>
               <div className="social-icons">
                  <a href="#" className='bordar-5 hover:border-[#001c5e]
                  hover:text-gray-950 ease-in duration-300'>
                     <i class="fa-brands fa-google"></i>
                  </a>
                  <a href="#"className='bordar-5 hover:border-[#001c5e] hover:text-gray-950 ease-in duration-300'>
                     <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className='bordar-5 hover:border-[#001c5e] hover:text-gray-950 ease-in duration-300'>
                     <i class="fa-brands fa-apple"></i>
                  </a>
               </div>
               <span className='mb-2 '>or use your email password</span>

               <div className='singup-name w-full'>
                  <label htmlFor="">Email<span className='text-[red]'>*</span></label>
                  <i class="fa-solid fa-envelope"/>
                  <input  className="shadow-inner border-2 focus:border-[#001c5e] focus:rounded-[14px] ease-in duration-300" type="email" placeholder="example@gmail.com" required/>
               </div>

               <div className='singup-name mb-[-8px] w-full'>
                  <label htmlFor="">Password<span className='text-[red]'>*</span></label>

                  <i class="fa-solid fa-lock"></i>
                  <input className="shadow-inner border-2 focus:border-[#001c5e] focus:rounded-[14px] ease-in duration-300" type="password" placeholder="8+ strong character" required/>

               </div>

               <div className='mb-2'>
                  <Link href="#" className='forget text-end hover:bg-[#001c5e] hover:px-[10px] hover: text-white hover:rounded-[5px] hover:text-white ease-in duration-300'>
                        Forget Password?
                  </Link>
               </div>
               <Link href='###'>
                  <button className='shadow-md hover:text-[14px] hover:rounded-[25px] ease-in duration-300'>
                     Sign In
                  </button>
               </Link>

            </form>
         </div>

         <div className="toggle-container">
            <div className="toggle">
               <div className="toggle-panel toggle-left">
                  <h1>Welcome Back!</h1>
                  <p>Porisebha is the great for home service in the Bangladesh, login to connnected.</p>
                  
                  <button className="shadow-lg hover:text-[14px] hover:rounded-[25px] ease-in duration-300" id="login">Sign In</button>
               </div>
               <div className="toggle-panel toggle-right">
                  <h1>Hello!</h1>
                  <p>Register with porisheba to use our all of the services.</p>
                  <button className="shadow-lg hover:text-[14px] hover:rounded-[25px] ease-in duration-300" id="register">Sign Up</button>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}
