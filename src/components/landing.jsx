import React from 'react'
import home_banner from '../assets/home_banner.png'

export default function Landing() {
  return (
    <>
        <div className="grid place-items-center w-full h-[95vh]">
            <img src={home_banner} alt="" />
        </div>
    </>
  )
}
