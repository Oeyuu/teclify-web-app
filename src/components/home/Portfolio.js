import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Portfolio.css';
import exampleImage from '../../assets/home-blurred.png';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Marshle",
      description: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidu...",
      image: exampleImage
    },
    {
      title: "WacDonalds Projects",
      description: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidu...",
      image: exampleImage
    },
    {
      title: "Valorant - App & Web",
      description: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidu...",
      image: exampleImage
    },
    {
      title: "New Project",
      description: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidu...",
      image: exampleImage
    },
    {
      title: "Another Project",
      description: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidu...",
      image: exampleImage
    }
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="portfolio-item">
              <img src={item.image} alt={item.title} className="portfolio-image" />
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
