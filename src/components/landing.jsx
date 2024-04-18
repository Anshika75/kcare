import React, { useRef, useState } from 'react';
import home_banner from '../assets/home_banner.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Lannding() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{ clickable: 'true', bulletColor: '#92e3ef', bulletActiveColor: '#4396A2' }} 
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper w-full h-[35vh] mt-4 lg:mt-0 lg:h-[100vh]"
      >
        <SwiperSlide>
          <img src={home_banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
