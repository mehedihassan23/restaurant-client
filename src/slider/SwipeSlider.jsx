import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swipeSlider.css'

// import required modules
import { Pagination } from 'swiper/modules';

const SwipeSlider = () => {
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    grabCursor={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
    style={{marginTop: "5rem"}}>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide1_riqjd7.jpg" alt="" />
            <p>Salad</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide3_bfhrfm.jpg" alt="" />
            <p>Soup</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide4_bidpi8.jpg" alt="" />
            <p>Burger</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide2_t0f7wv.jpg" alt="" />
            <p>Pizza</p>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1720285225/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__06__20142828-peruvian-cuisine-ceviche1-kevin-cox-2d7966badb274a88a7bd077f2057a6a9_ammafw.jpg" alt="" />
            <p>Cuisine</p>
        </SwiperSlide>
       
    </Swiper>
  )
}

export default SwipeSlider
