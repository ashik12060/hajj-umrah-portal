import React from 'react';
import './PackageCover.css'; // Import your CSS file for custom styling
import coverImage from '../../images/Hajj-carousel.jpg'; // Replace with your actual image path

const PackageCover = () => {
  return (
    <div className="cover-photo-container">
      <img src={coverImage} alt="Cover" className="cover-image" />
      <div className="cover-text">
        <h1 className='text-4xl'>Welcome to Hajj Portal</h1>
        <p className='text-2xl'>Discover amazing experiences with us</p>
      </div>
    </div>
  );
};

export default PackageCover;
