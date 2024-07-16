import React from 'react';
import './PackageCover.css'; // Import your CSS file for custom styling
import coverImage from '../../images/cover.jpg'; // Replace with your actual image path

const PackageCover = () => {
  return (
    <div className="cover-photo-container">
      <img src={coverImage} alt="Cover" className="cover-image" />
      <div className="cover-text">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing experiences with us</p>
      </div>
    </div>
  );
};

export default PackageCover;
