import React from 'react';
import './UmrahPackageCover.css'; 
import coverImage from '../../images/umrah-carousel.jpg'; 

const UmrahPackageCover = () => {
  return (
    <div className="cover-photo-container">
      <img src={coverImage} alt="Cover" className="cover-image" />
      <div className="cover-text">
        <h1  className='text-4xl'>
        ওমরাহ পোর্টালে স্বাগতম</h1>
        <p className='text-2xl'>বাংলাদেশ থেকে এক্সক্লুসিভ এবং নিয়মিত ওমরাহ প্যাকেজ
        </p>
      </div>
    </div>
  );
};

export default UmrahPackageCover;
