import React from 'react'
import mission_graphic from '../assets/mission_graphic.png'
import vission_graphic from '../assets/vission_graphic.png'

export default function Mission() {
    return (
        <>
            <div className="flex flex-col lg:flex-row mt-6 md:mt-0 justify-between lg:justify-around w-full items-center px-[25px] md:px-[50px] md:my-10">
            <div className="box my-3 md:my-6 lg:my-0 w-full lg:w-[45%] h-auto md:py-20 bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer lg:px-12 overflow-hidden p-2 py-4 md:w-hidden">
                    <div className="absolute hidden md:block -top-5 opacity-45 -left-5">
                        <img src={mission_graphic} alt="" />
                    </div>
                    <div className="absolute hidden md:block -bottom-10 opacity-45 -right-10">
                        <img src={vission_graphic} alt="" />
                    </div>
                    <p className='z-20 figtree-semibold text-lg text-justify md:text-3xl text-[#333333a2] md:mb-4'><span className='text-[#4396A2]'>Our Mission:</span> Health Elevated, Lives Empowered</p>
                    <p className='z-20 poppins-normal text-xs md:text-base text-[#333] text-justify'>We're dedicated to providing unparalleled clinical excellence and compassionate patient care, all at accessible rates. Our unwavering commitment lies in delivering optimal outcomes and nurturing empathetic experiences. Upholding integrity, honesty, and moral courage, we cultivate a cohesive team environment valuing each member's input. Embracing diversity fuels our journey toward excellence, ensuring inclusivity and respect in every aspect of our practice.</p>
                </div>
                <div className="box my-3 md:my-6 lg:my-0 w-full lg:w-[45%] h-auto md:py-20 bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer p-2 py-4 md:px-12 overflow-hidden">
                    <div className="absolute hidden md:block -top-5 opacity-45 -left-5">
                        <img src={mission_graphic} alt="" />
                    </div>
                    <div className="absolute hidden md:block -bottom-10 opacity-45 -right-10">
                        <img src={vission_graphic} alt="" />
                    </div>
                    <p className='z-20 figtree-semibold text-lg text-justify md:text-3xl text-[#333333a2] md:mb-4'><span className='text-[#4396A2]'>Our Vision:</span> Proactive Health for Everyone</p>
                    <p className='z-20 poppins-normal text-xs md:text-base text-[#333] text-justify'>We pioneer a transformative hospital journey, blending inspiration with healing. Leveraging community involvement and state-of-the-art innovations, we forge a bespoke, eco-conscious, and accessible milieu. Our unwavering pursuit of distinction embraces all, particularly prioritizing the marginalized and nurturing future healthcare trailblazers. Serving 45% rural patients underscores our resolve to address varied requirements, shaping a robust, inclusive healthcare landscape for a healthier future.</p>
                </div>
            </div>
        </>
    )
}
