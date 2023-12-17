/* eslint-disable no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./style.css";
import app from '@/app/page';

async function db_login() {
  const res = await fetch("http://localhost:4000/users", {
    next: {
      revalidate: 0,
    },
    method: 'GET'
  });
  return res.json();
}

export default function login() {
  const router = useRouter();
  const [email, serEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const users = await db_login(); // Wait for the async function to complete
    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (foundUser) {
  
      console.log(foundUser);
      router.push('/');
    } else {
      // User not found or invalid credentials
      console.log("Invalid email or password");
    }
  };

  return (
    <main>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <div className="container" id="container">
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1 className="">Sign In</h1>
            <div className="social-icons">
              <a
                href="#"
                className="bordar-5 hover:border-[#001c5e]
                     hover:text-gray-950 ease-in duration-300"
              >
                <i className="fa-brands fa-google"></i>
              </a>
              <a
                href="#"
                className="bordar-5 hover:border-[#001c5e] hover:text-gray-950 ease-in duration-300"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="bordar-5 hover:border-[#001c5e] hover:text-gray-950 ease-in duration-300"
              >
                <i className="fa-brands fa-apple"></i>
              </a>
            </div>
            <span className="mb-2 ">or use your email password</span>

            <div className="singup-name w-full">
              <label>
                Email<span className="text-[red]">*</span>
              </label>
              <i className="fa-solid fa-envelope" />
              <input
                className="shadow-inner border-2 focus:border-[#001c5e] focus:rounded-[14px] focus:text-[#001c5e] ease-in duration-300"
                placeholder="example@gmail.com"
                required
                type="email"
                onChange={(e) => serEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="singup-name mb-[-8px] w-full">
              <label>
                Password<span className="text-[red]">*</span>
              </label>

              <i className="fa-solid fa-lock"></i>
              <input
                className="shadow-inner border-2 focus:border-[#001c5e] focus:rounded-[14px] focus:text-[#001c5e] ease-in duration-300 flex"
                placeholder="6+ strong character"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="mb-2">
              <Link
                href="#"
                className="text-[12px] text-end hover:bg-[#001c5e] hover:px-[10px] hover:py-[2px] hover: text-gray-900 hover:rounded-[5px] hover:text-white ease-in duration-300"
              >
                Forget Password?
              </Link>
            </div>
            <button
              className="shadow-md hover:text-[14px] hover:rounded-[25px] ease-in duration-300"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <h1>Hello!</h1>
              <p>Register with porisheba to use our all of the services.</p>
              <Link href="/pages/join/singup">
                <button
                  type="submit"
                  className="shadow-lg hover:text-[14px] hover:rounded-[25px] ease-in duration-300"
                  id="register"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
