import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Divider from '../components/Divider';
import WebDevelopment from '../components/WebDevelopment';
import AppDevelopment from '../components/AppDevelopment';
import UIUXDesign from '../components/UIUXDesign';
import ArtificialIntelligence from '../components/ArtificialIntelligence';
import APIDemo from '../components/APIDemo';
import './SeeWhatICanDo.css';

const SeeWhatICanDo = () => {

  // Smooth scrolling function
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="see-what-i-can-do-page">
      {/* Navigation Bar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section className="villain">
        <motion.div
            className="villain-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <span className="gold-text">What I Can Do</span>
            <h1>
            Ready To Know? 
            </h1>
            <p>Lets explore the variety of skills and implementations I bring to the table</p>
            <h2>
            Here we go!
            </h2> 
        </motion.div>  
      </section>

      <Divider />

      {/* Web Development Section */}
      <section id="web-development-section" className="section-container">
        <WebDevelopment />
      </section>

      <Divider />

      {/* App Development Section */}
      <section id="app-development-section" className="section-container">
        <AppDevelopment />
      </section>

      <Divider />

      {/* UI/UX Design Section */}
      <section id="uiux-design-section" className="section-container">
        <UIUXDesign />
      </section>

      <Divider /> 

      {/* Artificial Intelligence Section */}
      <section id="artificial-intelligence" className="section-container">
        <ArtificialIntelligence />
      </section>

      <Divider /> 

      {/* API Section */}
      <section id="artificial-intelligence" className="section-container">
        <APIDemo />
      </section>

      <Divider /> 
      




    </div>
  );
};

export default SeeWhatICanDo;
