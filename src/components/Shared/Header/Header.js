import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center w-full lg:w-auto">
          <h1 className="ml-4 text-2xl lg:text-3xl md:text-xl font-bold">ZAM ZAM</h1>
        </div>

   
        <div className="lg:hidden md:hidden flex w-full justify-end  me-5">
          <button onClick={toggleMenu} className="text-gray-600  hover:text-gray-900">
            <svg className="w-6 h-6 border" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav className={`lg:flex md:flex ${isMenuOpen ? 'block' : 'hidden'} flex-wrap justify-center items-center w-full lg:w-auto`}>
          <a href="/" className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block">Home</a>
          <a href="/hajj" className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block">Hajj Packages</a>
          <a href="/umrah" className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block">Umrah Packages</a>
          <a href="/services" className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block">Services</a>
          <a href="/training" className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block">Hajj Training</a>
         
          <a href="/contact" className="text-gray-600 hover:text-gray-900 font-medium lg:mr-6 md:mr-4 mr-2 block lg:inline-block">Contact</a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded lg:mr-4 md:mr-2 mr-2 block lg:inline-block">Get Free Estimate</button>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;

