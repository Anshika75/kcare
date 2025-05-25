import React from "react";
import footerlogo from "../../assets/logo.png";
import services from "../../assets/services.png";

const Footer = () => {
    return (
        <>
            <div id="contact" className="relative w-full mt-20 lg:mt-[7%]">
            <div className="hidden md:flex flex-col lg:flex-row z-50 absolute w-[90%] lg:w-[55%] bg-[#fefefe] py-3 font-extrabold text-white md:-translate-y-[60%] left-[50%] -translate-x-1/2 top-0 min-h-[120px] justify-between lg:px-12 lg:items-center px-2 shadow-md">
                <div>
                    <p className="md:text-3xl figtree-bold uppercase text-[#333]">Launching Soon</p>
                    <p className="md:text-3xl figtree-bold uppercase mt-1 text-[#0D5094]">free health checkup camps</p>
                </div>
                <div className=" lg:block hidden">
                    <img className="h-32" src={services} alt="" />
                </div>
            </div>
            <div className="bg-[#0D5094] md:pt-12">
                <div className="w-full px-3 mx-auto lg:mt-0 py-12 lg:pt-24 flex flex-col md:flex-row gap-4 text-gray-300">
                    <div className="w-full lg:pl-8 md:w-[50%] lg:w-[60%]">
                        <h1 className="w-full text-3xl text-[#fefefe]">
                            <img
                                src={footerlogo}
                                alt=""
                                className="w-[25%] h-[10%px]"
                            />
                        </h1>
                        <p className="text-[#fefefe] text-sm md:text-base poppins-normal mt-4 text-justify lg:mr-12">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, dicta! Quod animi rerum corporis accusamus quaerat dolor magnam iusto ducimus voluptate similique quae culpa, aut voluptas ipsum aliquid commodi voluptates?

                        </p>
                        <div className="flex cursor-pointer mt-6 md:my-8">
                            <a href="" className="grid place-items-center mx-2 transition-all hover:scale-90 bg-[#fefefe] w-7 h-7 md:h-9 md:w-9 rounded-full">
                                <i className="text-[#DE2225] md:text-xl fa-brands fa-instagram"></i>
                            </a>
                            <a href="" className="grid place-items-center mx-2 transition-all hover:scale-90 bg-[#fefefe] w-7 h-7 md:h-9 md:w-9 rounded-full">
                                <i className="text-[#DE2225] md:text-xl fa-brands fa-facebook"></i>
                            </a>
                            <a href="" className="grid place-items-center mx-2 transition-all hover:scale-90 bg-[#fefefe] w-7 h-7 md:h-9 md:w-9 rounded-full">
                                <i className="text-[#DE2225] md:text-xl fa-brands fa-youtube"></i>
                            </a>
                            <a href="" className="grid place-items-center mx-2 transition-all hover:scale-90 bg-[#fefefe] w-7 h-7 md:h-9 md:w-9 rounded-full">
                                <i className="text-[#DE2225] fa-solid fa-envelope md:text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-[20%] lg:w-[20%] lg:mb-0">
                        <h1 className="font-bold text-[#fefefe] text-xl my-1 md:my-2 figtree-semibold">
                            QUICK <span className="text-[#fefefe]">LINKS</span>
                        </h1>
                        <div className="poppins-normal cursor-pointer flex flex-col justify-start items-start">
                            <a href="/" className="py-1 md:py-2 text-sm transition-all hover:scale-90 text-[#fefefe]">HOME</a>
                            <a href="#about" className="py-1 md:py-2 text-sm transition-all hover:scale-90 text-[#fefefe]">ABOUT</a>
                            <a href="#sevents" className="py-1 md:py-2 text-sm transition-all hover:scale-90 text-[#fefefe]">EVENTS</a>
                            <a href="#sachievements" className="py-1 md:py-2 text-sm transition-all hover:scale-90 text-[#fefefe]">ACHIEVERS</a>
                            <a href="#partners" className="py-1 md:py-2 text-sm transition-all hover:scale-90 text-[#fefefe]">PARTNERS</a>
                        </div>
                    </div>
                    <div className="w-full md:w-[30%] lg:w-[20%] lg:mb-0 cursor-pointer">
                        <h2 className="font-bold text-[#fefefe] figtree-semibold text-xl my-1 md:my-2">CONTACT</h2>
                        <ul className="poppins-normal text-xl">
                            <li className="py-1 md:py-3 text-sm flex items-center text-[#fefefe] ">
                                <i className="text-[#fefefe] mr-2 fa-solid fa-phone text-base"></i> +91-799999-868686
                            </li>
                            <li className="py-1 md:py-3 text-sm flex items-center text-[#fefefe] ">
                                <i className="mr-2 text-xl fa-solid fa-location-dot"></i> KCare Hospital, 16/111, Civil Lines
                                <br /> Kanpur, Uttar Pradesh 208001
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-[#0D5094] py-4 text-center text-xs text-[#fefefe] poppins-normal border-t">
                    &copy; KCARE HOSPITAL ALL RIGHT RESERVED
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;
