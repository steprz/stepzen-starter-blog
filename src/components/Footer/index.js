import { React } from "react";

function Footer() {
  return (
    <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
      <div class="container mx-auto px-4">
        <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 class="text-xl font-bold mb-6">Features</h5>
            <ul class="list-none footer-links">
              <li class="mb-2">
                <a
                  href="#"
                  class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Feature 1
                </a>
              </li>
            </ul>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 class="text-xl font-bold mb-6">Resources</h5>
            <ul class="list-none footer-links">
              <li class="mb-2">
                <a
                  href="#"
                  class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Resource
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="#"
                  class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Resource name
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="#"
                  class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Another resource
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="#"
                  class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 class="text-xl font-bold mb-6">About Me</h5>
            <ul class="list-none footer-links">
              <li class="mb-2">
                <a
                  href="#"
                  class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  What I like
                </a>
              </li>
            </ul>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 class="text-xl font-bold mb-6">Reach Out</h5>
            <ul class="list-none footer-links">
              <li class="mb-2">
                <a
                  href="#"
                  class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div class="flex sm:justify-center xl:justify-start">
              <a
                href=""
                class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <i class="fa fa-facebook"></i>
              </a>
              <a
                href=""
                class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <i class="fa fa-twitter"></i>
              </a>
              <a
                href=""
                class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              >
                <i class="fa fa-google"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div class="sm:w-full px-4 md:w-1/6">
            <strong>StepZen Starter Blog</strong>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 class="font-bold mb-2">Address</h6>
            <address class="not-italic mb-4 text-sm">
              123 6th St.
              <br />
              Melbourne, FL 32904
            </address>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 class="font-bold mb-2">Free Resources</h6>
            <p class="mb-4 text-sm">
              <em>All are MIT License</em>
            </p>
          </div>
          <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button class="px-4 py-2 bg-primary-800 hover:bg-primary-900 rounded text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
