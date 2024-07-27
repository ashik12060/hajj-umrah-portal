import React from "react";
import "./AirTicket.css";
import coverImage from "../../images/cover.jpg";
import AirTicketBuy from "../../images/ait ticket buy.jpg";

import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import { Link } from "react-router-dom";
import ContacatInfo from "../../components/ContactPage/ContacatInfo";
const AirTicket = () => {
  return (
    <div>
      <Header />
      <div className="pt-20">
      <div className="cover-photo-container ">
        <img src={coverImage} alt="Cover" className="cover-image" />
        <div className="cover-text">
          <h1>AIR TICKET</h1>
          <p>Exclusive & Regular Umrah Packages from Bangladesh</p>
        </div>
      </div>
      </div>

      <div>
        
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-10 lg:p-20 ">
            <h1 className="text-3xl font-bold mb-4 text-color-custom container mx-auto p-4">
              Affordable Air Ticket Booking for Pilgrims from Bangladesh
            </h1>
            <p className="container mx-auto ps-4 text-justify mb-6">
              Seeking affordable Hajj and Umrah air tickets for pilgrims from
              Bangladesh? Noor Hajj BD, an award-winning Hajj agency based in
              Dhaka, is your ideal choice. We offer a variety of packages to
              suit different budgets and preferences. <br />
              Recognizing that a pilgrimage is a once-in-a-lifetime journey, we
              are committed to making it accessible for everyone. Our dedicated
              team ensures the best travel experience by providing the cheapest
              air tickets for pilgrims traveling to Mecca and Medina.
            </p>
            <Link className="background-color ms-3 hover:bg-white border hover:border hover:border-green-800 hover:text-green-800 text-white font-bold py-4 px-5 rounded-full text-center mt-4">Price Estimate</Link>
          </div>
     
            <div className="w-full lg:w-1/2 lg:p-20 p-10">
            <img className="w-full rounded" src={AirTicketBuy} alt="Contact" />
          </div>
      
          </div>
       
      </div>

      <h2 className="text-2xl font-bold mb-4 text-color-custom container mx-auto p-4">
        Your Essential Guide to Purchasing Air Tickets from Bangladesh
      </h2>
      <p className="text-xl container mx-auto p-4 text-justify">
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

      <p className="text-xl container mx-auto p-4 text-justify">
        Discover the most convenient and efficient way to book your air tickets
        from Bangladesh with our expert advice. At Zamzam Travels BD, we excel
        in offering the best airfare deals and a wide range of flight options to
        match your preferences and budget. Whether you're organizing a business
        trip, family vacation, or solo adventure, we ensure a smooth booking
        experience from the heart of Bangladesh to destinations worldwide.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-color-custom container mx-auto p-4">
        Why Choose Us for Your Air Tickets from Bangladesh?
      </h2>

      <h4 className="text-xl font-bold  text-color-custom container mx-auto p-4">
        Extensive Airline Selection:
      </h4>
      <p className="text-xl container mx-auto p-4 text-justify">
        Our partnerships with numerous airlines allow us to offer a vast
        selection of flights connecting Bangladesh to the world. From luxury
        carriers to budget options, find the ideal flight for your journey.
      </p>

      <h4 className="text-xl font-bold  text-color-custom container mx-auto p-4">
        Competitive Prices:
      </h4>
      <p className="text-xl container mx-auto p-4 text-justify">
        Thanks to our extensive network, we provide competitive pricing for all
        air tickets from Bangladesh. Enjoy the best deals and exclusive
        discounts without sacrificing quality or convenience.
      </p>

      <h4 className="text-xl font-bold  text-color-custom container mx-auto p-4">
        Personalized Travel Solutions:
      </h4>
      <p className="text-xl container mx-auto p-4 text-justify">
        We understand that every traveler has unique needs. Our team works hard
        to offer tailored travel solutions, ensuring your flight preferences,
        seating arrangements, and special requests are thoroughly accommodated.
      </p>

      <h4 className="text-xl font-bold  text-color-custom container mx-auto p-4">
        Effortless Booking Experience:
      </h4>
      <p className="text-xl container mx-auto p-4 text-justify">
        With our user-friendly website and dedicated customer service team,
        booking your air tickets from Bangladesh is a breeze. Enjoy a
        hassle-free experience with secure payment options and immediate
        confirmation.
      </p>
      <h4 className="text-xl font-bold  text-color-custom container mx-auto p-4">
        Comprehensive Travel Services:
      </h4>
      <p className="text-xl container mx-auto p-4 text-justify">
        In addition to air ticketing, we offer a full range of travel services,
        including Hajj and Umrah packages, tour packages, and visa assistance.
        Let us be your all-in-one travel companion.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-color-custom container mx-auto p-4">
        Optimizing Your Air Travel from Bangladesh
      </h2>

      <p className="text-xl container mx-auto p-4 text-justify">
        To ensure the best travel experience from Bangladesh, consider booking
        in advance to secure the lowest fares. Keep an eye on our website for
        ongoing promotions and last-minute deals. For added convenience,
        subscribe to our newsletter for updates directly to your inbox.
        <br />
        Start your next journey with confidence and ease with Zamzam Travels BD,
        your trusted partner for air tickets from Bangladesh. Contact our
        ticketing experts to explore your options and start planning your trip
        today. Safe travels, and we look forward to seeing you on board soon!
      </p>

      <ContacatInfo/>
      <Footer />
    </div>
  );
};

export default AirTicket;
