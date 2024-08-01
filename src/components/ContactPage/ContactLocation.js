import {
  faFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faTurnDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactLocation = () => {
  return (
    <div className="p-4 mt-20">
      
      <div class="text-center">
        <span className="px-4 py-2 text-4xl font-bold rounded">Our Location</span>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-4">
          <span className="text-xl px-1 py-1  bg-orange-500 text-white rounded">
            Find Us Here <FontAwesomeIcon icon={faTurnDown} />
          </span>
          <div className="mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7303.831543288367!2d90.38820734909278!3d23.750382824454782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1721218714100!5m2!1sen!2sbd"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:ps-20 ">
          <div className=" min-h-screen py-8">
            <div className="container mx-auto px-4">
              <div className="bg-slate-100 rounded-lg shadow-md p-6 py-6">
                <h2 className="text-2xl font-bold mb-6">Corporate Office</h2>
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon
                    className="text-2xl pe-4"
                    icon={faLocationDot}
                  />
                  <p className="ml-2">
                    32, Purana Paltan, Sultan Ahmad Plaza, (East side Of Paltan
                    Mosque), 11th Floor (Suite-1202), Dhaka-1000
                  </p>
                </div>
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon className="text-2xl pe-4" icon={faPhone} />
                  <p className="ml-2">+88017-33391826, +88017-05401060</p>
                </div>
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon
                    className="text-2xl pe-4"
                    icon={faEnvelope}
                  />
                  <p className="ml-2">info@something.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start ps-4 mt-8">
              <p className="text-gray-700 text-medium font-bold">
                Connect our social networks
              </p>
              <a
                href="#"
                className="ml-4 text-gray-700 hover:text-blue-500 text-2xl"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
                className="ml-4 text-gray-700 hover:text-blue-500 text-2xl"
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a
                href="#"
                className="ml-4 text-gray-700 hover:text-blue-500 text-2xl"
              >
                <FontAwesomeIcon icon={faSquareTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
