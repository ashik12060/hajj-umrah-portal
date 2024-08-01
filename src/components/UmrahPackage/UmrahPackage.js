import React from "react";
import "./UmrahPackage.css";
import umrah1 from "../../images/umrah.jpeg";
import umrah2 from "../../images/umrah.jpg";
import umrah3 from "../../images/umrah2.jpeg";
import umrah4 from "../../images/umrah3.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const UmrahPackage = () => {
  return (
    <>
    
    <div className="container mx-auto p-2">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white rounded-lg border shadow-md flex flex-col h-full">
            <img
              src={umrah1}
              alt="Umrah Package Image"
              className="w-full border  h-52 rounded-t-lg"
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
                to='/contact'
                className="bg-green-800 hover:bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                Send Query →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white rounded-lg border shadow-md flex flex-col h-full">
            <img
              src={umrah2}
              alt="Umrah Package Image"
              className="w-full border  h-52 rounded-t-lg"
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
                to='/contact'
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                Send Query →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white rounded-lg border shadow-md flex flex-col h-full">
            <img
              src={umrah3}
              alt="Umrah Package Image"
              className="w-full border  h-52 rounded-t-lg"
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
                to='/contact'
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                Send Query →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white rounded-lg border shadow-md flex flex-col h-full">
            <img
              src={umrah4}
              alt="Umrah Package Image"
              className="w-full border  h-52 rounded-t-lg"
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
                to='/contact'
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                Send Query →
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
