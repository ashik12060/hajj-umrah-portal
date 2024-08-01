import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContacatInfo = () => {
  return (
    <>
      <div className="bg-gray-800 text-white p-8 text-center">
      <span><FontAwesomeIcon className="text-3xl text-orange-500" icon={faCircleNodes} /></span>
        <h1 className="text-4xl font-bold mb-4">
          Contact Hena Travels and Tours!
        </h1>
        
        <p className="text-lg mb-8">
          Have an Idea or a Project, Let's Collaborate and Build Some Awesome
          Stuff
        </p>
       
        <div className="flex justify-center gap-8">
          <a href="mailto:someone@example.com" className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <span className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              CONTACT US
            </span>
          </a>
          <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <span className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 00-5.516 5.517l-1.13-2.257a1 1 0 01-1.21-.502l4.493-1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.28a2 2 0 01-2-2V7z"
                />
              </svg>
              +8801317424004
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContacatInfo;
