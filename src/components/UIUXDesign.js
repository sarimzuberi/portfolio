import React from 'react';

import './UIUXDesign.css';
import './WebDevelopment.css';


const UIUXDesign = () => {
    return (
        <div id="uiux-design" className="web-development-section">
            <span className="gold-text">UI/UX Design</span>

            <p>I have extensive experience in UI/UX design, focusing on creating user-centered designs that enhance user experiences. My expertise encompasses a wide range of design processes, including:</p>

            <div className="skills-list">
                <p>Prototyping</p>
                <p>Wireframe diagrams</p>
                <p>User research and persona development</p>
                <p>Usability testing and analysis</p>
                <p>Interaction design</p>
                <p>Information architecture</p>
                <p>Visual design</p>
                <p>Design system creation</p>
            </div>

            <p>I am proficient in using industry-standard design tools such as <strong>Adobe XD</strong> and <strong>Figma</strong>, enabling me to create interactive prototypes and collaborate effectively with developers and stakeholders.</p>

            <div className="tech-icons">
                <a href="https://www.flaticon.com/free-icons/xd" title="xd icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/adobe-xd.png" alt="Adobe XD" />
                </a>
                <a href="https://www.flaticon.com/free-icons/figma" title="figma icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/figma.png" alt="Figma" />
                </a>
                <a href="https://www.flaticon.com/free-icons/sketch" title="sketch icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/?size=100&id=37iEIiYKRoDs&format=png&color=000000" alt="Sketch" />
                </a>
            </div>

        </div>
    );
};

export default UIUXDesign;
