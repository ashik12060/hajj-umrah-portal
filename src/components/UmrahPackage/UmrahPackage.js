import React from "react";
import "./UmrahPackage.css";
import cardImage1 from "../../images/cover.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const UmrahPackage = () => {
  return (
    <>
    
    <div className="container mx-auto p-2">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
            <img
              src={cardImage1}
              alt="Umrah Package Image"
              className="w-full rounded-t-lg"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                Regular Umrah Package A
              </h3>
              <p className="text-gray-600 text-sm my-4">
                Explore the spiritual journey with our Regular Umrah Package,
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
          <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
            <img
              src={cardImage1}
              alt="Umrah Package Image"
              className="w-full rounded-t-lg"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                Regular Umrah Package B
              </h3>
              <p className="text-gray-600 text-sm my-4">
                Explore the spiritual journey with our Regular Umrah Package,
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
          <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
            <img
              src={cardImage1}
              alt="Umrah Package Image"
              className="w-full rounded-t-lg"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                Regular Umrah Package C
              </h3>
              <p className="text-gray-600 text-sm my-4">
                Explore the spiritual journey with our Regular Umrah Package,
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
          <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
            <img
              src={cardImage1}
              alt="Umrah Package Image"
              className="w-full rounded-t-lg"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                Regular Umrah Package D
              </h3>
              <p className="text-gray-600 text-sm my-4">
                Explore the spiritual journey with our Regular Umrah Package,
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
      
    </>
  );
};

export default UmrahPackage;
