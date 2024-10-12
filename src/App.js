import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
  const basename = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <Router basename={basename}> {/* Set the basename here */}
      <div>
        <Routes>
          {/* Main Portfolio Page */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div id="home">
                  <Hero />
                </div>
                <Divider />
                <div id="about">
                  <About />
                </div>
                <Divider />
                <div id="skills">
                  <Skills />
                </div>
                <Divider />
                <div id="projects">
                  <Projects />
                </div>
                <Divider />
                <div id="cv-certificates">
                  <CVAndCertificates />
                </div>
                <Divider />
                <div id="contact">
                  <Contact />
                </div>
                <Divider />
                <Footer />
              </>
            }
          />
          
          {/* See What I Can Do Page */}
          <Route path="/see-what-i-can-do-page" element={<SeeWhatICanDo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
