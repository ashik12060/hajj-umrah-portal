import React from 'react';
import './UmrahPackageCover.css'; 
import coverImage from '../../images/umrah-carousel.jpg'; 

const UmrahPackageCover = () => {
  return (
    <div className="cover-photo-container">
      <img src={coverImage} alt="Cover" className="cover-image" />
      <div className="cover-text">
        <h1  className='text-4xl'>Welcome to Umrah Portal</h1>
        <p className='text-2xl'>Exclusive & Regular Umrah Packages from Bangladesh
        </p>
      </div>
    </div>
  );
};

export default UmrahPackageCover;
