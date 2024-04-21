import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './testimonial.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay,  } from 'swiper/modules';

export default function Testimonial() {
    return (
        <>
            <div className="flex flex-col items-center relative w-full md:px-[50px] overflow-hidden px-[25px] py-4 md:pb-20 md:py-12 my-10 bg-[#4396a2]">
                <h1 className='text-[#fefefe] figtree-semibold text-4xl mt-6 md:mt-0 md:text-7xl mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 lg:after:w-32 after:bg-[#fefefe]'>Testimonials</h1>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    pagination={true}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper tswiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
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
                    <SwiperSlide className='tswiper-slide bg-[#fefefe]'>
                        <div className="flex flex-col items-center justify-center w-full h-full p-6">
                            <p className='text-[#4396A2] poppins-normal text-lg lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inquit, est ita: Si id quod dicis, inquit, est, tibi istud placet. Quae cum dixisset paulumque institisset, Quid est? </p>
                            <h1 className='text-[#4396A2] figtree-semibold text-2xl mt-4'>John Doe</h1>
                            <p className='text-[#4396A2] poppins-normal text-lg'>Cardiologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='tswiper-slide bg-[#fefefe]'>
                        <div className="flex flex-col items-center justify-center w-full h-full p-6">
                            <p className='text-[#4396A2] poppins-normal text-lg lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inquit, est ita: Si id quod dicis, inquit, est, tibi istud placet. Quae cum dixisset paulumque institisset, Quid est? </p>
                            <h1 className='text-[#4396A2] figtree-semibold text-2xl mt-4'>John Doe</h1>
                            <p className='text-[#4396A2] poppins-normal text-lg'>Cardiologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='tswiper-slide bg-[#fefefe]'>
                        <div className="flex flex-col items-center justify-center w-full h-full p-6">
                            <p className='text-[#4396A2] poppins-normal text-lg lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inquit, est ita: Si id quod dicis, inquit, est, tibi istud placet. Quae cum dixisset paulumque institisset, Quid est? </p>
                            <h1 className='text-[#4396A2] figtree-semibold text-2xl mt-4'>John Doe</h1>
                            <p className='text-[#4396A2] poppins-normal text-lg'>Cardiologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='tswiper-slide bg-[#fefefe]'>
                        <div className="flex flex-col items-center justify-center w-full h-full p-6">
                            <p className='text-[#4396A2] poppins-normal text-lg lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inquit, est ita: Si id quod dicis, inquit, est, tibi istud placet. Quae cum dixisset paulumque institisset, Quid est? </p>
                            <h1 className='text-[#4396A2] figtree-semibold text-2xl mt-4'>John Doe</h1>
                            <p className='text-[#4396A2] poppins-normal text-lg'>Cardiologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='tswiper-slide bg-[#fefefe]'>
                        <div className="flex flex-col items-center justify-center w-full h-full p-6">
                            <p className='text-[#4396A2] poppins-normal text-lg lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inquit, est ita: Si id quod dicis, inquit, est, tibi istud placet. Quae cum dixisset paulumque institisset, Quid est? </p>
                            <h1 className='text-[#4396A2] figtree-semibold text-2xl mt-4'>John Doe</h1>
                            <p className='text-[#4396A2] poppins-normal text-lg'>Cardiologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='tswiper-slide bg-[#fefefe]'>
                        <div className="flex flex-col items-center justify-center w-full h-full p-6">
                            <p className='text-[#4396A2] poppins-normal text-lg lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inquit, est ita: Si id quod dicis, inquit, est, tibi istud placet. Quae cum dixisset paulumque institisset, Quid est? </p>
                            <h1 className='text-[#4396A2] figtree-semibold text-2xl mt-4'>John Doe</h1>
                            <p className='text-[#4396A2] poppins-normal text-lg'>Cardiologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='tswiper-slide bg-[#fefefe]'>
                        <div className="flex flex-col items-center justify-center w-full h-full p-6">
                            <p className='text-[#4396A2] poppins-normal text-lg lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inquit, est ita: Si id quod dicis, inquit, est, tibi istud placet. Quae cum dixisset paulumque institisset, Quid est? </p>
                            <h1 className='text-[#4396A2] figtree-semibold text-2xl mt-4'>John Doe</h1>
                            <p className='text-[#4396A2] poppins-normal text-lg'>Cardiologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='tswiper-slide bg-[#fefefe]'>
                        <div className="flex flex-col items-center justify-center w-full h-full p-6">
                            <p className='text-[#4396A2] poppins-normal text-lg lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inquit, est ita: Si id quod dicis, inquit, est, tibi istud placet. Quae cum dixisset paulumque institisset, Quid est? </p>
                            <h1 className='text-[#4396A2] figtree-semibold text-2xl mt-4'>John Doe</h1>
                            <p className='text-[#4396A2] poppins-normal text-lg'>Cardiologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='tswiper-slide bg-[#fefefe]'>
                        <div className="flex flex-col items-center justify-center w-full h-full p-6">
                            <p className='text-[#4396A2] poppins-normal text-lg lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inquit, est ita: Si id quod dicis, inquit, est, tibi istud placet. Quae cum dixisset paulumque institisset, Quid est? </p>
                            <h1 className='text-[#4396A2] figtree-semibold text-2xl mt-4'>John Doe</h1>
                            <p className='text-[#4396A2] poppins-normal text-lg'>Cardiologist</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
