import React from "react";

export default function Footer() {
  return (
    <div>

    <main>
      <footer className="bg-white text-black">
        <div className="mx-auto w-full">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
             
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Contact
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    +88 0239437949
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    help@porisheba.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Gulshan,Dhaka,Bangladesh
                  </a>
                </li>
                <li className="mb-4">
                  <div className="social_icon flex">
                    <i className="fa-brands fa-facebook px-1"></i>
                    <i className="fa-brands fa-facebook px-1"></i>
                    <i className="fa-brands fa-facebook px-1"></i>
                    <i className="fa-brands fa-facebook px-1"></i>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About Porisheba
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms & Service
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Return Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Join as a Professional
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Support
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Safety
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Services near me
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    How to use
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Download Our App
              </h2>
              <p className="text-md text-gray-500 leading-8">
                Compare prices, read reviews and
                <br /> book top-rated professional
                <br /> — all in one free app.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
          <div className="px-4 py-6 bg-gray-100 items-center w-full">
            <p className="text-sm text-[#3772ff] text-center ">
              © 2023 <a href="#">Loopein™</a>. All Rights
              Reserved.
            </p>
          </div>
    </div>
  );
}
