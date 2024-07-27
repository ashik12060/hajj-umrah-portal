import React from "react";
import aboutImg from "../../images/cover.jpg";

const AboutUsPage = () => {
  return (
    <div>
      <div className=" lg:p-32 rounded-lg shadow-lg flex lg:flex-row md-flex-row  sm:flex-col flex-col ">
        <div className="bg-white p-6 rounded-lg w-100">
          <h2 className="text-3xl font-bold mb-4">
            Award Winning Hajj Agency in Dhaka, Bangladesh
          </h2>
          <p className="text-lg mb-4">
            Noor Hajj & Umrah Bangladesh has different types of umrah packages
            like as Standard, Regular and Premium Hajj & Umrah packages. We are
            an award-winning agency, deals with Hajj & Umrah pilgrims with
            professionalism and fulfills all the promises attached to every
            package following the axiom of The Quran & Sunnah. We carry out our
            commitment with the help of a responsible & honest management team.
          </p>
          <p className="text-lg mb-4">
            Our professional experts will assist you to get the Visa within the
            possible short time. Noor Hajj & Umrah arranges for every type of
            accommodation in hotels around Mecca city.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Read More About Us
          </button>
        </div>
        <div className="mt-4 p-6">
          <img src={aboutImg}  alt="Mecca" className="rounded-lg h-4/5 w-100 shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
