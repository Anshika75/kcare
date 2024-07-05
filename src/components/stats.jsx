import React from 'react'

export default function Stats() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 md:gap-16 lg:grid-cols-4 w-full md:px-[50px] md:pb-[50px] px-[25px] pb-[25px] -mt-8 md:-mt-20 z-20">
                <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                    <div className="absolute hidden w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#0D5094] md:grid place-items-center text-[#fefefe] text-xl md:text-3xl lg:text-4xl shadow-md group-hover:shadow-none group-hover:bg-[#4396a2]">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#0D5094] group-hover:text-[#fefefe] figtree-semibold text-2xl md:mt-0 lg:mt-6 md:text-5xl'>150+</h1>
                    <p className='text-[#333] group-hover:text-[#fefefe] popping-normal -mt-1 md:mt-0 text-xs md:text-xl'>Happy Patients</p>
                </div>
                <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                    <div className="absolute hidden w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#0D5094] md:grid place-items-center text-[#fefefe] text-xl md:text-3xl lg:text-4xl shadow-md group-hover:shadow-none group-hover:bg-[#4396a2]">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#0D5094] group-hover:text-[#fefefe] figtree-semibold text-2xl md:mt-0 lg:mt-6 md:text-5xl'>150+</h1>
                    <p className='text-[#333] group-hover:text-[#fefefe] popping-normal -mt-1 md:mt-0 text-xs md:text-xl'>Successful Surgeries</p>
                </div>
                <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                    <div className="absolute hidden w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#0D5094] md:grid place-items-center text-[#fefefe] text-xl md:text-3xl lg:text-4xl shadow-md group-hover:shadow-none group-hover:bg-[#4396a2]">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#0D5094] group-hover:text-[#fefefe] figtree-semibold text-2xl md:mt-0 lg:mt-6 md:text-5xl'>150+</h1>
                    <p className='text-[#333] group-hover:text-[#fefefe] popping-normal -mt-1 md:mt-0 text-xs md:text-xl'>Furnished Rooms</p>
                </div>
                <div className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                    <div className="absolute hidden w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#0D5094] md:grid place-items-center text-[#fefefe] text-xl md:text-3xl lg:text-4xl shadow-md group-hover:shadow-none group-hover:bg-[#4396a2]">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#0D5094] group-hover:text-[#fefefe] figtree-semibold text-2xl md:mt-0 lg:mt-6 md:text-5xl'>150+</h1>
                    <p className='text-[#333] group-hover:text-[#fefefe] popping-normal -mt-1 md:mt-0 text-xs md:text-xl'>Opertation Threaters</p>
                </div>
            </div>
        </>
    )
}
