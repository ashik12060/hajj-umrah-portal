import React from "react";
import "./CardGrid.css";
import cardImage1 from "../../images/hajj.jpg"; 
import cardImage2 from "../../images/umrah.jpg"; 
import cardImage3 from "../../images/visa.jpg"; 
import cardImage4 from "../../images/air-ticket.jpg"; 
import { Link } from "react-router-dom";

const CardGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <div className="card">
            <img src={cardImage1} alt="Hajj Package Image" className="card-image" />
            <div className="card-text">
              <Link to='/hajj-packages' className="text-2xl" >Hajj Packages</Link>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <div className="card">
            <img src={cardImage2} alt="Umrah Package Image" className="card-image" />
            <div className="card-text">
              <Link to='/umrah-packages' className="text-2xl" >Umrah Packages</Link>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <div className="card">
            <img src={cardImage3} alt="Visa Process Image" className="card-image" />
            <div className="card-text">
              <Link to='/visa-process' className="text-2xl" >Visa Process</Link>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <div className="card">
            <img src={cardImage4} alt="Air Ticket Image" className="card-image" />
            <div className="card-text">
              <Link to='/air-ticket' className="text-2xl" >Air Ticket</Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CardGrid;
