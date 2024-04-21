import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './testimonial.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Testimonial() {
    return (
        <>
            <div className="flex flex-col items-center w-full md:px-[50px] md:pb-[50px] px-[25px] pb-[25px] md:my-10">
            <h1 className='text-[#4396A2] figtree-semibold text-4xl mt-6 md:mt-0 md:text-7xl mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 lg:after:w-32 after:bg-[#4396A2]'>Testimonials</h1>
            <Swiper
                loop={true}
                loopFillGroupWithBlank={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper tswiper mb-20"
                coverflowEffect={{
                    rotate: 10,
                    stretch: 50,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 150,
                    },
                }}
            >
                <SwiperSlide className='tswiper-slide'>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide className='tswiper-slide'>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide className='tswiper-slide'>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide className='tswiper-slide'>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide className='tswiper-slide'>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide className='tswiper-slide'>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide className='tswiper-slide'>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide className='tswiper-slide'>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide className='tswiper-slide'>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper>
            </div>
        </>
    );
}
