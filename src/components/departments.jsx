import React from 'react';
import bg from '../assets/awards-bg.png';

// Define an array of department objects
const departments = [
    {
        name: 'General',
        hindiName: 'सामान्य चिकित्सा',
        iconClass: 'fa-solid fa-stethoscope'
    },
    {
        name: 'Orthopedics',
        hindiName: 'हड्डी रोग',
        iconClass: 'fa-solid fa-bone'
    },
    {
        name: 'Anesthesiology',
        hindiName: 'एनेस्थिसियोलॉजी',
        iconClass: 'fa-solid fa-hand-holding-medical'
    },
    {
        name: 'Pulmonary',
        hindiName: 'पल्मोनरी',
        iconClass: 'fa-solid fa-lungs'
    },
    {
        name: 'Gastroenterology',
        hindiName: 'गैस्ट्रोएंटरोलॉजी',
        iconClass: 'fa-solid fa-viruses'
    },
    {
        name: 'Neurology',
        hindiName: 'न्यूरोलॉजी',
        iconClass: 'fa-solid fa-user-doctor'
    },
    {
        name: 'Gynaecology',
        hindiName: 'स्त्री रोग',
        iconClass: 'fa-solid fa-venus'
    },
    {
        name: 'Ear, Nose, Throat',
        hindiName: 'कान, नाक, गला',
        iconClass: 'fa-solid fa-ear-listen'
    },
    {
        name: 'Cardiology',
        hindiName: 'हृदय रोग',
        iconClass: 'fa-solid fa-heart'
    },
    {
        name: 'Psychiatrics',
        hindiName: 'मानसिक रोग',
        iconClass: 'fa-solid fa-brain'
    },
    {
        name: 'Prosthetics',
        hindiName: 'प्रोथेटिक्स',
        iconClass: 'fa-solid fa-wheelchair'
    },
    {
        name: 'Physiotherapy',
        hindiName: 'भौतिक चिकित्सा',
        iconClass: 'fa-solid fa-running'
    },
    {
        name: 'Dermatology',
        hindiName: 'त्वचा विज्ञान',
        iconClass: 'fa-solid fa-face-smile'
    },
    {
        name: 'Plastic Surgery',
        hindiName: 'प्लास्टिक सर्जरी',
        iconClass: 'fa-solid fa-syringe'
    },
    {
        name: 'Keyhole Surgery',
        hindiName: 'लैपरोस्कोपिक सर्जरी',
        iconClass: 'fa-solid fa-microscope'
    },
    {
        name: 'Uro -Surgery',
        hindiName: 'मूत्र रोग',
        iconClass: 'fa-solid fa-toilet'
    }
];

export default function Departments() {
    return (
        <>
            <div className="flex flex-col items-center relative w-full md:px-[50px] overflow-hidden px-[25px] md:pb-20 md:my-10 bg-[#f9f9f9]">
                <h1 className='text-[#4396A2] figtree-semibold text-4xl md:mt-0 md:text-7xl mb-3 md:mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 lg:after:w-24 after:bg-[#4396A2]'>Departments</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-8 md:gap-y-12 lg:gap-y-20 lg:grid-cols-4 mt-6 md:mt-16 z-20">
                    {departments.map((department, index) => (
                        <div key={index} className="box p-2 lg:p-4 w-full h-[75px] pb-3 md:pb-0 md:w-[300px] md:h-[150px] lg:pt-[7%] bg-[#fff] shadow-md rounded-md relative flex flex-col items-center justify-center transition-all group hover:bg-[#4396a2] hover:scale-105 hover:shadow-xl cursor-pointer">
                            <div className="absolute hidden w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 left-1/2 -translate-x-1/2 top-0 translate-y-[-45%] md:-translate-y-1/2 rounded-full bg-[#4396A2] md:grid place-items-center text-[#fefefe] text-xl md:text-3xl lg:text-4xl shadow-md group-hover:shadow-none">
                                <i className={`fa-solid ${department.iconClass}`}></i>
                            </div>
                            <h1 className='text-[#4396A2] group-hover:text-[#fefefe] figtree-semibold text-xl md:mt-0 lg:mt-6 md:text-3xl'>{department.name}</h1>
                            <p className='text-[#333] group-hover:text-[#fefefe] mukta-normal mt-0 text-xs md:text-xl'>{department.hindiName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
