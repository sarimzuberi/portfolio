import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // This gives the current URL

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {/* Render Links based on the current page */}
        {location.pathname === '/see-what-i-can-do-page' ? (
          <>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><Link to="web-development" smooth={true} duration={500}>Web Development</Link></li>
            <li><Link to="app-development" smooth={true} duration={500}>App Development</Link></li>
            <li><Link to="uiux-design" smooth={true} duration={500}>UI/UX Design</Link></li>
            <li><Link to="artificial-intelligence" smooth={true} duration={500}>Artificial Intelligence</Link></li>
            <li><Link to="api-demo" smooth={true} duration={500}>API</Link></li>
          </>
        ) : (
          <>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="cv-certificates" smooth={true} duration={500}>CV & Certificates</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;







// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
// import './Navbar.css';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h1>My Portfolio</h1>
//       </div>
//       <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//         <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
//         <li><Link to="about" smooth={true} duration={500}>About</Link></li>
//         <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
//         <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
//         <li><Link to="cv-certificates" smooth={true} duration={500}>CV & Certificates</Link></li>
//         <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
