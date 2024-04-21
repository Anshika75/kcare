import React from 'react';
import bg from '../assets/awards-bg.png';
import doctor from '../assets/services.png';

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
        name: "In – House Pharmacy",
        hindiName: "इन-हाउस फार्मेसी",
        iconClass: "fa-solid fa-prescription"
    },
    {
        name: "Wards & Suite Rooms with Oxygen Support",
        hindiName: "वार्ड, प्राइवेट और सुइट रूम (ऑक्सीजन सुविधा के साथ)",
        iconClass: "fa-solid fa-mask-ventilator"
    },
];

export default function Services() {
    // Splitting servicesData into four arrays for four columns
    const columnCount = 4;
    const columnData = Array.from({ length: columnCount }, (_, i) =>
        servicesData.slice(Math.floor(i * servicesData.length / columnCount), Math.floor((i + 1) * servicesData.length / columnCount))
    );

    return (
        <>
            <div id="services" className="flex flex-col items-center relative w-full md:px-[50px] overflow-hidden px-[25px] py-4 md:pb-20 md:py-12 my-10 bg-[#4396a2]">
                <h1 className='text-[#fefefe] figtree-semibold text-4xl mt-6 md:mt-0 md:text-7xl mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 lg:after:w-32 after:bg-[#fefefe]'>Services</h1>
                <div className="absolute hidden md:block bottom-0 md:-bottom-10 lg:-bottom-20 w-full opacity-75">
                    <img className='object-cover' src={bg} alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-y-6 w-full md:my-10">
                    {/* Render columns */}
                    {columnData.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex flex-col items-center w-full">
                            <ul className='poppins-normal w-full text-[#fefefe] md:text-xl text-justify'>
                                {column.map((service, index) => (
                                    <li key={index} className='flex flex-col items-start py-2'>
                                        <p> <i className={`fas ${service.iconClass} text-[#fefefe] md:text-2xl`}></i> {service.name} </p>
                                        <p className='text-xs mt-2'>{service.hindiName}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
