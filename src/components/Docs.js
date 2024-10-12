// src/components/Docs.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Basic Swiper styles
import 'swiper/css/pagination'; // Pagination styles
import { Pagination } from 'swiper/modules'; // Import pagination module
import './Docs.css';
import IELTS from '../assets/ielts.jpeg';
import Degree from '../assets/degree.jpeg';

const CVAndCertificates = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const openPreview = (image) => {
    setPreviewImage(image);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setPreviewImage('');
  };

  return (
    <section id="cv-certificates" className="cv-certificates">
      console.log("Checking if Docs is rendered");
      <h2>CV & Certificates</h2>

      <div className="cv-section">
        <h3>Curriculum Vitae</h3>
        <a href="https://sarimzuberi.tiiny.site/" target="_blank" rel="noopener noreferrer" className="btn view-btn">
          View My CV
        </a>
      </div>

      <div className="certificates-section">
        <h3>My Certifications</h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          //pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
          modules={[Pagination]} // Add Pagination module
        >
          <SwiperSlide>
            <div className="certificate-card">
              <h4>Responsive Web Design</h4>
              <button className="cbtn" onClick={() => window.open('https://www.freecodecamp.org/certification/sarimzuberi/responsive-web-design', '_blank')}>
                View Certificate
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="certificate-card">
              <h4>JavaScript Algorithms & Data Structures</h4>
              <button className="cbtn" onClick={() => window.open('https://www.freecodecamp.org/certification/sarimzuberi/javascript-algorithms-and-data-structures-v8', '_blank')}>
                View Certificate
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="certificate-card">
              <h4>Front End Development</h4>
              <button className="cbtn" onClick={() => window.open('https://www.freecodecamp.org/certification/sarimzuberi/front-end-development-libraries', '_blank')}>
                View Certificate
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="certificate-card">
              <h4>Back End Development & APIs</h4>
              <button className="cbtn" onClick={() => window.open('https://www.freecodecamp.org/certification/sarimzuberi/back-end-development-and-apis', '_blank')}>
                View Certificate
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="certificate-card">
              <h4>IELTS Certificate</h4>
              <button className="cbtn" onClick={() => openPreview(IELTS)}>
                View Certificate
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="certificate-card">
              <h4>Bachelor's Degree</h4>
              <button className="cbtn" onClick={() => openPreview(Degree)}>
                View Certificate
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Modal Preview for certificates */}
      {isPreviewOpen && (
        <div className="modal-preview">
          <div className="modal-content">
            <span className="close-btn" onClick={closePreview}>
              &times;
            </span>
            <img src={previewImage} alt="Preview Certificate" className="preview-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CVAndCertificates;
