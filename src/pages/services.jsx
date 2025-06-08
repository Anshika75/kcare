"use client"

import { useState } from "react"

const servicesData = [
  {
    id: 1,
    name: "Cardiology",
    hindiName: "हृदय रोग",
    description: "Comprehensive heart care with advanced diagnostic and treatment facilities",
    features: ["24/7 Emergency Care", "Advanced Cath Lab", "Expert Cardiologists", "Modern Equipment"],
    iconClass: "fa-solid fa-heart",
    color: "from-red-500 to-pink-600",
  },
  {
    id: 2,
    name: "Orthopedics",
    hindiName: "हड्डी रोग",
    description: "Complete bone and joint care with minimally invasive surgical techniques",
    features: ["Joint Replacement", "Sports Medicine", "Trauma Care", "Rehabilitation"],
    iconClass: "fa-solid fa-bone",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    name: "Neurology",
    hindiName: "न्यूरोलॉजी",
    description: "Advanced neurological care for brain and nervous system disorders",
    features: ["Brain Surgery", "Stroke Care", "Epilepsy Treatment", "Neuroimaging"],
    iconClass: "fa-solid fa-brain",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 4,
    name: "Gynecology",
    hindiName: "स्त्री रोग",
    description: "Comprehensive women's health services with compassionate care",
    features: ["Maternity Care", "Gynecological Surgery", "Family Planning", "Women's Wellness"],
    iconClass: "fa-solid fa-venus",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 5,
    name: "Pediatrics",
    hindiName: "बाल रोग",
    description: "Specialized care for infants, children, and adolescents",
    features: ["Newborn Care", "Vaccination", "Growth Monitoring", "Pediatric Surgery"],
    iconClass: "fa-solid fa-baby",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 6,
    name: "Emergency Care",
    hindiName: "आपातकालीन देखभाल",
    description: "Round-the-clock emergency medical services",
    features: ["24/7 Availability", "Trauma Center", "Ambulance Service", "Critical Care"],
    iconClass: "fa-solid fa-truck-medical",
    color: "from-orange-500 to-red-600",
  },
]

const processSteps = [
  {
    title: "Book Your Appointment",
    description: "Schedule your consultation through our easy booking system",
    icon: "fa-calendar-plus",
    step: "01",
  },
  {
    title: "Meet Our Medical Team",
    description: "Connect with our experienced doctors and specialists",
    icon: "fa-user-doctor",
    step: "02",
  },
  {
    title: "Personalized Treatment Plan",
    description: "Receive customized care tailored to your specific needs",
    icon: "fa-clipboard-list",
    step: "03",
  },
  {
    title: "Follow Ongoing Support",
    description: "Continuous monitoring and support throughout your treatment",
    icon: "fa-heart-pulse",
    step: "04",
  },
]

const faqData = [
  {
    question: "What Emergency Services Are Available 24/7?",
    answer:
      "Our emergency department operates round-the-clock with trauma care, cardiac emergency services, stroke care, and critical care units. We have ambulance services and a fully equipped emergency room with experienced emergency physicians.",
  },
  {
    question: "How Do I Book An Appointment With A Specialist?",
    answer:
      "You can book appointments through our online portal, by calling our helpline, or by visiting the hospital reception. We offer both in-person and telemedicine consultations based on your preference and medical needs.",
  },
  {
    question: "What Insurance Plans Do You Accept?",
    answer:
      "We accept most major insurance plans including government schemes like Ayushman Bharat, CGHS, ECHS, and private insurance providers. Our billing team can help verify your coverage and assist with claim processing.",
  },
  {
    question: "Do You Provide Home Healthcare Services?",
    answer:
      "Yes, we offer comprehensive home healthcare services including nursing care, physiotherapy, diagnostic services, and post-operative care. Our trained healthcare professionals provide quality care in the comfort of your home.",
  },
]

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState(servicesData[0])
  const [openFaq, setOpenFaq] = useState(0)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    doctor: "",
    date: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0D5094] via-[#1a6bb8] to-[#0D5094] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Medical Icons */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
            <i className="fas fa-heartbeat text-white/30 text-2xl"></i>
          </div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center animate-bounce">
            <i className="fas fa-stethoscope text-white/30 text-xl"></i>
          </div>
          <div className="absolute bottom-32 left-20 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
            <i className="fas fa-user-md text-white/30 text-xl"></i>
          </div>
          <div className="absolute bottom-20 right-32 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center animate-bounce">
            <i className="fas fa-pills text-white/30 text-lg"></i>
          </div>

          {/* Geometric Shapes */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-white/10 rotate-45"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-3 h-3 bg-[#DE2225] rounded-full mr-3 animate-pulse"></div>
              <span className="text-white figtree-semibold">Advanced Medical Care & Wellness</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="figtree-semibold text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                Comprehensive
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Healthcare Services
                </span>
              </h1>
              <p className="poppins-normal text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Experience world-class medical care with our state-of-the-art facilities, expert healthcare
                professionals, and patient-centered approach to wellness and healing.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mt-12">
              {[
                { icon: "fa-user-doctor", text: "Expert Doctors" },
                { icon: "fa-hospital", text: "Modern Facilities" },
                { icon: "fa-clock", text: "24/7 Emergency" },
                { icon: "fa-heart-pulse", text: "Advanced Care" },
                { icon: "fa-shield-heart", text: "Patient Safety" },
                { icon: "fa-hands-holding-heart", text: "Compassionate" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-[#DE2225]/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#DE2225]/30 transition-colors duration-300">
                      <i className={`fas ${item.icon} text-white text-lg`}></i>
                    </div>
                    <span className="mukta-normal text-white/90 text-sm">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <button className="px-8 py-4 bg-[#DE2225] hover:bg-[#c41e21] text-white rounded-xl figtree-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                Book Appointment
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl figtree-semibold text-lg border border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How Our Services Work */}
      <div className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.4'%3E%3Cpath d='M20 20h4v4h-4v-4zm8 0h6v6h-6v-6zm12 0h3v3h-3v-3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#0D5094]/10 rounded-full mb-6">
              <span className="text-[#0D5094] figtree-semibold">Our Process</span>
            </div>
            <h2 className="figtree-semibold text-4xl md:text-5xl lg:text-6xl text-[#0D5094] mb-6">
              How Our Medical Services Work
            </h2>
            <p className="poppins-normal text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined approach ensures you receive the best possible care from consultation to recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#0D5094] to-gray-300 z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100 group-hover:border-[#0D5094]/20">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#DE2225] to-[#c41e21] rounded-full flex items-center justify-center shadow-lg">
                    <span className="figtree-semibold text-white text-lg">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0D5094] to-[#1a6bb8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className={`fas ${step.icon} text-white text-2xl`}></i>
                  </div>

                  {/* Content */}
                  <h3 className="figtree-semibold text-xl text-[#0D5094] mb-4">{step.title}</h3>
                  <p className="mukta-normal text-gray-600 leading-relaxed">{step.description}</p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D5094]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#0D5094]/10 rounded-full mb-6">
              <span className="text-[#0D5094] figtree-semibold">Medical Specialties</span>
            </div>
            <h2 className="figtree-semibold text-4xl md:text-5xl lg:text-6xl text-[#0D5094] mb-6">
              Our Comprehensive Services
            </h2>
            <p className="poppins-normal text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of medical specialties designed to provide you with exceptional healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <i className={`${service.iconClass} text-white text-3xl`}></i>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="figtree-semibold text-2xl text-[#0D5094] mb-2">{service.name}</h3>
                    <p className="mukta-normal text-sm text-gray-500 mb-4">{service.hindiName}</p>
                    <p className="poppins-normal text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-5 h-5 bg-[#DE2225] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <i className="fas fa-check text-white text-xs"></i>
                        </div>
                        <span className="mukta-normal text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 bg-[#0D5094] hover:bg-[#0a4275] text-white rounded-xl figtree-semibold transition-all duration-300 group-hover:transform group-hover:scale-105">
                    Learn More
                  </button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D5094]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#0D5094]/10 rounded-full mb-6">
              <span className="text-[#0D5094] figtree-semibold">FAQ</span>
            </div>
            <h2 className="figtree-semibold text-4xl md:text-5xl lg:text-6xl text-[#0D5094] mb-6">
              Your Guide To Healthcare Questions
            </h2>
            <p className="poppins-normal text-xl text-gray-600">
              Find answers to commonly asked questions about our medical services and facilities
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#0D5094]/20 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <button
                  className={`w-full px-8 py-6 text-left flex items-center justify-between transition-all duration-300 ${
                    openFaq === index
                      ? "bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white"
                      : "bg-white hover:bg-gray-50 text-gray-900"
                  }`}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="figtree-semibold text-lg pr-4">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaq === index ? "bg-white/20" : "bg-[#0D5094]/10"
                    }`}
                  >
                    <i
                      className={`fas fa-chevron-${
                        openFaq === index ? "up" : "down"
                      } transition-transform duration-300 ${openFaq === index ? "text-white" : "text-[#0D5094]"}`}
                    ></i>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 py-6 bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white">
                    <p className="mukta-normal text-lg leading-relaxed opacity-95">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact/Booking Section */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#0D5094]/10 rounded-full mb-6">
              <span className="text-[#0D5094] figtree-semibold">Get Started</span>
            </div>
            <h2 className="figtree-semibold text-4xl md:text-5xl lg:text-6xl text-[#0D5094] mb-6">
              Book Your Consultation
            </h2>
            <p className="poppins-normal text-xl text-gray-600">
              Take the first step towards better health with our expert medical team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "fa-clock",
                    title: "SCHEDULE",
                    info: "Mon-Sat: 9 AM – 8 PM",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: "fa-map-marker-alt",
                    title: "LOCATION",
                    info: "Kanpur, Uttar Pradesh",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: "fa-envelope",
                    title: "EMAIL",
                    info: "info@kcarehospital.com",
                    color: "from-purple-500 to-indigo-500",
                  },
                  {
                    icon: "fa-phone",
                    title: "PHONE",
                    info: "+91 123 456 7890",
                    color: "from-red-500 to-pink-500",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <i className={`fas ${contact.icon} text-white text-xl`}></i>
                      </div>
                      <div>
                        <h3 className="figtree-semibold text-[#0D5094] text-sm mb-1">{contact.title}</h3>
                        <p className="mukta-normal text-gray-600">{contact.info}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-[#0D5094] to-[#1a6bb8] rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 w-24 h-24 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="relative">
                  <h3 className="figtree-semibold text-2xl mb-4">Emergency Services</h3>
                  <p className="mukta-normal text-white/90 mb-6">
                    Our emergency department is available 24/7 for urgent medical care. Call our emergency hotline for
                    immediate assistance.
                  </p>
                  <button className="px-6 py-3 bg-[#DE2225] hover:bg-[#c41e21] text-white rounded-xl figtree-semibold transition-colors duration-300">
                    Emergency: +91 123 456 7890
                  </button>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0D5094] to-[#1a6bb8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar-check text-white text-2xl"></i>
                </div>
                <h3 className="figtree-semibold text-2xl text-[#0D5094] mb-2">Book An Appointment</h3>
                <p className="mukta-normal text-gray-600">Schedule your consultation with our medical experts</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm figtree-semibold text-gray-700 mb-2">Full Name*</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D5094] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm figtree-semibold text-gray-700 mb-2">Phone Number*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D5094] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm figtree-semibold text-gray-700 mb-2">Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D5094] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm figtree-semibold text-gray-700 mb-2">Service Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D5094] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Service</option>
                      {servicesData.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm figtree-semibold text-gray-700 mb-2">Select Doctor*</label>
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D5094] focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select Doctor</option>
                      <option value="dr-amit">Dr. Amit Kumar</option>
                      <option value="dr-priya">Dr. Priya Sharma</option>
                      <option value="dr-rajesh">Dr. Rajesh Patel</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm figtree-semibold text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D5094] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm figtree-semibold text-gray-700 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D5094] focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your health concerns or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#DE2225] to-[#c41e21] hover:from-[#c41e21] hover:to-[#b01d20] text-white rounded-xl figtree-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Complete Your Appointment Now
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
