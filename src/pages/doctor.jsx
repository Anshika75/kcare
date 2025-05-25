"use client"

import { useState } from "react"

const doctorData = {
  id: 1,
  name: "Dr. Amit Kumar",
  title: "Director of Cardiology Department",
  specialty: "Interventional Cardiologist",
  image:
    "https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg",
  experience: "18+",
  rating: 4.9,
  reviews: 245,
  languages: ["Hindi", "English", "Punjabi"],
  availability: "Mon - Sat: 9:00 AM - 6:00 PM",
  consultationFee: "₹800",
  about:
    "Dr. Amit Kumar has extensive experience in the field of Cardiac Interventions and clinical cardiology. He is specialised in complex angioplasties including multivessel, bifurcation and left main angioplasties with Rota Ablation, OCT, IVUS, IABP, Impella devices. He has done more than 1000 angioplasties and 5000 angiography with good outcomes. He is also specialised in Pacemaker, ICD, CRT implantation & balloon valvotomies.",
  workExperience: [
    {
      position: "Director of Cardiology Department",
      hospital: "Kcare Hospital, Kanpur & Heart Center",
      duration: "2018 - Present",
      description: "Leading the cardiology department and performing complex cardiac interventions",
    },
    {
      position: "Ex. Assistant Professor Cardiology",
      hospital: "Department of Cardiology, RNT Medical College, Udaipur, India",
      duration: "2015 - 2018",
      description: "Teaching and clinical practice in interventional cardiology",
    },
    {
      position: "Ex. Consultant Cardiology",
      hospital: "Max Superspeciality Hospital, Saket, New Delhi",
      duration: "2012 - 2015",
      description: "Senior consultant providing comprehensive cardiac care",
    },
    {
      position: "Ex. Head of Department - Cardiology",
      hospital: "Mariampur Hospital, Kanpur",
      duration: "2010 - 2012",
      description: "Established and led the cardiology department",
    },
  ],
  education: [
    {
      degree: "DM (Cardiology)",
      institution: "RNT Medical College, Udaipur, Rajasthan",
      year: "2010",
    },
    {
      degree: "MD - LLRM Medical College",
      institution: "Meerut, Uttar Pradesh",
      year: "2007",
    },
    {
      degree: "MBBS",
      institution: "KGMU, Lucknow, Uttar Pradesh",
      year: "2004",
    },
  ],
  memberships: [
    "FSCAI - Society for Cardiovascular Angiography and Interventions (USA)",
    "FISC - Indian Society of Cardiology",
    "Observership in Interventional Cardiology, Asan Medical Centre, Seoul, South Korea",
  ],
  specializations: [
    "Complex Angioplasties",
    "Rota Ablation",
    "OCT & IVUS",
    "IABP & Impella Devices",
    "Pacemaker Implantation",
    "ICD & CRT Implantation",
    "Balloon Valvotomies",
  ],
  achievements: [
    "Performed 1000+ successful angioplasties",
    "Completed 5000+ angiography procedures",
    "International training in South Korea",
    "Published research in cardiac interventions",
  ],
  contact: {
    phone: "+91-9876543210",
    email: "dr.amit@kcarehospital.com",
    whatsapp: "+91-9876543210",
  },
}

export default function DoctorDetail() {
  const [activeTab, setActiveTab] = useState("about")

  const tabs = [
    { id: "about", label: "About", icon: "fa-user-doctor" },
    { id: "experience", label: "Experience", icon: "fa-briefcase" },
    { id: "education", label: "Education", icon: "fa-graduation-cap" },
    { id: "specializations", label: "Specializations", icon: "fa-stethoscope" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0D5094] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] opacity-95"></div>
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M20 20h4v4h-4v-4zm8 0h6v6h-6v-6zm12 0h3v3h-3v-3zm15 0h8v8h-8v-8zm20 0h5v5h-5v-5zm15 0h4v4h-4v-4zm12 0h7v7h-7v-7z'/%3E%3Cpath d='M20 40h3v3h-3v-3zm25 0h6v6h-6v-6zm18 0h4v4h-4v-4zm15 0h7v7h-7v-7zm20 0h5v5h-5v-5z'/%3E%3Cpath d='M20 60h6v6h-6v-6zm15 0h4v4h-4v-4zm20 0h8v8h-8v-8zm18 0h3v3h-3v-3zm15 0h5v5h-5v-5z'/%3E%3Cpath d='M20 80h5v5h-5v-5zm12 0h7v7h-7v-7zm20 0h4v4h-4v-4zm18 0h6v6h-6v-6zm15 0h3v3h-3v-3z'/%3E%3Cpath d='M20 100h4v4h-4v-4zm15 0h8v8h-8v-8zm20 0h3v3h-3v-3zm18 0h5v5h-5v-5zm12 0h6v6h-6v-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "120px 120px",
            }}
          ></div>
          {/* Additional scattered plus icons */}
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Cpath d='M30 30h2v6h6v2h-6v6h-2v-6h-6v-2h6v-6zm40 20h3v9h9v3h-9v9h-3v-9h-9v-3h9v-9zm60 10h1v3h3v1h-3v3h-1v-3h-3v-1h3v-3zm30 40h4v12h12v4h-12v12h-4v-12h-12v-4h12v-12zm-80 30h2v6h6v2h-6v6h-2v-6h-6v-2h6v-6zm-40 20h3v9h9v3h-9v9h-3v-9h-9v-3h9v-9zm120-60h1v3h3v1h-3v3h-1v-3h-3v-1h3v-3z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
              backgroundPosition: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Doctor Info */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <i className="fas fa-heart text-[#DE2225] mr-2"></i>
                  <span className="text-sm font-medium">Medical & General Care!</span>
                </div>

                <h1 className="figtree-semibold text-4xl md:text-5xl lg:text-6xl leading-tight">{doctorData.name}</h1>

                <div className="space-y-2">
                  <p className="poppins-normal text-xl md:text-2xl text-white/90">{doctorData.title}</p>
                  <p className="mukta-normal text-lg text-white/80">{doctorData.specialty}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl figtree-semibold text-white">{doctorData.experience}</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl figtree-semibold text-white">{doctorData.rating}</div>
                  <div className="text-sm text-white/80">Rating</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl figtree-semibold text-white">{doctorData.reviews}</div>
                  <div className="text-sm text-white/80">Reviews</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl figtree-semibold text-white">1000+</div>
                  <div className="text-sm text-white/80">Procedures</div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${doctorData.contact.phone}`}
                  className="inline-flex items-center px-6 py-3 bg-[#DE2225] hover:bg-[#c41e21] text-white rounded-lg transition-colors duration-300 figtree-semibold"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </a>

                <a
                  href={`https://wa.me/${doctorData.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 figtree-semibold"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp
                </a>

                <button className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg transition-colors duration-300 figtree-semibold border border-white/20">
                  <i className="fas fa-calendar mr-2"></i>
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Doctor Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-[#DE2225]/20 to-transparent rounded-2xl"></div>
                <img
                  src={doctorData.image || "/placeholder.svg"}
                  alt={doctorData.name}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
                />

                {/* Experience Badge */}
                <div className="absolute bottom-6 right-6 bg-white rounded-full p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl figtree-semibold text-[#DE2225]">{doctorData.experience}</div>
                    <div className="text-sm text-gray-600 mukta-normal">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <i className="fas fa-clock text-[#0D5094] mr-3"></i>
              <div>
                <div className="figtree-semibold text-gray-900">Availability</div>
                <div className="text-sm text-gray-600">{doctorData.availability}</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <i className="fas fa-rupee-sign text-[#0D5094] mr-3"></i>
              <div>
                <div className="figtree-semibold text-gray-900">Consultation Fee</div>
                <div className="text-sm text-gray-600">{doctorData.consultationFee}</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <i className="fas fa-language text-[#0D5094] mr-3"></i>
              <div>
                <div className="figtree-semibold text-gray-900">Languages</div>
                <div className="text-sm text-gray-600">{doctorData.languages.join(", ")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-6">
              <h3 className="figtree-semibold text-lg text-gray-900 mb-4">Quick Actions</h3>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-[#0D5094] hover:bg-[#0a4275] text-white rounded-lg transition-colors duration-300 figtree-semibold">
                  <i className="fas fa-calendar-plus mr-2"></i>
                  Book Appointment
                </button>

                <button className="w-full flex items-center justify-center px-4 py-3 bg-[#DE2225] hover:bg-[#c41e21] text-white rounded-lg transition-colors duration-300 figtree-semibold">
                  <i className="fas fa-video mr-2"></i>
                  Video Consultation
                </button>

                <a
                  href={`mailto:${doctorData.contact.email}`}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-300 figtree-semibold"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Send Email
                </a>
              </div>

              {/* Achievements */}
              <div className="mt-8">
                <h4 className="figtree-semibold text-gray-900 mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  {doctorData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <i className="fas fa-trophy text-[#DE2225] mt-1 mr-3 text-sm"></i>
                      <span className="text-sm text-gray-600 mukta-normal">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                        activeTab === tab.id
                          ? "border-[#0D5094] text-[#0D5094] figtree-semibold"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <i className={`fas ${tab.icon} mr-2`}></i>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {/* About Tab */}
                {activeTab === "about" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="figtree-semibold text-xl text-gray-900 mb-4">
                        About Dr. {doctorData.name.split(" ").slice(1).join(" ")}
                      </h3>
                      <p className="text-gray-600 mukta-normal leading-relaxed text-lg">{doctorData.about}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="figtree-semibold text-lg text-gray-900 mb-4">Specializations</h4>
                        <div className="space-y-2">
                          {doctorData.specializations.slice(0, 4).map((spec, index) => (
                            <div key={index} className="flex items-center">
                              <i className="fas fa-check-circle text-[#0D5094] mr-3"></i>
                              <span className="text-gray-600 mukta-normal">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="figtree-semibold text-lg text-gray-900 mb-4">Professional Memberships</h4>
                        <div className="space-y-2">
                          {doctorData.memberships.slice(0, 2).map((membership, index) => (
                            <div key={index} className="flex items-start">
                              <i className="fas fa-certificate text-[#DE2225] mt-1 mr-3"></i>
                              <span className="text-gray-600 mukta-normal text-sm">{membership}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Experience Tab */}
                {activeTab === "experience" && (
                  <div className="space-y-6">
                    <h3 className="figtree-semibold text-xl text-gray-900 mb-6">Work Experience</h3>
                    <div className="space-y-6">
                      {doctorData.workExperience.map((exp, index) => (
                        <div key={index} className="relative pl-8 pb-6 border-l-2 border-[#0D5094] last:border-l-0">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-[#0D5094] rounded-full"></div>
                          <div className="bg-white border rounded-lg p-6 shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                              <h4 className="figtree-semibold text-lg text-gray-900">{exp.position}</h4>
                              <span className="text-sm text-[#DE2225] figtree-semibold">{exp.duration}</span>
                            </div>
                            <p className="text-[#0D5094] poppins-normal mb-2">{exp.hospital}</p>
                            <p className="text-gray-600 mukta-normal">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education Tab */}
                {activeTab === "education" && (
                  <div className="space-y-6">
                    <h3 className="figtree-semibold text-xl text-gray-900 mb-6">Education & Training</h3>
                    <div className="grid gap-6">
                      {doctorData.education.map((edu, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-[#0D5094]/5 to-transparent border-l-4 border-[#0D5094] p-6 rounded-r-lg"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h4 className="figtree-semibold text-lg text-gray-900 mb-2">{edu.degree}</h4>
                              <p className="text-[#0D5094] poppins-normal">{edu.institution}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm figtree-semibold bg-[#DE2225] text-white">
                                {edu.year}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h4 className="figtree-semibold text-lg text-gray-900 mb-4">Professional Memberships</h4>
                      <div className="space-y-3">
                        {doctorData.memberships.map((membership, index) => (
                          <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                            <i className="fas fa-award text-[#DE2225] mt-1 mr-3"></i>
                            <span className="text-gray-700 mukta-normal">{membership}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Specializations Tab */}
                {activeTab === "specializations" && (
                  <div className="space-y-6">
                    <h3 className="figtree-semibold text-xl text-gray-900 mb-6">Areas of Specialization</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {doctorData.specializations.map((spec, index) => (
                        <div
                          key={index}
                          className="group bg-white border-2 border-gray-100 hover:border-[#0D5094] rounded-lg p-6 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-[#0D5094]/10 group-hover:bg-[#0D5094] rounded-lg flex items-center justify-center mr-4 transition-colors duration-300">
                              <i className="fas fa-stethoscope text-[#0D5094] group-hover:text-white transition-colors duration-300"></i>
                            </div>
                            <div>
                              <h4 className="figtree-semibold text-gray-900 group-hover:text-[#0D5094] transition-colors duration-300">
                                {spec}
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] rounded-xl p-8 text-white mt-8">
                      <div className="text-center">
                        <h4 className="figtree-semibold text-2xl mb-4">Ready to Consult?</h4>
                        <p className="mukta-normal text-lg mb-6 text-white/90">
                          Book your appointment with Dr. {doctorData.name.split(" ").slice(1).join(" ")} today
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <button className="px-8 py-3 bg-[#DE2225] hover:bg-[#c41e21] text-white rounded-lg figtree-semibold transition-colors duration-300">
                            Book Appointment
                          </button>
                          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg figtree-semibold border border-white/20 transition-colors duration-300">
                            Call Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
