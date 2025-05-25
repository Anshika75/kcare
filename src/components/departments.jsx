// Define an array of department objects
const departments = [
    {
      name: "General",
      hindiName: "सामान्य चिकित्सा",
      iconClass: "fa-solid fa-stethoscope",
    },
    {
      name: "Orthopedics",
      hindiName: "हड्डी रोग",
      iconClass: "fa-solid fa-bone",
    },
    {
      name: "Anesthesiology",
      hindiName: "एनेस्थिसियोलॉजी",
      iconClass: "fa-solid fa-hand-holding-medical",
    },
    {
      name: "Pulmonary",
      hindiName: "पल्मोनरी",
      iconClass: "fa-solid fa-lungs",
    },
    {
      name: "Gastroenterology",
      hindiName: "गैस्ट्रोएंटरोलॉजी",
      iconClass: "fa-solid fa-viruses",
    },
    {
      name: "Neurology",
      hindiName: "न्यूरोलॉजी",
      iconClass: "fa-solid fa-user-doctor",
    },
    {
      name: "Gynaecology",
      hindiName: "स्त्री रोग",
      iconClass: "fa-solid fa-venus",
    },
    {
      name: "Ear, Nose, Throat",
      hindiName: "कान, नाक, गला",
      iconClass: "fa-solid fa-ear-listen",
    },
    {
      name: "Cardiology",
      hindiName: "हृदय रोग",
      iconClass: "fa-solid fa-heart",
    },
    {
      name: "Psychiatrics",
      hindiName: "मानसिक रोग",
      iconClass: "fa-solid fa-brain",
    },
    {
      name: "Prosthetics",
      hindiName: "प्रोथेटिक्स",
      iconClass: "fa-solid fa-wheelchair",
    },
    {
      name: "Physiotherapy",
      hindiName: "भौतिक चिकित्सा",
      iconClass: "fa-solid fa-running",
    },
    {
      name: "Dermatology",
      hindiName: "त्वचा विज्ञान",
      iconClass: "fa-solid fa-face-smile",
    },
    {
      name: "Plastic Surgery",
      hindiName: "प्लास्टिक सर्जरी",
      iconClass: "fa-solid fa-syringe",
    },
    {
      name: "Keyhole Surgery",
      hindiName: "लैपरोस्कोपिक सर्जरी",
      iconClass: "fa-solid fa-microscope",
    },
    {
      name: "Uro -Surgery",
      hindiName: "मूत्र रोग",
      iconClass: "fa-solid fa-toilet",
    },
  ]
  
  export default function Departments() {
    return (
      <>
        <div
          id="dept"
          className="flex flex-col items-center relative w-full md:px-[50px] overflow-hidden px-[25px] py-8 md:pb-20 md:py-12 md:my-10 bg-[#f9f9f9]"
        >
          <h1 className="text-[#0D5094] figtree-semibold text-4xl md:mt-0 md:text-7xl mb-6 md:mb-12 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 lg:after:w-24 after:bg-[#0D5094]">
            Departments
          </h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full mt-6 md:mt-8">
            {departments.map((department, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer hover:bg-[#0D5094] hover:border-[#0D5094]"
              >
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon Container */}
                  <div className="mb-4 md:mb-6 p-4 md:p-5 bg-[#0D5094] group-hover:bg-white rounded-full transition-colors duration-300">
                    <i
                      className={`fas ${department.iconClass} text-white group-hover:text-[#0D5094] text-2xl md:text-3xl transition-colors duration-300`}
                    ></i>
                  </div>
  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-[#0D5094] group-hover:text-white figtree-semibold text-lg md:text-xl lg:text-2xl mb-2 transition-colors duration-300 leading-tight">
                      {department.name}
                    </h3>
  
                    <p className="text-[#666] group-hover:text-white/90 mukta-normal text-sm md:text-base transition-colors duration-300">
                      {department.hindiName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
  