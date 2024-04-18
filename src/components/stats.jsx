import React from 'react'

export default function Stats() {
    return (
        <>
            <div className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-2 lg:grid-cols-4 w-full px-[50px] pb-[50px] -mt-10 md:-mt-20 z-20">
                <div className="box w-full h-[110px] lg:w-[300px] lg:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center">
                    <div className="absolute w-16 h-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-full bg-[#4396A2] grid place-items-center text-[#fefefe] text-3xl lg:text-4xl shadow-md">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#4396A2] figtree-semibold text-3xl mt-6 md:mt-0 lg:text-5xl'>150+</h1>
                    <p className='text-[#333] popping-normal -mt-1 text-lg lg:text-xl'>Happy Patients</p>
                </div>
                <div className="box w-full h-[110px] lg:w-[300px] lg:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center">
                    <div className="absolute w-16 h-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-full bg-[#4396A2] grid place-items-center text-[#fefefe] text-3xl lg:text-4xl shadow-md">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#4396A2] figtree-semibold text-3xl mt-6 md:mt-0 lg:text-5xl'>150+</h1>
                    <p className='text-[#333] popping-normal -mt-1 text-lg lg:text-xl'>Successful Surgeries</p>
                </div>
                <div className="box w-full h-[110px] lg:w-[300px] lg:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center">
                    <div className="absolute w-16 h-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-full bg-[#4396A2] grid place-items-center text-[#fefefe] text-3xl lg:text-4xl shadow-md">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#4396A2] figtree-semibold text-3xl mt-6 md:mt-0 lg:text-5xl'>150+</h1>
                    <p className='text-[#333] popping-normal -mt-1 text-lg lg:text-xl'>Furnished Rooms</p>
                </div>
                <div className="box w-full h-[110px] lg:w-[300px] lg:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center">
                    <div className="absolute w-16 h-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-full bg-[#4396A2] grid place-items-center text-[#fefefe] text-3xl lg:text-4xl shadow-md">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <h1 className='text-[#4396A2] figtree-semibold text-3xl mt-6 md:mt-0 lg:text-5xl'>150+</h1>
                    <p className='text-[#333] popping-normal -mt-1 text-lg lg:text-xl'>Opertation Threaters</p>
                </div>
            </div>
        </>
    )
}
