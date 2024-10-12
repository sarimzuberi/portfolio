import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './SliderDemo.css'
// Import your images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpeg';

const SliderDemo = () => {
  return (
    <div className="slider-container">
      
      {/* Text above first Swiper */}
      <div className='slider-text'>Swipe to see more images</div>

      {/* First Swiper (without autoplay) */}
      <div className="swiper-wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1} // Number of slides shown at once
          loop={true} // Makes the slider loop infinitely
          pagination={{ clickable: true }} // Adds pagination
        >
          <SwiperSlide>
            <img src={image1} alt="Image 1" style={{ width: '50%', height: 'auto' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Image 2" style={{ width: '50%', height: 'auto' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Image 3" style={{ width: '50%', height: 'auto' }} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Add some space between the Swipers */}
      <div className="slider-spacing"></div>

      {/* Text above second Swiper */}
      <div className='slider-text'>This is an automatic slider</div>

      {/* Second Swiper (with autoplay) */}
      <div className="swiper-wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1} // Number of slides shown at once
          loop={true} // Makes the slider loop infinitely
          autoplay={{ delay: 500 }} // Autoplay functionality
          pagination={{ clickable: true }} // Adds pagination
          modules={[Autoplay]} // Include Autoplay module here
        >
          <SwiperSlide>
            <img src={image1} alt="Image 1" style={{ width: '50%', height: 'auto' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Image 2" style={{ width: '50%', height: 'auto' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Image 3" style={{ width: '50%', height: 'auto' }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderDemo;
