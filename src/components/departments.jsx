import React from 'react'
import bg from '../assets/awards-bg.png'

export default function Departments() {
    return (
        <>
            <div className="flex flex-col items-center relative w-full md:px-[50px] overflow-hidden px-[25px] pb-20 md:my-10 bg-[#f9f9f9]">
                <h1 className='text-[#4396A2] figtree-semibold text-4xl md:mt-0 md:text-7xl mb-3 md:mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 lg:after:w-24 after:bg-[#4396A2]'>Departments</h1>
                <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-y-20 lg:grid-cols-4 mt-16 z-20">
                    <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="absolute hidden w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#4396A2] md:grid place-items-center text-[#fefefe] text-xl md:text-3xl lg:text-4xl shadow-md group-hover:shadow-none">
                            <i className="fa-solid fa-stethoscope"></i>
                        </div>
                        <h1 className='text-[#4396A2] group-hover:text-[#fefefe] figtree-semibold text-2xl md:mt-0 lg:mt-6 md:text-3xl'>General</h1>
                        <p className='text-[#333] group-hover:text-[#fefefe] mukta-normal -mt-1 md:mt-0 text-xs md:text-xl'>सामान्य चिकित्सा</p>
                    </div>
                    <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="absolute hidden w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#4396A2] md:grid place-items-center text-[#fefefe] text-xl md:text-3xl lg:text-4xl shadow-md group-hover:shadow-none">
                            <i className="fa-solid fa-bone"></i>
                        </div>
                        <h1 className='text-[#4396A2] group-hover:text-[#fefefe] figtree-semibold text-2xl md:mt-0 lg:mt-6 md:text-3xl'>Orthopedics</h1>
                        <p className='text-[#333] group-hover:text-[#fefefe] mukta-normal -mt-1 md:mt-0 text-xs md:text-xl'>हड्डी रोग</p>
                    </div>
                    <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="absolute hidden w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#4396A2] md:grid place-items-center text-[#fefefe] text-xl md:text-3xl lg:text-4xl shadow-md group-hover:shadow-none">
                            <i className="fa-solid fa-hand-holding-medical"></i>
                        </div>
                        <h1 className='text-[#4396A2] group-hover:text-[#fefefe] figtree-semibold text-2xl md:mt-0 lg:mt-6 md:text-3xl'>Anesthesiology</h1>
                        <p className='text-[#333] group-hover:text-[#fefefe] mukta-normal -mt-1 md:mt-0 text-xs md:text-xl'>एनेस्थिसियोलॉजी</p>
                    </div>
                    <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="absolute hidden w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#4396A2] md:grid place-items-center text-[#fefefe] text-xl md:text-3xl lg:text-4xl shadow-md group-hover:shadow-none">
                            <i className="fa-solid fa-lungs"></i>
                        </div>
                        <h1 className='text-[#4396A2] group-hover:text-[#fefefe] figtree-semibold text-2xl md:mt-0 lg:mt-6 md:text-3xl'>Pulmonary</h1>
                        <p className='text-[#333] group-hover:text-[#fefefe] mukta-normal -mt-1 md:mt-0 text-xs md:text-xl'>पल्मोनरी </p>
                    </div>
                    <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="absolute hidden w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#4396A2] md:grid place-items-center text-[#fefefe] text-xl md:text-3xl lg:text-4xl shadow-md group-hover:shadow-none">
                            <i className="fa-solid fa-lungs"></i>
                        </div>
                        <h1 className='text-[#4396A2] group-hover:text-[#fefefe] figtree-semibold text-2xl md:mt-0 lg:mt-6 md:text-3xl'>Pulmonary</h1>
                        <p className='text-[#333] group-hover:text-[#fefefe] mukta-normal -mt-1 md:mt-0 text-xs md:text-xl'>पल्मोनरी </p>
                    </div>
                </div>
            </div>
        </>
    )
}
