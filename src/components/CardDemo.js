import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Use modules import for consistency
import 'swiper/swiper-bundle.css';
import './CardDemo.css';

// Import your playing card images
import card1 from '../assets/ace_of_spades.png'; 
import card2 from '../assets/king_of_spades2.png';
import card3 from '../assets/queen_of_spades2.png';
import card4 from '../assets/jack_of_spades2.png';
import card5 from '../assets/ace_of_hearts.png';
import card6 from '../assets/king_of_hearts2.png';
import card7 from '../assets/queen_of_hearts2.png';
import card8 from '../assets/jack_of_hearts2.png';
import card9 from '../assets/ace_of_diamonds.png';
import card10 from '../assets/king_of_diamonds2.png';
import card11 from '../assets/queen_of_diamonds2.png';
import card12 from '../assets/jack_of_diamonds2.png';
import card13 from '../assets/ace_of_clubs.png'; 
import card14 from '../assets/king_of_clubs2.png';
import card15 from '../assets/queen_of_clubs2.png';
import card16 from '../assets/jack_of_clubs2.png'; 



const CardDemo = () => {
  const featuredItems = [
    { id: 1, name: 'Ace of Spades', image: card1, description: 'A high-value card in many games.' },
    { id: 2, name: 'King of Spades', image: card2, description: 'The highest face card in Spades.' },
    { id: 3, name: 'Queen of Spades', image: card3, description: 'A powerful card in many games.' },
    { id: 4, name: 'Jack of Spades', image: card4, description: 'The lowest face card in Spades.' },
    { id: 5, name: 'Ace of Hearts', image: card5, description: 'A high-value card in many games.' },
    { id: 6, name: 'King of Hearts', image: card6, description: 'The highest face card in Hearts.' },
    { id: 7, name: 'Queen of Hearts', image: card7, description: 'A powerful card in many games.' },
    { id: 8, name: 'Jack of Hearts', image: card8, description: 'The lowest face card in Hearts.' },
    { id: 9, name: 'Ace of Diamonds', image: card9, description: 'A high-value card in many games.' },
    { id: 10, name: 'King of Diamonds', image: card10, description: 'The highest face card in Diamonds.' },
    { id: 11, name: 'Queen of Diamonds', image: card11, description: 'A powerful card in many games.' },
    { id: 12, name: 'Jack of Diamonds', image: card12, description: 'The lowest face card in Diamonds.' },
    { id: 13, name: 'Ace of Clubs', image: card13, description: 'A high-value card in many games.' },
    { id: 14, name: 'King of Clubs', image: card14, description: 'The highest face card in Clubs.' },
    { id: 15, name: 'Queen of Clubs', image: card15, description: 'A powerful card in many games.' },
    { id: 16, name: 'Jack of Clubs', image: card16, description: 'The lowest face card in Clubs.' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="card-demo-container">
      console.log("Checking if Cards is rendered");
      <h2 className="card-demo-heading">Card Carousel</h2>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex % featuredItems.length)}
      >
        {featuredItems.map((item, index) => (
          <SwiperSlide key={item.id} style={{ 
              transform: index === activeIndex + 1 ? 'scale(1)' : 'scale(1)', 
              transition: 'transform 0.3s ease',
              zIndex: index === activeIndex + 1 ? 10 : 1 
            }}>
            <img src={item.image} alt={item.name} className="card-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="featured-items-container">
        <h3 className="featured-items-heading">Featured Card</h3>
        <div className="featured-item">
          <h4 className="item-name">{featuredItems[activeIndex + 1].name}</h4>
          <p className="item-description">{featuredItems[activeIndex + 1].description}</p>
        </div>
      </div>
      
      <br /><br /><br />
      <h2 className="card-demo-heading">Auto-Playing Card Carousel</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        modules={[Autoplay]} // Ensure this is included
        autoplay={{ delay: 500 }} // Autoplay configuration
      >
        {featuredItems.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.name} className="card-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardDemo;
