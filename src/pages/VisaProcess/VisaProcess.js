import React from "react";
import "./VisaProcess.css"; // Import your CSS file for custom styling
import coverImage from "../../images//airCarousel.jpg"; // Replace with your actual image path
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import { Link } from "react-router-dom";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const VisaProcess = () => {
  const requirements = [
    "Original passport",
    "SMART Card / NID Card",
    "Current and previous passports",
    "Two photographs",
    "Confirmation page of the online submitted Form DS-160",
    "Visa fees",
    "Original interview appointment letter and a copy",
  ];

  return (
    <div>
      <Header />
      <div className="pt-20 ">
      <div className="cover-photo-container">
        <img src={coverImage} alt="Cover" className="cover-image" />
        <div className="cover-text">
          <h1  className='text-4xl'>VISA PROCESSING</h1>
          <p  className='text-2xl'>Exclusive & Regular Umrah Packages from Bangladesh</p>
        </div>
      </div>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-color-custom container   mx-auto p-4">
        Easily Obtain a Saudi Arabian Visa from Bangladesh through the Ministry
        of Foreign Affairs (MoFA)
      </h1>
      <p className="text-xl container mx-auto  p-4">
        Our primary goal, especially for Hajj and Umrah pilgrimages, is to
        provide our customers with a spiritually, mentally, and physically
        fulfilling experience within their budget through affordable packages.
        To achieve this, we offer exceptional value in various services such as
        visa processing, travel arrangements, accommodation, and hotel bookings
        at the lowest possible rates. In our country, it's common for many
        pilgrims to miss their desired Hajj and Umrah timings due to a lack of
        proper procedures. There's no need to worry about your visa, as The Holy
        Hajj & Travel Agency is well-versed in applying for and securing
        hassle-free visas according to the latest regulations. These regulations
        stipulate that a visa is only granted once your Saudi accommodation and
        transportation arrangements are finalized. We are affiliated with the
        Ministry of Hajj and Umrah, Saudi Arabia, ensuring a smooth and
        efficient process.
      </p>

    
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-color-custom">Visa Requirements</h2>
        <ul className="list-disc pl-6 text-xl">
          {requirements.map((requirement, index) => (
            <li key={index} className="mb-2">
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-color-custom">How to Obtain Your MoFA Visa</h2>

      <ol className="list-decimal pl-6 text-xl  ">
        <li className="mb-4">
          Begin by applying online or booking your flight, transportation, and accommodation in Mecca and Medina. Payment must be made before departure.
        </li>
        <li className="mb-4">
          Our agents will submit your details, proof of payment, and itinerary to the Saudi Embassy for verification.
        </li>
        <li className="mb-4">
          Once satisfied, the Saudi Embassy typically issues a visa within 2 months.
        </li>
        <li className="mb-4">
          You will receive contact details for our agents in Mecca and Medina to ensure a safe journey.
        </li>
      </ol>

      <p className="mb-4 text-xl">
        For package details, simply send us a message, and we'll respond promptly, In Sha Allah.
      </p>

      <p className="mb-4 text-xl ">
        Please note that fields marked with (*) are mandatory.If traveling with family, you must enter and leave the Saudi Empire together.  For further information or assistance, feel free to contact us via phone or email.
      </p>

     

      <p className="mb-4 ">
        <i>We're committed to providing you with an exceptional Hajj experience this year. Reach out to us today to join the best Hajj group.</i>
      </p>

      <h2 className="text-2xl font-bold mb-4 text-color-custom">Checking Your MoFA Visa Status</h2>

      <p className="mb-4 text-xl ">
        If the status remains unchanged from your initial submission, please check again later. If you see a message in red, refer to the "Status meanings of family visit visa." To inquire about a visa issued by MoFA, enter the Visa Number, Iqama Number, and Captcha code on the website.
      </p>
    </div>
    <div className="text-center mb-10">
    <Link to='/contact' className="bg-green-800 hover:bg-green-800 text-white font-bold py-4 my-6 px-4 rounded mt-auto">Need Help <FontAwesomeIcon icon={faCircleQuestion} /></Link>
    
    </div>
    

<Footer />
    </div>
  );
};

export default VisaProcess;
