import React, { useRef, useState } from 'react';
import home_banner from '../assets/home_banner.png'
import slide1 from '../assets/slide1.jpeg'
import slide2 from '../assets/slide2.jpeg'
import slide3 from '../assets/slide3.jpeg'
import slide4 from '../assets/slide4.jpeg'
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
        className="mySwiper w-full h-[35vh] mt-4 lg:mt-0 lg:h-[120vh]"
        id='home'
      >
        <SwiperSlide>
          <img className='lg:object-cover w-full h-[35vh] lg:h-[120vh]' src={home_banner}/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:object-cover w-full h-[35vh] lg:h-[120vh]' src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:object-cover w-full h-[35vh] lg:h-[120vh]' src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:object-cover w-full h-[35vh] lg:h-[120vh]' src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:object-cover w-full h-[35vh] lg:h-[120vh]' src={slide4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
