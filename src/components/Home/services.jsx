import bg from "../../assets/awards-bg.png"

const servicesData = [
  {
    name: "State of the Art Modular OTs",
    hindiName: "अत्याधुनिक मॉड्यूलर ओ.टी.",
    iconClass: "fa-solid fa-bed-pulse",
  },
  {
    name: "Labour Room",
    hindiName: "प्रसूति गृह",
    iconClass: "fa-solid fa-baby",
  },
  {
    name: "Women / Child Ward",
    hindiName: "महिला / बाल वार्ड",
    iconClass: "fa-solid fa-venus",
  },
  {
    name: "C.C.U",
    hindiName: "सी.सी.यू.",
    iconClass: "fa-solid fa-heartbeat",
  },
  {
    name: "State of the Art ICU (Surgical / Medical)",
    hindiName: "अत्याधुनिक आई.सी.यू. (सर्जिकल / मेडिकल)",
    iconClass: "fa-solid fa-procedures",
  },
  {
    name: "Computerized Lab",
    hindiName: "कम्प्यूटरीकृत पैथोलॉजी",
    iconClass: "fa-solid fa-microscope",
  },
  {
    name: "Radiology",
    hindiName: "रेडियोलोजी",
    iconClass: "fa-solid fa-x-ray",
  },
  {
    name: "CT Scan",
    hindiName: "सीटी स्कैन",
    iconClass: "fa-solid fa-x-ray",
  },
  {
    name: "Trauma Care",
    hindiName: "ट्रॉमा केयर",
    iconClass: "fa-solid fa-hand-holding-medical",
  },
  {
    name: "Vaccination Centre",
    hindiName: "टीकाकरण सेंटर",
    iconClass: "fa-solid fa-syringe",
  },
  {
    name: "State of the Art Cath Lab",
    hindiName: "अत्याधुनिक कैथ लैब",
    iconClass: "fa-solid fa-heartbeat",
  },
  {
    name: "In – House Pharmacy",
    hindiName: "इन-हाउस फार्मेसी",
    iconClass: "fa-solid fa-prescription",
  },
  {
    name: "Wards & Suite Rooms with Oxygen Support",
    hindiName: "वार्ड, प्राइवेट और सुइट रूम (ऑक्सीजन सुविधा के साथ)",
    iconClass: "fa-solid fa-mask-ventilator",
  },
]

export default function Services() {
  return (
    <>
      <div
        id="services"
        className="flex flex-col items-center relative w-full md:px-[50px] overflow-hidden px-[25px] py-4 md:pb-20 md:py-12 my-10 bg-[#0D5094]"
      >
        <h1 className="text-[#fefefe] figtree-semibold text-4xl mt-6 md:mt-0 md:text-7xl mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 lg:after:w-32 after:bg-[#fefefe]">
          Services
        </h1>

        <div className="absolute hidden md:block bottom-0 md:-bottom-10 lg:-bottom-20 w-full opacity-75">
          <img className="object-cover" src={bg || "/placeholder.svg"} alt="" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full md:my-10 z-10 relative">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-4 p-3 bg-white/20 rounded-full">
                  <i className={`fas ${service.iconClass} text-[#fefefe] text-2xl md:text-3xl`}></i>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-[#fefefe] poppins-normal text-sm md:text-base font-medium mb-2 leading-tight">
                    {service.name}
                  </h3>

                  <p className="text-[#fefefe]/80 text-xs md:text-sm mt-auto">{service.hindiName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
