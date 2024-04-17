import React from 'react'
import home_banner from '../assets/home_banner.png'

export default function Landing() {
  return (
    <>
        <div className="grid place-items-center w-full h-[35vh] mt-4 lg:mt-0 lg:h-[100vh]">
            <img className='lg:object-cover w-full h-[35vh] lg:h-[100vh]' src={home_banner} alt="" />
        </div>
    </>
  )
}
