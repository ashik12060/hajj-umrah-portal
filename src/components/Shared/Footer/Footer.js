import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 body-font">
      <div className="container mx-auto py-24 flex flex-col md:flex-row md:flex-nowrap flex-wrap">
        <div className="w-full md:w-1/4 flex flex-col md:ml-auto md:mr-auto lg:ml-20 lg:mr-20 p-4">
          <h2 className="text-white text-2xl font-medium title-font mb-2">Hena Travels and Tours</h2>
          <p className="mb-4">0000 Purana Paltan, Sultan Ahmed Plaza 00th Floor, Suite-1202, Dhaka-1000</p>
          <div className="flex title-font font-medium items-center mt-4">
            <span className="ml-3 text-lg">Follow Us</span>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a2 2 0 0 1-2 2v16l-4-4m-7 0l-4 4m7 0v-7a2 2 0 0 1 2-2h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5 9 5 9-5-9-5z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21.112 6.444L18 3M7.938 20.556L4 17M21.112 12L18 9M7.938 12L4 15M12 21l-7-7m7-7l7 7m7 0l-7-7m-7 7l-7-7"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <rect x="2" y="9" width="4" height="12"></rect>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">OTHERS SERVICES</h2>
            <nav className="list-none mb-10">
              <li><a href="#" className="text-gray-400 hover:text-white">Umrah Package</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hajj Package</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hajj Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">B2B</a></li>
            </nav>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">IMPORTANT LINKS</h2>
            <nav className="list-none mb-10">
              <li><a href="#" className="text-gray-400 hover:text-white">Ministry of Hajj, Bangladesh</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Civil Aviation Authority</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">ATAB</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">HAAB</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Ministry of Hajj, KSA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">NUSUK</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Umrah Visa Check</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Corporate IT Support - Green Software Technology</a></li>
            </nav>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">SAUDI OFFICE</h2>
            <nav className="list-none mb-10">
              <li><a href="#" className="text-gray-400 hover:text-white">Al Maarefa Road, North Al Aziziyah, Makkah, Kingdom of Saudi Arabia.</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">+966 0123456789, +0123456789</a></li>
            </nav>
          </div>
          <div className="w-full lg:w-1/2
           p-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Bangladesh OFFICE</h2>
            <nav className="list-none mb-10">
              <li><a href="#" className="text-gray-400 hover:text-white">123, Green Road, Kalabagan, Dhaka-1205</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">0123456789 0123456789</a></li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
