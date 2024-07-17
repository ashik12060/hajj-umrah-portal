import {
  faFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SmallHeader from "../../components/Shared/Header/SmallHeader";
import Header from "../../components/Shared/Header/Header";
import img from "../../images/cover.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, e.g., sending data to a server.
    console.log("Form submitted:", formData);
  };
  return (
    <div>
        <div>
      
        <div class="text-center my-8">
        <span className="bg-orange-500 text-white px-4 py-2 text-2xl rounded  ">Contact Us</span>
      </div>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <img className="w-full rounded" src={img} alt="Contact" />
          </div>
          <div className="w-full lg:w-1/2 p-4 lg:ps-20">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded lg:mr-4 md:mr-2 mr-2 block lg:inline-block"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              
            </form>
            
            
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ContactPage;
