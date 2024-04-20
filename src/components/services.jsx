import React from 'react'
import bg from '../assets/awards-bg.png'

export default function Services() {
  return (
    <>
        <div className="flex flex-col items-center relative w-full md:px-[50px] overflow-hidden px-[25px] py-8 md:pb-20 md:py-12 my-10 bg-[#4396a2]">
        <h1 className='text-[#fefefe] figtree-semibold text-4xl md:mt-0 md:text-7xl mb-3 md:mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 lg:after:w-24 after:bg-[#fefefe]'>Awards</h1>
        <div className="absolute hidden md:block bottom-0 md:-bottom-10 lg:-bottom-20 w-full opacity-75">
            <img className='object-cover' src={bg} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4 mt-4 z-20">
                <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer">
                    <h1 className='text-[#4396A2] figtree-semibold text-2xl md:text-5xl'>150+</h1>
                    <p className='text-[#333] popping-normal -mt-1 md:mt-0 text-xs md:text-xl'>Happy Patients</p>
                </div>
                <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer">
                    <h1 className='text-[#4396A2] figtree-semibold text-2xl md:text-5xl'>150+</h1>
                    <p className='text-[#333] popping-normal -mt-1 md:mt-0 text-xs md:text-xl'>Successful Surgeries</p>
                </div>
                <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer">
                    <h1 className='text-[#4396A2] figtree-semibold text-2xl md:text-5xl'>150+</h1>
                    <p className='text-[#333] popping-normal -mt-1 md:mt-0 text-xs md:text-xl'>Furnished Rooms</p>
                </div>
                <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer">
                    <h1 className='text-[#4396A2] figtree-semibold text-2xl md:text-5xl'>150+</h1>
                    <p className='text-[#333] popping-normal -mt-1 md:mt-0 text-xs md:text-xl'>Opertation Threaters</p>
                </div>
            </div>
        </div>
    </>
  )
}
