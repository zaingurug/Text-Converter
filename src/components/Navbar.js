import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(probs) {
  const mobileMenuToggle = ()=> {
    let mobile_menu = document.getElementById("mobile_menu");
    if (mobile_menu.className === "hidden"){
      mobile_menu.className = ""
    }
    else{
      mobile_menu.className = "hidden"
    }

  }
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <button
              type="button"
              onClick={mobileMenuToggle}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="flex flex-shrink-0 items-center">
              <span className="h-8 w-auto lg:block font-bold text-xl text-white border-2 px-3 rounded-lg justify-center">
                {probs.title}
              </span>
            </div>

            <div className="hidden ml-6 md:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </Link>
              </div>
            </div>

            <button
              type="button"
              className="absolute right-0 inline-flex items-center justify-center rounded-md p-2 bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              onClick={probs.handleMode}
              aria-expanded="false"
            >
              {probs.mode === "light" ? "Enable Dark" : "Enable Light"}
            </button>
          </div>

        </div>
      </div>
      <div className="hidden" id="mobile_menu">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-800" onClick={mobileMenuToggle}>
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                About
              </Link>
            </div>
          </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Zain",
};
