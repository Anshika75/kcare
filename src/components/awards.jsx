import React from 'react'

export default function Awards() {
  return (
    <>
        <div className="flex flex-col items-center relative w-full md:px-[50px] px-[25px] py-12 md:my-10 bg-[#4396a2]">
        <h1 className='text-[#fefefe] figtree-semibold text-4xl mt-6 md:mt-0 lg:text-7xl mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 lg:after:w-24 after:bg-[#fefefe]'>Awards</h1>
        .absolute
        <div className="grid grid-cols-2 gap-4 md:gap-16 lg:grid-cols-4 z-20">
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
