import {
  faFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../../components/Shared/Header/Header";
import img from "../../images/contact.jpg";

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
          <span className="px-4 py-2 text-4xl font-bold rounded  ">
            যোগাযোগ করুণ 
          </span>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <img className="w-full rounded px-20" src={img} alt="Contact" />
          </div>
          <div className="w-full lg:w-1/2 pt-4 lg:ps-20">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-200 shadow-md rounded px-4 pt-6 pb-8 mb-4"
            >
              <p className="text-xl mb-4 font-bold">
              একটি বিস্তারিত প্রশ্ন প্রদান করুন
              </p>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullName"
                >
                  পুরো নাম 
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
                  ইমেইল 
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
                  ফোন 
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
                  ম্যাসেজ 
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
                  className=" bg-green-800 hover:bg-white  border hover:border-green-800 hover:text-green-800 text-white font-bold py-2 px-10 rounded-full text-center mt-4"
                  type="submit"
                >
                  সাবমিট 
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
