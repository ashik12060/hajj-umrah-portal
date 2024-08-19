import React from 'react';
import contactCover from '../../images/aboutUs.jpg';

const ContactCover = () => {
  return (
    <div className="pt-20">
      <div className="relative w-full h-96 sm:h-[120px] md:h-[250px] lg:h-[300px]">
        <img src={contactCover} alt="Cover" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">কন্টাক্ট পোর্টাল </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">আপনার হজ ও ওমরাহ তদন্ত অপেক্ষা করছে</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCover;
