import React, { useState } from 'react';
import ButtonDemo from './ButtonDemo';
import SliderDemo from './SliderDemo';
import CardDemo from './CardDemo';
import './WebDevelopment.css'; // Keep your existing styles

const WebDevelopment = () => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundColor: '#ffffff', // Default background color
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/random-grey-variations.png")',
  });

  // Define different background styles
  const backgrounds = {
    default: {
      backgroundColor: '#ffffff',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/random-grey-variations.png")',
    },
    plainWhite: { backgroundColor: '#ffffff', backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")' },
    plainBlack: { backgroundColor: '#000000', backgroundImage: '' },
    lightYellow: { backgroundColor: '#fef9c3', backgroundImage: '' },
    gradientDark: {
      backgroundColor: '',
      backgroundImage: 'linear-gradient(45deg, #2c3e50, #bdc3c7)',
    },
    gradientLight: {
      backgroundColor: '',
      backgroundImage: 'linear-gradient(45deg, #f0e68c, #fffacd)',
    },
    pattern1: {
      backgroundColor: '#000000',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/bright-squares.png")',
    },
    pattern2: {
      backgroundColor: '#ffffff',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-twill.png")',
    },
  };

  // Function to change the background style
  const changeBackground = (style) => {
    setBackgroundStyle(backgrounds[style]);
  };

  // Function to reset the background
  const resetBackground = () => {
    setBackgroundStyle(backgrounds.default);
  };

  return (
    <div id = "web-development" className="web-development-section" style={backgroundStyle}>
      <span className="gold-text">Web Development</span>

      <p>
        I specialize in creating dynamic and responsive web applications using modern technologies like HTML, CSS, JavaScript, and frameworks like React and Angular. Below are tools that I have practiced and experienced and have quite a good hand in these. 
        Few implementations of buttons, sliders, swipers, and cards to showcase WHAT I CAN DO, but this is not limited. I have more skills to implement, and to see them you have to hire me!
      </p>

      <div className="tech-icons">
        <a href="https://www.flaticon.com/free-icons/html-5" title="HTML 5" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5" />
        </a>

        <a href="https://www.flaticon.com/free-icons/css-3" title="CSS 3" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" />
        </a>

        <a href="https://www.flaticon.com/free-icons/javascript" title="JavaScript" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />
        </a>

        <a href="https://www.flaticon.com/free-icons/react" title="React" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
        </a>

        <a href="https://www.flaticon.com/free-icons/wordpress" title="Wordpress" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/wordpress.png" alt="Wordpress" />
        </a>
      </div>

      {/* Button Implementations */}
      <div className="section-implementation">
        <h3>Button Implementations</h3>
        <ButtonDemo />
      </div>

      {/* Slider Implementations */}
      <div className="section-implementation">
        <h3>Slider Implementations</h3>
        <SliderDemo />
      </div>

      {/* Card Implementations */}
      <div className="section-implementation">
        <h3>Card Implementations</h3>
        <CardDemo />
      </div>

      {/* Background Change Section */}
      <div className="section-implementation">
        <h3>Change Background</h3>
        <div className="button-group">
          <button onClick={() => changeBackground('plainWhite')}>Plain White</button>
          <button onClick={() => changeBackground('plainBlack')}>Plain Black</button>
          <button onClick={() => changeBackground('lightYellow')}>Yellow Patterns</button>
        </div>

        <div className="button-group-one">
          <button onClick={() => changeBackground('gradientDark')}>Dark Gradient</button>
          <button onClick={() => changeBackground('gradientLight')}>Light Gradient</button>
        </div>

        <div className="button-group-two">
          <button onClick={() => changeBackground('pattern1')}>Pattern 1</button>
          <button onClick={() => changeBackground('pattern2')}>Pattern 2</button>
        </div>

        <div className="button-group">
          <button onClick={resetBackground} className="reset-button">Reset to Default</button>
        </div>
      </div>


    </div>
  );
};

export default WebDevelopment;
