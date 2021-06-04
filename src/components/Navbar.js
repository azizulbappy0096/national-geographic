import React from "react";

function Navbar() {
  return (
    <nav className="navbar px-4 bg-white">
      <div className="flex justify-between items-center">
        <div className="">
          <a href="/">
          <img src="/logo.webp" alt="Navbar logo" className="hidden sm:block" />
          <img src="/logo-sm.png" alt="Navbar logo" className="sm:hidden" />
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="navbar-link uppercase font-bold tracking-widest hover:text-gray-600"
          >
            {" "}
            Login{" "}
          </a>

          <a href="#" className="hidden sm:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>

          <a href="#" className="fitt-tracker border-custom-yellow capitalize font-light border-b-2 hidden sm:inline-block">
            {" "}
            Renew{" "}
          </a>
          <a
            href="#"
            className="nav__button px-4 py-4 text-white uppercase font-bold tracking-widest border-b-2 border-white hover:text-black"
          >
            <span className="base absolute inset-0 bg-black"></span>
            <span className="bg inset-0" style={{
                backgroundColor: "#fc0"
            }}></span>
            <span className="relative z-10">Subscribe</span>
          </a>
          <a
            href="#"
            className="navbar-link flex items-center uppercase font-bold tracking-widest hover:text-gray-600"
          >
            <span className="hidden sm:inline">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
