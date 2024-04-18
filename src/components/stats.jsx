import React from 'react'

export default function Stats() {
  return (
    <>
        <div className="grid grid-cols-4 w-full p-4 mt-20 z-20">
            <div className="box w-[300px] h-[150px] pt-[7%] bg-[#fefefe] shadow-md rounded-md relative flex flex-col items-center justify-center">
                <div className="absolute w-24 h-24 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-full bg-[#4396A2] grid place-items-center text-[#fefefe] text-4xl shadow-md">
                    <i className="fa-solid fa-building"></i>
                </div>
                <h1 className='text-[#4396A2] figtree-semibold text-5xl'>150+</h1>
                <p className='text-[#333] popping-normal text-xl'>Departments</p>
            </div>
        </div>
    </>
  )
}
