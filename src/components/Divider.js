// src/components/Divider.js
import React from 'react';
import './divider.css'; // Import the CSS for the divider

const Divider = () => {
  return (
    <div className="decorative-divider">
      console.log("Checking if Divider is rendered");
      <div className="sparkle"></div>
    </div>
  );
};

export default Divider;
