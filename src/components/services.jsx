import React from 'react';
import bg from '../assets/awards-bg.png';

const servicesData = [
    {
        name: "State of the Art Modular OTs",
        hindiName: "अत्याधुनिक मॉड्यूलर ओ.टी.",
        iconClass: "fa-solid fa-bed-pulse"
    },
    {
        name: "Labour Room",
        hindiName: "प्रसूति गृह",
        iconClass: "fa-solid fa-baby"
    },
    {
        name: "Women / Child Ward",
        hindiName: "महिला / बाल वार्ड",
        iconClass: "fa-solid fa-venus"
    },
    {
        name: "C.C.U",
        hindiName: "सी.सी.यू.",
        iconClass: "fa-solid fa-heartbeat"
    },
    {
        name: "State of the Art ICU (Surgical / Medical)",
        hindiName: "अत्याधुनिक आई.सी.यू. (सर्जिकल / मेडिकल)",
        iconClass: "fa-solid fa-procedures"
    },
    {
        name: "Computerized Lab",
        hindiName: "कम्प्यूटरीकृत पैथोलॉजी",
        iconClass: "fa-solid fa-microscope"
    },
    {
        name: "Radiology",
        hindiName: "रेडियोलोजी",
        iconClass: "fa-solid fa-x-ray"
    },
    {
        name: "CT Scan",
        hindiName: "सीटी स्कैन",
        iconClass: "fa-solid fa-x-ray"
    },
    {
        name: "Trauma Care",
        hindiName: "ट्रॉमा केयर",
        iconClass: "fa-solid fa-hand-holding-medical"
    },
    {
        name: "Vaccination Centre",
        hindiName: "टीकाकरण सेंटर",
        iconClass: "fa-solid fa-syringe"
    },
    {
        name: "State of the Art Cath Lab",
        hindiName: "अत्याधुनिक कैथ लैब",
        iconClass: "fa-solid fa-heartbeat"
    },
    {
        name: "Wards & Suite Rooms with Oxygen Support",
        hindiName: "वार्ड, प्राइवेट और सुइट रूम (ऑक्सीजन सुविधा के साथ)",
        iconClass: "fa-solid fa-mask-ventilator"
    },
    {
        name: "In – House Pharmacy",
        hindiName: "इन-हाउस फार्मेसी",
        iconClass: "fa-solid fa-prescription"
    },
];

export default function Services() {
    return (
        <>
            <div className="flex flex-col items-center relative w-full md:px-[50px] overflow-hidden px-[25px] py-8 md:pb-20 md:py-12 my-10 bg-[#4396a2]">
                <h1 className='text-[#fefefe] figtree-semibold text-4xl md:mt-0 md:text-7xl mb-3 md:mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 lg:after:w-24 after:bg-[#fefefe]'>Services</h1>
                <div className="absolute hidden md:block bottom-0 md:-bottom-10 lg:-bottom-20 w-full opacity-75">
                    <img className='object-cover' src={bg} alt="" />
                </div>
                <div className="flex flex-col items-center md:flex-row md:flex-wrap mt-4 z-20 gap-x-3 gap-y-5 justify-evenly">
                    {servicesData.map((service, index) => (
                        <div key={index} className="box overflow-hidden bg-[#fff] shadow-md w-full md:w-auto rounded-md relative flex flex-row items-center justify-center transition-all group hover:scale-[1.02] hover:shadow-xl cursor-pointer">
                            <div className="w-12 h-12 md:h-16 md:w-16 lg:w-16 lg:h-16 rounded-br-full rounded-tr-full bg-[#4396A2] hidden -ml-2 lg:grid place-items-center text-[#fefefe] text-xl lg:text-3xl group-hover:shadow-none">
                                <i className={`fa-solid ${service.iconClass}`}></i>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2 lg:p-4">
                                <h1 className='text-[#4396A2] figtree-semibold text-xs md:text-lg lg:text-3xl'>{service.name}</h1>
                                <p className='text-[#333] popping-normal mt-1 md:mt-0 text-[0.6rem] md:text-xl'>{service.hindiName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
