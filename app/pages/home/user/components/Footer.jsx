import React from "react";

export default function Footer() {
  return (
    <div>

    <main>
      <footer class="bg-white text-black">
        <div class="mx-auto w-full">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
             
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Contact
              </h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4">
                  <a href="#" class=" hover:underline">
                    +88 0239437949
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    help@porisheba.com
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Gulshan,Dhaka,Bangladesh
                  </a>
                </li>
                <li class="mb-4">
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
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    About Porisheba
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Terms & Service
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Cookie Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Return Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Careers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Join as a Professional
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Support
              </h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Help
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Safety
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Services near me
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    How to use
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
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
          <div class="px-4 py-6 bg-gray-100 items-center w-full">
            <p class="text-sm text-gray-500 text-center">
              © 2023 <a href="#">Porisheba™</a>. All Rights
              Reserved.
            </p>
          </div>
    </div>
  );
}
