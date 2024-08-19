import React from 'react';
import './PackageCover.css'; // Import your CSS file for custom styling
import coverImage from '../../images/Hajj-carousel.jpg'; // Replace with your actual image path

const PackageCover = () => {
  return (
    <div className="cover-photo-container">
      <img src={coverImage} alt="Cover" className="cover-image" />
      <div className="cover-text">
        <h1 className='text-4xl'>হজ পোর্টালে স্বাগতম</h1>
        <p className='text-2xl'>আমাদের সাথে আশ্চর্যজনক অভিজ্ঞতা আবিষ্কার করুন</p>
      </div>
    </div>
  );
};

export default PackageCover;
