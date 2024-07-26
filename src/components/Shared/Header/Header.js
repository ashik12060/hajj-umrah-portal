// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 ">
//       <div className="container mx-auto py-4 flex flex-wrap justify-between items-center ">
//         <div className="flex items-center w-full lg:w-auto">
//           <h1 className="ml-4 text-2xl lg:text-3xl md:text-xl font-bold">
//             ZAM ZAM
//           </h1>
//         </div>

//         <div className="lg:hidden md:hidden flex w-full justify-end  me-5">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-600  hover:text-gray-900"
//           >
//             <svg
//               className="w-6 h-6  border"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <nav
//           className={`lg:flex md:flex ${
//             isMenuOpen ? "block ms-4" : "hidden"
//           } flex-wrap justify-center items-center w-full lg:w-auto`}
//         >
//           <Link
//             to="/"
//             className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block"
//           >
//             Home
//           </Link>
//           <Link
//             to="/hajj-packages"
//             className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block"
//           >
//             Hajj Packages
//           </Link>
//           <Link
//             to="/umrah-packages"
//             className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block"
//           >
//             Umrah Packages
//           </Link>

//           <div className="relative inline-block text-left">
//             <Link
//               onClick={toggleDropdown}
//               className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//             >
//               Services{" "}
//               <svg
//                 className="w-4 h-4 ml-2 -mr-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </Link>

//             {isOpen && (
//               <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                 <div
//                   className="py-1"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="options-menu"
//                 >
//                   <Link
//                     to="/hajj-packages"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                   >
//                     Hajj Package
//                   </Link>
//                   <Link
//                     to="/umrah-packages"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                   >
//                     Umrah Package
//                   </Link>
//                   <Link
//                     to="/visa-process"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                   >
//                     Visa Process
//                   </Link>
//                   <Link
//                     to="/air-ticket"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                   >
//                     Air Ticket
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           <Link
//             to="/training"
//             className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block"
//           >
//             Hajj Training
//           </Link>
//           <Link
//             to="/contact"
//             className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block"
//           >
//             Contact
//           </Link>
//           {/* <Link to='/contact' className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded lg:mr-4 md:mr-2 mr-2 block lg:inline-block">Get Free Estimate</Link> */}
//           <Link className="background-color mx-auto ms-3 hover:bg-white hover:border hover:border-green-800 hover:text-green-800 text-white font-bold py-3 px-5 rounded-full text-center lg:mr-4 md:mr-2 mr-2 block lg:inline-block">
//             Price Estimate
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 ">
      <div className="container mx-auto py-4 flex flex-wrap justify-between items-center ">
        <div className="flex items-center w-full lg:w-auto">
          <h1 className="ml-4 text-2xl lg:text-3xl md:text-xl font-bold">
            ZAM ZAM
          </h1>
        </div>

        <div className="lg:hidden md:hidden flex w-full justify-end me-5">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6 border"
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
            className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block"
          >
            Home
          </Link>
          <Link
            to="/hajj-packages"
            className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block"
          >
            Hajj Packages
          </Link>
          <Link
            to="/umrah-packages"
            className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block"
          >
            Umrah Packages
          </Link>

          <div className="relative inline-block text-left">
            <Link
              onClick={toggleDropdown}
              className="inline-flex justify-center  bg-green-700 text-white items-center px-4 py-2 border border-transparent rounded-md font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Services{" "}
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
            </Link>

            {isOpen && (
              <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to="/hajj-packages"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Hajj Package
                  </Link>
                  <Link
                    to="/umrah-packages"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Umrah Package
                  </Link>
                  <Link
                    to="/visa-process"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Visa Process
                  </Link>
                  <Link
                    to="/air-ticket"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Air Ticket
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/training"
            className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block lg:ps-5"
          >
            Hajj Training
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block"
          >
            Contact
          </Link>
          <Link className="background-color mx-auto ms-3 hover:bg-white hover:border hover:border-green-800 hover:text-green-800 text-white font-bold py-3 px-5 rounded-full text-center lg:mr-4 md:mr-2 mr-2 block lg:inline-block">
            Price Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
