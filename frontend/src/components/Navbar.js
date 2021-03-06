import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  <link
    href="https://use.fontawesome.com/releases/v5.0.2/css/brands.css"
    rel="stylesheet"
  />;
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img
                    className="block h-10 w-auto"
                    src="https://i.imgur.com/7rw5Dsb.png"
                    alt="Crashpad logo"
                  />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link exact={true} to="/">
                    <a className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      Pads
                    </a>
                  </Link>

                  <Link exact={true} to="/create-listing">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Create Listing
                    </a>
                  </Link>

                  <Link exact={true} to="/auth/google">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Register
                    </a>
                  </Link>

                  <Link exact={true} to="/login">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Login
                    </a>
                  </Link>

                  <a
                    href="https://github.com/AaronElam/crashpad"
                    target="_blank"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <b>GitHub</b>
                  </a>
                </div>
              </div>
            </div>

            {/* hamburger */}
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 text-center md:px-3"
              >
                <Link exact={true} to="/">
                  <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                    Pads
                  </a>
                </Link>

                <Link exact={true} to="/create-listing">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Create Listing
                  </a>
                </Link>

                <Link exact={true} to="/auth/google">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Register
                  </a>
                </Link>

                <Link exact={true} to="/login">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </a>
                </Link>

                <Link exact={true} to="https://github.com/AaronElam/crashpad">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    GitHub
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
