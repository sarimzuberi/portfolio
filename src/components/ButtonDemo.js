import React, { useState } from 'react';
import './ButtonDemo.css';

// Import your icons
import icon1On from '../assets/power-on.png'; // Replace with your actual image path
import icon1Off from '../assets/power-button.png'; // Replace with your actual image path
import icon2Happy from '../assets/happiness.png'; // Replace with your actual image path
import icon2Sad from '../assets/sad.png'; // Replace with your actual image path
import icon3Retail from '../assets/open.png'; // Replace with your actual image path
import icon3Open from '../assets/closed.png'; // Replace with your actual image path
import icon4Spiderman from '../assets/marvel.png'; // Replace with your actual image path
import icon4BlackSpiderman from '../assets/spider.png'; // Replace with your actual image path

const ButtonDemo = () => {
  const [loading, setLoading] = useState(false);
  const [currentIcons, setCurrentIcons] = useState([
    { img: icon1Off, imgOn: icon1On, label: 'On/Off', isOn: false },
    { img: icon2Sad, imgOn: icon2Happy, label: 'Happy/Sad', isOn: false },
    { img: icon3Open, imgOn: icon3Retail, label: 'Retail/Open', isOn: false },
    { img: icon4BlackSpiderman, imgOn: icon4Spiderman, label: 'Spiderman', isOn: false },
  ]);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading time of 2 seconds
  };

  // Function to toggle specific icons on click
  const handleIconClick = (index) => {
    setCurrentIcons((prevIcons) =>
      prevIcons.map((icon, i) =>
        i === index ? { ...icon, isOn: !icon.isOn } : icon
      )
    );
  };

  return (
    <div className="button-demo">
      console.log("Checking if Button is rendered");
      {/* Color Button Set */}
      <div className="button-set color-set">
        <button className="primary-button" onClick={handleLoadingClick}>
          {loading ? 'Loading...' : 'Confirm'}
        </button>
        <button className="secondary-button">Cancel</button>
        <button className="outlined-button">View Details</button>
        <button className="submit-button">Submit</button>
      </div>

      {/* Gradient Button Set */}
      <div className="button-set gradient-set">
        <button className="gradient-primary-button">Confirm</button>
        <button className="gradient-secondary-button">Cancel</button>
        <button className="gradient-outlined-button">View Details</button>
        <button className="gradient-submit-button">Submit</button>
      </div>

      {/* Icon Buttons Set */}
      <div className="button-set icon-set">
        {currentIcons.map((icon, index) => (
          <button
            key={index}
            className="icon-button"
            onClick={() => handleIconClick(index)}
          >
            <img
              src={icon.isOn ? icon.imgOn : icon.img}
              alt={icon.label}
              //style={{ width: '100px', height: '100px' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonDemo;
