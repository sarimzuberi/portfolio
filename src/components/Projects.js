// src/components/TopProjects.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactCardFlip from 'react-card-flip'; // Import the card flip library
import './Projects.css'; // Your CSS for the project cards

const ProjectCard = ({ title, pdfLink }) => {
  const [isFlipped, setIsFlipped] = React.useState(false); // State for flipping the card

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // Toggle the flipped state
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="project-card" onClick={handleCardClick}>
        <h3>{title}</h3>
      </div>

      <div className="project-card-back" onClick={handleCardClick}>
        <button onClick={() => window.open(pdfLink, '_blank')}>View My Work</button>
      </div>
    </ReactCardFlip>
  );
};

const Projects = () => {
  const projects = [
    { title: 'Mobile Applications', pdfLink: '/path/to/mobile-applications.pdf' },
    { title: 'Web Development', pdfLink: '/path/to/web-development.pdf' },
    { title: 'UI/UX Design', pdfLink: '/path/to/ui-ux-design.pdf' },
    { title: 'Desktop Applications', pdfLink: '/path/to/desktop-applications.pdf' },
    { title: 'Artificial Intelligence', pdfLink: '/path/to/artificial-intelligence.pdf' },
  ];

  return (
    <div className="top-projects">
      <h2>Top Projects</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.5} // Default for mobile
        breakpoints={{
          640: { slidesPerView: 1.5 }, // For small tablets
          1024: { slidesPerView: 2.5 }, // For desktops
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard title={project.title} pdfLink={project.pdfLink} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
