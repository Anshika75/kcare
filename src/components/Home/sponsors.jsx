import React from 'react'

export default function Sponsors() {
  return (
    <div className="flex flex-col items-center relative w-full md:px-[50px] overflow-hidden px-[25px] md:pb-20 md:my-10 bg-[#f9f9f9]">
                <h1 className='text-[#0D5094] figtree-semibold text-4xl md:mt-0 md:text-7xl mb-3 md:mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 lg:after:w-24 after:bg-[#0D5094]'>Collaborators</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-8 md:gap-y-12 lg:gap-y-20 lg:grid-cols-4 mt-6 z-20">
                        <div className="box p-2 lg:p-4 w-full h-[75px] md:w-[300px] md:h-[120px] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer">
                            <img src="https://vectorseek.com/wp-content/uploads/2023/09/Medanta-The-Medicity-Logo-Vector.svg-.png" className='h-full w-full transition-all grayscale group-hover:grayscale-0' alt="" />
                        </div>
                        <div className="box p-2 lg:p-4 w-full h-[75px] md:w-[300px] md:h-[120px] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer">
                            <img src="https://logos-world.net/wp-content/uploads/2022/07/Fortis-Logo.png" className='h-full w-full transition-all grayscale group-hover:grayscale-0' alt="" />
                        </div>   
                        <div className="box p-2 lg:p-4 w-full h-[75px] md:w-[300px] md:h-[120px] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer">
                            <img src="https://vectorseek.com/wp-content/uploads/2023/09/Medanta-The-Medicity-Logo-Vector.svg-.png" className='h-full w-full transition-all grayscale group-hover:grayscale-0' alt="" />
                        </div>
                        <div className="box p-2 lg:p-4 w-full h-[75px] md:w-[300px] md:h-[120px] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:scale-105 hover:shadow-xl cursor-pointer">
                            <img src="https://logos-world.net/wp-content/uploads/2022/07/Fortis-Logo.png" className='h-full w-full transition-all grayscale group-hover:grayscale-0' alt="" />
                        </div>                  
                </div>
            </div>
  )
}
