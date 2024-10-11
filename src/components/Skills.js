import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeBox, setActiveBox] = useState(null);

  const skillsData = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Java', 'Python', 'TypeScript', 'Swift'],
      levels: [90, 85, 90, 85, 70],
    },
    {
      category: 'Front-end',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'React', 'Vue.js'],
      levels: [90, 90, 90, 85, 70],
    },
    {
      category: 'Back-end',
      skills: ['Node.js', 'Django', 'Flask', 'Spring Boot', 'MongoDB'],
      levels: [90, 75, 80, 70, 80],
    },
  ];

  const toggleBox = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((data, index) => (
          <div
            key={index}
            className={`skill-box ${activeBox === index ? 'active' : ''}`}
            onClick={() => toggleBox(index)}
          >
            <h3>{data.category}</h3>
            <div className="icons-container">{/* Add icons here */}</div>
            {activeBox === index && (
              <div className="skills-bars">
                {data.skills.map((skill, i) => (
                  <div key={i} className="skill-bar-container">
                    <span>{skill}</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: `${data.levels[i]}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
