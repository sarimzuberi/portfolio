// src/components/Hero.js
import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hello, I'm <span className="gold-text">Sarim Ali Zuberi</span>
        </h1>
        <p>Computer Engineer | Full Stack Developer | Application Developer</p>
        <h2>
          Welcome to my Portfolio!
        </h2>        
        <Link to="/see-what-i-can-do-page" className="btn">See What I Can Do</Link>
      </motion.div>
    </section>
  );
};

export default Hero;
