import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Using HashRouter for GitHub Pages
import SeeWhatICanDo from './components/SeeWhatICanDo'; 
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVAndCertificates from './components/Docs';
import Divider from './components/Divider';

function App() {
  console.log("App is rendering");

  // Log the current environment and basename
  const basename = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  console.log("Basename is set to:", basename);

  return (
    <Router basename={basename}>
      <div>
        {/* Log for checking Routes */}
        {console.log("Routes are being rendered")}

        <Routes>
          {/* Main Portfolio Page */}
          <Route
            path="/"
            element={
              <>
                {console.log("Rendering Main Portfolio Page")}
                <Navbar />
                <div id="home">
                  {console.log("Rendering Hero component")}
                  <Hero />
                </div>
                <Divider />
                <div id="about">
                  {console.log("Rendering About component")}
                  <About />
                </div>
                <Divider />
                <div id="skills">
                  {console.log("Rendering Skills component")}
                  <Skills />
                </div>
                <Divider />
                <div id="projects">
                  {console.log("Rendering Projects component")}
                  <Projects />
                </div>
                <Divider />
                <div id="cv-certificates">
                  {console.log("Rendering CV and Certificates component")}
                  <CVAndCertificates />
                </div>
                <Divider />
                <div id="contact">
                  {console.log("Rendering Contact component")}
                  <Contact />
                </div>
                <Divider />
                <Footer />
              </>
            }
          />
          
          {/* See What I Can Do Page */}
          <Route 
            path="/see-what-i-can-do-page" 
            element={
              <>
                {console.log("Rendering See What I Can Do Page")}
                <SeeWhatICanDo />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
