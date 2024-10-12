// // src/components/About.js
// import React from 'react';
// import './About.css';
// import myImage from '../assets/my-image.png'; // Adjust the path to your image

// const About = () => {
//   return (
//     <section id="about" className="about">
//       <h2>About Me</h2>
//       <div className="about-content">
//         <div className="image-container">
//           <img src={myImage} alt="Sarim Zuberi" className="about-image" />
//         </div>
//         <p>
//           I'm an experienced and versatile Computer Engineer with a strong background in full-stack 
//           development, mobile application development, software development, software testing, and 
//           UI/UX design. Proven track record in leading development projects, enhancing user 
//           experiences, and implementing innovative solutions using a range of technologies. Adept at 
//           collaborating with cross-functional teams and delivering high-quality results on time.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;



// src/components/About.js
import React from 'react';
import './About.css';
import myImage from '../assets/my-image.png'; // Adjust the path to your image

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      console.log("Checking if About is rendered");
      <div className="keywords">
        <span>Hardworking</span>
        <span>Punctual</span>
        <span>Responsible</span>
        <span>Creative</span>
        <span>Team Player</span>
        {/* Add more keywords as needed */}
      </div>
      <div className="about-content">
        <div className="image-container">
          <img src={myImage} alt="About Me" className="about-image" />
        </div>
        <p>
          I'm an Experienced and versatile Computer Engineer with a strong background in full-stack 
          development, mobile application development, software development, software testing, and 
          UI/UX design. Proven track record in leading development projects, enhancing user 
          experiences, and implementing innovative solutions using a range of technologies. Adept at 
          collaborating with cross-functional teams and delivering high-quality results on time.
        </p>
      </div>
    </section>
  );
};

export default About;
