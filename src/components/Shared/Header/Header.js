import React, { useState } from "react";
import { Link } from "react-router-dom";
import henaTours from '../../../images/henaTours.jpeg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto  flex flex-wrap justify-between items-center">
        <div className="flex items-center  w-full lg:w-auto">
          <h1 className="ml-4 text-2xl lg:text-3xl md:text-xl font-bold">
          <Link to='/'>
            <img className="w-24" src={henaTours} alt="hena tours logo" />
          </Link>
          </h1>
        </div>

        <div className="lg:hidden md:hidden flex w-full justify-start items-center ms-5 pb-2">
          <button
            onClick={toggleMenu}
            className="bg-green-800 hover:bg-green-700 text-white hover:text-gray-200 "
          >
            <svg
              className="w-6 h-6 border "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <nav
          className={`lg:flex md:flex ${
            isMenuOpen ? "block ms-4" : "hidden"
          } flex-wrap justify-center items-center w-full lg:w-auto`}
        >
          <Link
            to="/"
            className=" text-green-800 hover:text-gray-900 font-bold lg:mr-6 md:mr-4 mr-2 block lg:inline-block mb-2 md:mb-0"
          >
            {/* Home */}
            হোম
          </Link>
          <Link
            to="/hajj-packages"
            className=" text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block mb-2 md:mb-0"
          >
            {/* Hajj Packages */}
            হজ্জ  প্যাকেজ
          </Link>
          <Link
            to="/umrah-packages"
            className=" text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block mb-2 md:mb-0"
          >
            {/* Umrah Packages */}
            উমরাহ্‌ প্যাকেজ
          </Link>

          <div className="relative inline-block text-left group mb-2 md:mb-0">
            <span className=" inline-flex justify-center items-center bg-white text-black lg:px-4 border border-transparent rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              {/* Services */}
              সার্ভিসেস
              <svg
                className="w-4 h-4 ml-2 -mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            <div className="origin-top-left absolute left-0 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block z-50">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link
                  to="/hajj-packages"
                  className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {/* Hajj Package */}
                  হজ্জ  প্যাকেজ
                </Link>
                <Link
                  to="/umrah-packages"
                  className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {/* Umrah Package */}
                  উমরাহ্‌ প্যাকেজ
                </Link>
                <Link
                  to="/visa-process"
                  className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {/* Visa Process */}
                  ভিসা প্রসেস
                </Link>
                <Link
                  to="/air-ticket"
                  className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {/* Air Ticket */}
                 এয়ার টিকেট
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/about-us"
            className=" text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block lg:ps-5 mb-2 md:mb-0"
          >
            {/* About Us */} 
            আমাদের সম্পর্কে
          </Link>
          <Link
            to="/contact"
            className=" text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block mb-2 md:mb-0"
          >
            {/* Contact */}
            যোগাযোগ
          </Link>
          <Link
            to="/contact"
            className=" background-color lg:ms-3 border hover:bg-white hover:border hover:border-green-800 hover:text-green-800 text-white font-bold py-3 px-5 rounded-full text-center"
          >
            {/* Price Estimate */}
            মূল্য অনুমান

          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;