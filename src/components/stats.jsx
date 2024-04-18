import React from 'react'

export default function Stats() {
    return (
        <>
            <div className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-2 lg:grid-cols-4 w-full md:px-[50px] md:pb-[50px] px-[25px] pb-[25px] -mt-8 md:-mt-20 z-20">
                <div className="box w-full h-[110px] md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                    <div className="absolute w-16 h-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#4396A2] grid place-items-center text-[#fefefe] text-3xl lg:text-4xl shadow-md group-hover:shadow-none">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#4396A2] group-hover:text-[#fefefe] figtree-semibold text-3xl mt-6 md:mt-0 lg:text-5xl'>150+</h1>
                    <p className='text-[#333] group-hover:text-[#fefefe] popping-normal -mt-1 md:mt-0 text-lg lg:text-xl'>Happy Patients</p>
                </div>
                <div className="box w-full h-[110px] md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                    <div className="absolute w-16 h-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#4396A2] grid place-items-center text-[#fefefe] text-3xl lg:text-4xl shadow-md group-hover:shadow-none">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#4396A2] group-hover:text-[#fefefe] figtree-semibold text-3xl mt-6 md:mt-0 lg:text-5xl'>150+</h1>
                    <p className='text-[#333] group-hover:text-[#fefefe] popping-normal -mt-1 md:mt-0 text-lg lg:text-xl'>Successful Surgeries</p>
                </div>
                <div className="box w-full h-[110px] md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                    <div className="absolute w-16 h-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#4396A2] grid place-items-center text-[#fefefe] text-3xl lg:text-4xl shadow-md group-hover:shadow-none">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#4396A2] group-hover:text-[#fefefe] figtree-semibold text-3xl mt-6 md:mt-0 lg:text-5xl'>150+</h1>
                    <p className='text-[#333] group-hover:text-[#fefefe] popping-normal -mt-1 md:mt-0 text-lg lg:text-xl'>Furnished Rooms</p>
                </div>
                <div className="box w-full h-[110px] md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                    <div className="absolute w-16 h-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#4396A2] grid place-items-center text-[#fefefe] text-3xl lg:text-4xl shadow-md group-hover:shadow-none">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#4396A2] group-hover:text-[#fefefe] figtree-semibold text-3xl mt-6 md:mt-0 lg:text-5xl'>150+</h1>
                    <p className='text-[#333] group-hover:text-[#fefefe] popping-normal -mt-1 md:mt-0 text-lg lg:text-xl'>Opertation Threaters</p>
                </div>
            </div>
        </>
    )
}
