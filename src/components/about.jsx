import React from 'react'
import doctor from '../assets/doctors.png'

export default function About() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-around w-full items-center px-[25px] md:px-[50px] md:my-10">
                <img className='mt-6 lg:mt-0 w-full md:hidden lg:block lg:w-[400px]' src={doctor} alt="" />
                <div className="flex flex-col items-center lg:items-start lg:w-1/2">
                    <h1 className='text-[#4396A2] figtree-semibold text-4xl mt-6 md:mt-0 lg:text-7xl mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 lg:after:w-32 after:bg-[#4396A2] before:absolute before:top-0 before:right-0 before:h-1 before:w-16 lg:before:w-32 before:bg-[#4396A2]'>About Us</h1>
                    <p className='poppins-normal text-[#333] md:text-xl'> K Care multispecialty, founded in May 2021, has been steadfast in its mission to offer accessible, top-tier healthcare coupled with cutting-edge medical and surgical interventions. Our ethos is built on pillars of integrity, commitment, compassion, and an unwavering commitment to excellence in patient care. At K Care, we prioritize fostering a comforting and visually pleasing atmosphere, fostering a sense of connection and comfort for our patients. This commitment to creating a nurturing environment is complemented by a team of exceptionally skilled, seasoned, and compassionate healthcare professionals who stand ready to provide unparalleled care and support to all who walk through our doors.
                    </p>
                </div>
            </div>
        </>
    )
}
