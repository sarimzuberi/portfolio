import React from 'react';

import './AppDevelopment.css';
import './WebDevelopment.css';


const AppDevelopment = () => {
    return (
        <div id="app-development" className="web-development-section">
            console.log("Checking if App is rendered");
            <span className="gold-text">App Development</span>

            <p>I have extensive experience in mobile application development, with a deep understanding of both <strong>Android</strong> and <strong>iOS</strong> platforms. My expertise ranges from building native apps in <strong>Java</strong>, <strong>Kotlin</strong>, and <strong>Swift</strong>, to cross-platform applications using <strong>Flutter</strong>, providing the flexibility to develop for both platforms with a single codebase.</p>

            <p>I am highly proficient in <strong>Android Studio</strong> and <strong>Xcode</strong>, with a strong command over app deployment processes. Whether it's building, signing, and publishing apps on <strong>Google Play Store</strong> or following the meticulous steps required to publish on <strong>Apple’s App Store</strong>, I am well-versed in managing certificates, provisioning profiles, and ensuring compliance with store policies.</p>

            <p>From designing intuitive, user-friendly interfaces to optimizing app performance, I take pride in delivering seamless, polished mobile applications. Below are some tools and technologies I regularly use. I’m ready to bring my skills to your next project!</p>

            <div className="tech-icons">
                <a href="https://www.flaticon.com/free-icons/android" title="Android icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/android-os.png" alt="Android" />
                </a>
                <a href="https://www.flaticon.com/free-icons/apple" title="Apple icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/mac-os.png" alt="Apple iOS" />
                </a>
                <a href="https://www.flaticon.com/free-icons/swift" title="Swift icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/swift.png" alt="Swift" />
                </a>
                <a href="https://www.flaticon.com/free-icons/react" title="React Native icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React Native" />
                </a>
                <a href="https://www.flaticon.com/free-icons/java" title="Java icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java" />
                </a>
            </div>

        </div>
    );
};

export default AppDevelopment;
