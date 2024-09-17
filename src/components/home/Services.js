import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Services.css';
import exampleImage from '../../assets/home-blurred.png';

const Services = () => {
  const singleItem = [
    {
      title: "DevOps",
      description: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",

      buttonLink: "xyxz",
      image: exampleImage,
    },{
        title: "Projektplanung",
        description: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
   
        buttonLink: "xyxz",
        image: exampleImage,
      },
  ];

  return (
    <section className="single-item-section">
    
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {singleItem.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="single-item-slide" style={{ backgroundImage: `url(${item.image})` }}>
              <h1 className="single-item-title">{item.title}</h1>
              <p className="single-item-description">{item.description}</p>
              <button className="single-item-button">Mehr erfahren &gt;</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
