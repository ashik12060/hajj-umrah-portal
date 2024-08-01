

import React from "react";
import "./Packages.css";
import hajj1 from "../../images/hajj1.jpeg";
import hajj2 from "../../images/hajj2.jp3.jpg";
import hajj3 from "../../images/hajj2.jpg";
import hajj4 from "../../images/hajj.jpg";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white border rounded-lg shadow-md flex flex-col h-full">
            <img
              src={hajj1}
              alt="Hajj Package Image"
              className="w-full h-52 rounded-t-lg border"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                Regular Hajj Package A
              </h3>
              <p className="text-gray-600 text-sm my-4">
                Explore the spiritual journey with our Regular Hajj Package,
                offering 35-40 days of comprehensive services, including
                Economy to Standard hotel stays, starting at BDT 600,000 for a
                fulfilling pilgrimage.
              </p>
              <Link
                to='/'
                className="bg-green-800 hover:bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white rounded-lg border shadow-md flex flex-col h-full">
            <img
              src={hajj2}
              alt="Hajj Package Image"
              className="w-full h-52 rounded-t-lg border"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                Regular Hajj Package B
              </h3>
              <p className="text-gray-600 text-sm my-4">
                Explore the spiritual journey with our Regular Hajj Package,
                offering 35-40 days of comprehensive services, including
                Economy to Standard hotel stays, starting at BDT 600,000 for a
                fulfilling pilgrimage.
              </p>
              <Link
                to='/'
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white border rounded-lg shadow-md flex flex-col h-full">
            <img
              src={hajj3}
              alt="Hajj Package Image"
              className="w-full h-52 rounded-t-lg border"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                Regular Hajj Package C
              </h3>
              <p className="text-gray-600 text-sm my-4">
                Explore the spiritual journey with our Regular Hajj Package,
                offering 35-40 days of comprehensive services, including
                Economy to Standard hotel stays, starting at BDT 600,000 for a
                fulfilling pilgrimage.
              </p>
              <Link
                to='/'
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white border rounded-lg shadow-md flex flex-col h-full">
            <img
              src={hajj4}
              alt="Hajj Package Image"
              className="w-full h-52 rounded-t-lg border"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                Regular Hajj Package D
              </h3>
              <p className="text-gray-600 text-sm my-4">
                Explore the spiritual journey with our Regular Hajj Package,
                offering 35-40 days of comprehensive services, including
                Economy to Standard hotel stays, starting at BDT 600,000 for a
                fulfilling pilgrimage.
              </p>
              <Link
                to='/'
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
