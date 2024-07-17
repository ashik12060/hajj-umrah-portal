import React from 'react';
import './UmrahPackageCover.css'; // Import your CSS file for custom styling
import coverImage from '../../images/cover.jpg'; // Replace with your actual image path

const UmrahPackageCover = () => {
  return (
    <div className="cover-photo-container">
      <img src={coverImage} alt="Cover" className="cover-image" />
      <div className="cover-text">
        <h1>Best Umrah Packages in BD for 2024-2025</h1>
        <p>Exclusive & Regular Umrah Packages from Bangladesh
        </p>
      </div>
    </div>
  );
};

export default UmrahPackageCover;
