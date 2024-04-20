import React from 'react'
import mission_graphic from '../assets/mission_graphic.png'
import vission_graphic from '../assets/vission_graphic.png'

export default function Mission() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between lg:justify-around w-full items-center px-[25px] md:px-[50px] md:my-10">
            <div className="box my-6 lg:my-0 w-full lg:w-[45%] h-auto md:py-20 bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer lg:px-12 overflow-hiiden p-2 py-4 md:w-hidden">
                    <div className="absolute hidden md:block -top-5 opacity-45 -left-5">
                        <img src={mission_graphic} alt="" />
                    </div>
                    <div className="absolute hidden md:block -bottom-10 opacity-45 -right-10">
                        <img src={vission_graphic} alt="" />
                    </div>
                    <p className='z-20 figtree-semibold text-lg text-justify md:text-3xl text-[#333333a2] md:mb-4'><span className='text-[#4396A2]'>Our Mission:</span> Health Elevated, Lives Empowered</p>
                    <p className='z-20 poppins-normal text-sm md:text-base text-[#333] text-justify'>We're on a mission to to deliver clinical excellence and distinctive patient care at affordable prices. We prioritize the best outcomes and experiences for our patients, treating them with compassion and understanding. We uphold principles of integrity, honesty, and moral courage, fostering a supportive team environment where everyone's contribution is valued. We respect and embrace diversity, recognizing the importance of different opinions and backgrounds in our pursuit of excellence.</p>
                </div>
                <div className="box my-6 lg:my-0 w-full lg:w-[45%] h-auto md:py-20 bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer p-2 py-4 md:px-12 overflow-hidden">
                    <div className="absolute hidden md:block -top-5 opacity-45 -left-5">
                        <img src={mission_graphic} alt="" />
                    </div>
                    <div className="absolute hidden md:block -bottom-10 opacity-45 -right-10">
                        <img src={vission_graphic} alt="" />
                    </div>
                    <p className='z-20 figtree-semibold text-lg text-justify md:text-3xl text-[#333333a2] md:mb-4'><span className='text-[#4396A2]'>Our Vision:</span> Proactive Health for All</p>
                    <p className='z-20 poppins-normal text-sm md:text-base text-[#333] text-justify'>We're here to revolutionize healthcare, creating a hospital experience that's as inspiring as it is healing. Through community engagement and cutting-edge technology, we're crafting a personalized, sustainable, and inclusive environment. Our commitment to excellence extends to all, with a special focus on serving the underserved and educating the next generation of healthcare leaders. With 45% of our patients from rural areas, we're dedicated to meeting diverse needs and shaping a healthier tomorrow.</p>
                </div>
            </div>
        </>
    )
}
