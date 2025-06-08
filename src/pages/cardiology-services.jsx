"use client"

import { useState } from "react"

const cardiologyService = {
  id: 1,
  name: "Cardiology",
  hindiName: "हृदय रोग विभाग",
  tagline: "Advanced Heart Care & Cardiovascular Excellence",
  description:
    "Our Cardiology department provides comprehensive heart care with state-of-the-art technology, experienced cardiologists, and personalized treatment plans for all cardiovascular conditions.",

  keyFeatures: [
    "24/7 Cardiac Emergency Care",
    "Advanced Cardiac Catheterization Lab",
    "Non-invasive Cardiac Imaging",
    "Preventive Cardiology Programs",
    "Cardiac Rehabilitation Services",
    "Minimally Invasive Procedures",
  ],

  conditions: [
    {
      name: "Coronary Artery Disease",
      description: "Comprehensive treatment for blocked or narrowed heart arteries",
      icon: "fa-heart-crack",
    },
    {
      name: "Heart Rhythm Disorders",
      description: "Advanced treatment for arrhythmias and irregular heartbeats",
      icon: "fa-heart-pulse",
    },
    {
      name: "Heart Failure",
      description: "Specialized care for weakened heart muscle conditions",
      icon: "fa-heart-circle-xmark",
    },
    {
      name: "Valvular Heart Disease",
      description: "Expert treatment for heart valve problems and replacements",
      icon: "fa-heart",
    },
    {
      name: "Hypertension",
      description: "Comprehensive blood pressure management and control",
      icon: "fa-heartbeat",
    },
    {
      name: "Congenital Heart Disease",
      description: "Specialized care for birth-related heart conditions",
      icon: "fa-baby",
    },
  ],

  procedures: [
    {
      name: "Cardiac Catheterization",
      description: "Minimally invasive procedure to diagnose and treat heart conditions",
      duration: "1-2 hours",
      recovery: "Same day discharge",
    },
    {
      name: "Angioplasty & Stenting",
      description: "Opening blocked arteries with balloon and stent placement",
      duration: "1-3 hours",
      recovery: "1-2 days",
    },
    {
      name: "Pacemaker Implantation",
      description: "Device implantation to regulate heart rhythm",
      duration: "2-3 hours",
      recovery: "2-3 days",
    },
    {
      name: "Bypass Surgery",
      description: "Surgical creation of new pathways around blocked arteries",
      duration: "3-6 hours",
      recovery: "5-7 days",
    },
  ],

  technology: [
    {
      name: "3D Echocardiography",
      description: "Advanced heart imaging for precise diagnosis",
    },
    {
      name: "CT Coronary Angiography",
      description: "Non-invasive coronary artery imaging",
    },
    {
      name: "Cardiac MRI",
      description: "Detailed heart structure and function analysis",
    },
    {
      name: "Digital Cath Lab",
      description: "State-of-the-art catheterization laboratory",
    },
  ],

  doctors: [
    {
      name: "Dr. Amit Kumar",
      designation: "Director of Cardiology",
      specialization: "Interventional Cardiology",
      experience: "18+ Years",
      education: "DM Cardiology, FSCAI",
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Senior Cardiologist",
      specialization: "Non-invasive Cardiology",
      experience: "15+ Years",
      education: "DM Cardiology, FICC",
    },
    {
      name: "Dr. Rajesh Patel",
      designation: "Cardiac Surgeon",
      specialization: "Cardiac Surgery",
      experience: "20+ Years",
      education: "MCh Cardiac Surgery",
    },
  ],

  processSteps: [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive cardiac evaluation and medical history review",
      icon: "fa-user-doctor",
    },
    {
      step: "02",
      title: "Diagnostic Testing",
      description: "Advanced cardiac tests including ECG, Echo, and stress tests",
      icon: "fa-heartbeat",
    },
    {
      step: "03",
      title: "Treatment Planning",
      description: "Personalized treatment plan based on your specific condition",
      icon: "fa-clipboard-list",
    },
    {
      step: "04",
      title: "Treatment & Follow-up",
      description: "Expert treatment with continuous monitoring and support",
      icon: "fa-heart-pulse",
    },
  ],

  faqs: [
    {
      question: "What are the warning signs of heart disease?",
      answer:
        "Common warning signs include chest pain, shortness of breath, fatigue, irregular heartbeat, swelling in legs or feet, and dizziness. If you experience any of these symptoms, especially chest pain, seek immediate medical attention.",
    },
    {
      question: "How often should I get my heart checked?",
      answer:
        "Adults should have regular cardiac screenings starting at age 40, or earlier if you have risk factors like family history, diabetes, high blood pressure, or smoking. Your cardiologist will recommend the appropriate screening schedule based on your individual risk profile.",
    },
    {
      question: "What is the recovery time after cardiac procedures?",
      answer:
        "Recovery time varies by procedure. Minimally invasive procedures like angioplasty may require 1-2 days, while cardiac surgery may need 5-7 days in hospital and several weeks for full recovery. Our cardiac rehabilitation program helps ensure optimal recovery.",
    },
    {
      question: "Do you provide emergency cardiac care?",
      answer:
        "Yes, our cardiac emergency team is available 24/7. We have a dedicated cardiac ICU, emergency catheterization lab, and experienced cardiac surgeons on call for heart attacks, cardiac arrests, and other cardiac emergencies.",
    },
  ],
}

const relatedServices = [
  {
    name: "Neurology",
    hindiName: "न्यूरोलॉजी",
    description: "Advanced neurological care for brain and nervous system disorders",
    iconClass: "fa-solid fa-brain",
  },
  {
    name: "Orthopedics",
    hindiName: "हड्डी रोग",
    description: "Complete bone and joint care with minimally invasive surgical techniques",
    iconClass: "fa-solid fa-bone",
  },
  {
    name: "Emergency Care",
    hindiName: "आपातकालीन देखभाल",
    description: "Round-the-clock emergency medical services",
    iconClass: "fa-solid fa-truck-medical",
  },
  {
    name: "General Medicine",
    hindiName: "सामान्य चिकित्सा",
    description: "Comprehensive primary healthcare and preventive medicine",
    iconClass: "fa-solid fa-stethoscope",
  },
]

// SVG Icon Components
const HeartIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const StethoscopeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5 6 2v20l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19H5V5h14v14z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
)

const HospitalIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l-8 8v10h16V10l-8-8zm6 16h-2v-2h-4v2H8v-8l4-4 4 4v8z" />
    <path d="M11 11h2v2h-2v-2zm0-2h2v2h-2V9z" />
  </svg>
)

const ClockIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
)

const ShieldIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
    <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>
)

const HandsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm0-6h16v-1c0-4.42-3.58-8-8-8S4 4.58 4 9v0z" />
    <circle cx="12" cy="17" r="2" />
  </svg>
)

const MicroscopeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.5 12c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zm0-6c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 7.38 9.5 6z" />
    <path d="M20 21h-2v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-.58.16-1.12.42-1.6L9 12.5c-1.93 0-3.5-1.57-3.5-3.5S7.07 5.5 9 5.5c.58 0 1.12.16 1.6.42L12.5 4c0-1.93 1.57-3.5 3.5-3.5S19.5 2.07 19.5 4c0 .58-.16 1.12-.42 1.6L21 7.5c1.93 0 3.5 1.57 3.5 3.5S22.93 14.5 21 14.5c-.58 0-1.12-.16-1.6-.42L17.5 16c0 1.93-1.57 3.5-3.5 3.5H11v2H9v-2H4v-2h5z" />
  </svg>
)

// Cardiac Condition SVG Icons
const CoronaryArteryIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    <path d="M8 10h8M8 12h6M8 14h4" stroke="white" strokeWidth="1" fill="none" />
  </svg>
)

const HeartRhythmIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    <path d="M6 12l2-4 2 8 2-4 2 0 2-2 2 4" stroke="white" strokeWidth="2" fill="none" />
  </svg>
)

const HeartFailureIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" fill="none" />
    <path d="M10 12l1.5 1.5L15 10" stroke="white" strokeWidth="2" fill="none" />
  </svg>
)

const ValvularHeartIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    <rect x="10" y="10" width="4" height="4" stroke="white" strokeWidth="1.5" fill="none" />
    <path d="M12 8v2M12 14v2M8 12h2M14 12h2" stroke="white" strokeWidth="1.5" />
  </svg>
)

const HypertensionIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" />
    <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="1" opacity="0.7" />
  </svg>
)

const CongenitalHeartIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    <circle cx="9" cy="9" r="2" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="15" cy="15" r="2" stroke="white" strokeWidth="1.5" fill="none" />
    <path d="M11 9h2v6" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
)

export default function CardiologyServiceDetail() {
  const [openFaq, setOpenFaq] = useState(0)
  const [selectedProcedure, setSelectedProcedure] = useState(null)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    timeSlot: "",
    consultationType: "in-person",
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
    console.log("Cardiology appointment booked:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0D5094] via-[#1a6bb8] to-[#0D5094] overflow-hidden">
        {/* Animated Heart Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-16 h-16 bg-red-500/20 rounded-full animate-pulse flex items-center justify-center">
            <HeartIcon className="w-8 h-8 text-red-300" />
          </div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full animate-bounce flex items-center justify-center">
            <StethoscopeIcon className="w-6 h-6 text-white/30" />
          </div>
          <div className="absolute bottom-32 left-20 w-14 h-14 bg-red-500/20 rounded-full animate-pulse flex items-center justify-center">
            <HeartIcon className="w-7 h-7 text-red-300" />
          </div>

          {/* EKG Line Animation */}
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path
                d="M0,50 L200,50 L220,20 L240,80 L260,50 L400,50 L420,20 L440,80 L460,50 L600,50 L620,20 L640,80 L660,50 L800,50 L820,20 L840,80 L860,50 L1000,50 L1020,20 L1040,80 L1060,50 L1200,50"
                stroke="white"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            {/* Breadcrumb */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white/80 text-sm">Services</span>
              <i className="fas fa-chevron-right text-white/60 mx-2 text-xs"></i>
              <span className="text-white figtree-semibold text-sm">Cardiology</span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl mb-6">
                <HeartIcon className="w-12 h-12 text-white" />
              </div>

              <h1 className="figtree-semibold text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                {cardiologyService.name}
                <span className="block text-3xl md:text-4xl lg:text-5xl text-white/80 mt-2">
                  {cardiologyService.hindiName}
                </span>
              </h1>

              <p className="poppins-normal text-2xl md:text-3xl text-white/90 font-light">
                {cardiologyService.tagline}
              </p>

              <p className="mukta-normal text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                {cardiologyService.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mt-12">
              {[
                { icon: StethoscopeIcon, text: "Expert Doctors" },
                { icon: HospitalIcon, text: "Modern Facilities" },
                { icon: ClockIcon, text: "24/7 Emergency" },
                { icon: HeartIcon, text: "Advanced Care" },
                { icon: ShieldIcon, text: "Patient Safety" },
                { icon: HandsIcon, text: "Compassionate" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-[#DE2225]/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#DE2225]/30 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="mukta-normal text-white/90 text-sm">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <button className="px-8 py-4 bg-[#DE2225] hover:bg-[#c41e21] text-white rounded-xl figtree-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                Book Cardiology Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl figtree-semibold text-lg border border-white/20 transition-all duration-300">
                Emergency Cardiac Care
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conditions We Treat */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="figtree-semibold text-4xl md:text-5xl text-[#0D5094] mb-6">Cardiac Conditions We Treat</h2>
            <p className="poppins-normal text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert cardiologists provide comprehensive care for a wide range of heart conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Coronary Artery Disease",
                description: "Comprehensive treatment for blocked or narrowed heart arteries",
                SvgIcon: CoronaryArteryIcon,
              },
              {
                name: "Heart Rhythm Disorders",
                description: "Advanced treatment for arrhythmias and irregular heartbeats",
                SvgIcon: HeartRhythmIcon,
              },
              {
                name: "Heart Failure",
                description: "Specialized care for weakened heart muscle conditions",
                SvgIcon: HeartFailureIcon,
              },
              {
                name: "Valvular Heart Disease",
                description: "Expert treatment for heart valve problems and replacements",
                SvgIcon: ValvularHeartIcon,
              },
              {
                name: "Hypertension",
                description: "Comprehensive blood pressure management and control",
                SvgIcon: HypertensionIcon,
              },
              {
                name: "Congenital Heart Disease",
                description: "Specialized care for birth-related heart conditions",
                SvgIcon: CongenitalHeartIcon,
              },
            ].map((condition, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-red-200 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <condition.SvgIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="figtree-semibold text-xl text-[#0D5094] group-hover:text-red-600 transition-colors duration-300">
                    {condition.name}
                  </h3>
                  <p className="mukta-normal text-gray-600 leading-relaxed">{condition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Treatment Process */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="figtree-semibold text-4xl md:text-5xl text-[#0D5094] mb-6">
              Our Cardiology Treatment Process
            </h2>
            <p className="poppins-normal text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to complete recovery, we guide you through every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Comprehensive cardiac evaluation and medical history review",
                SvgIcon: () => (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589 8 8zm-1-13h2v6h-2v-6zm0 8h2v2h-2v-2z" />
                    <circle cx="12" cy="8" r="1" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Diagnostic Testing",
                description: "Advanced cardiac tests including ECG, Echo, and stress tests",
                SvgIcon: () => (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                    <path d="M9 11l2-4 2 8 2-4h2" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Treatment Planning",
                description: "Personalized treatment plan based on your specific condition",
                SvgIcon: () => (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    <circle cx="5" cy="8" r="1" />
                    <circle cx="5" cy="12" r="1" />
                    <circle cx="5" cy="16" r="1" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Treatment & Follow-up",
                description: "Expert treatment with continuous monitoring and support",
                SvgIcon: () => (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    <path d="M12 8v8m-4-4h8" stroke="white" strokeWidth="1" fill="none" />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-red-500 to-gray-300 z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="figtree-semibold text-white text-lg">{step.step}</span>
                  </div>

                  {/* Icon with SVG */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0D5094] to-[#1a6bb8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.SvgIcon />
                  </div>

                  {/* Content */}
                  <h3 className="figtree-semibold text-xl text-[#0D5094] mb-4">{step.title}</h3>
                  <p className="mukta-normal text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Procedures & Technology */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Procedures */}
            <div>
              <h2 className="figtree-semibold text-4xl text-[#0D5094] mb-8">Advanced Cardiac Procedures</h2>
              <div className="space-y-6">
                {cardiologyService.procedures.map((procedure, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProcedure(selectedProcedure === index ? null : index)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="figtree-semibold text-xl text-[#0D5094] mb-2">{procedure.name}</h3>
                        <p className="mukta-normal text-gray-600 mb-4">{procedure.description}</p>

                        {selectedProcedure === index && (
                          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                            <div>
                              <span className="text-sm figtree-semibold text-gray-700">Duration:</span>
                              <p className="text-sm mukta-normal text-gray-600">{procedure.duration}</p>
                            </div>
                            <div>
                              <span className="text-sm figtree-semibold text-gray-700">Recovery:</span>
                              <p className="text-sm mukta-normal text-gray-600">{procedure.recovery}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <i
                          className={`fas fa-chevron-${selectedProcedure === index ? "up" : "down"} text-[#0D5094] transition-transform duration-300`}
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology */}
            <div>
              <h2 className="figtree-semibold text-4xl text-[#0D5094] mb-8">Advanced Technology</h2>
              <div className="space-y-6">
                {cardiologyService.technology.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#0D5094]/5 to-red-50 border border-[#0D5094]/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0D5094] to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MicroscopeIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="figtree-semibold text-lg text-[#0D5094] mb-2">{tech.name}</h3>
                        <p className="mukta-normal text-gray-600">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Cardiology Team */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="figtree-semibold text-4xl md:text-5xl text-[#0D5094] mb-6">Our Expert Cardiology Team</h2>
            <p className="poppins-normal text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced cardiologists dedicated to your heart health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardiologyService.doctors.map((doctor, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center space-y-4">
                  {/* Doctor Avatar */}
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0D5094] to-red-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-user-md text-white text-3xl"></i>
                  </div>

                  <div>
                    <h3 className="figtree-semibold text-2xl text-[#0D5094] mb-1">{doctor.name}</h3>
                    <p className="poppins-normal text-lg text-red-600 mb-2">{doctor.designation}</p>
                    <p className="mukta-normal text-gray-600 mb-4">{doctor.specialization}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <i className="fas fa-graduation-cap text-[#0D5094]"></i>
                      <span className="mukta-normal text-gray-600">{doctor.education}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <ClockIcon className="w-4 h-4 text-[#0D5094]" />
                      <span className="mukta-normal text-gray-600">{doctor.experience}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-[#0D5094] hover:bg-red-600 text-white rounded-xl figtree-semibold transition-colors duration-300">
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="figtree-semibold text-4xl md:text-5xl text-[#0D5094] mb-6">Cardiology FAQs</h2>
            <p className="poppins-normal text-xl text-gray-600">Common questions about our cardiac care services</p>
          </div>

          <div className="space-y-4">
            {cardiologyService.faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-red-200 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <button
                  className={`w-full px-8 py-6 text-left flex items-center justify-between transition-all duration-300 ${
                    openFaq === index
                      ? "bg-gradient-to-r from-[#0D5094] to-red-500 text-white"
                      : "bg-white hover:bg-gray-50 text-gray-900"
                  }`}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="figtree-semibold text-lg pr-4">{faq.question}</span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaq === index ? "bg-white/20" : "bg-[#0D5094]/10"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openFaq === index ? "text-white rotate-180" : "text-[#0D5094]"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 py-6 bg-gradient-to-r from-[#0D5094] to-red-500 text-white">
                    <p className="mukta-normal text-lg leading-relaxed opacity-95">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="figtree-semibold text-4xl md:text-5xl text-[#0D5094] mb-6">
              Book Your Cardiology Consultation
            </h2>
            <p className="poppins-normal text-xl text-gray-600">
              Schedule an appointment with our expert cardiologists
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm figtree-semibold text-gray-700 mb-3">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm figtree-semibold text-gray-700 mb-3">Phone Number*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm figtree-semibold text-gray-700 mb-3">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm figtree-semibold text-gray-700 mb-3">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm figtree-semibold text-gray-700 mb-3">Time Slot</label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm figtree-semibold text-gray-700 mb-3">Consultation Type</label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="in-person">In-Person Consultation</option>
                    <option value="video">Video Consultation</option>
                    <option value="emergency">Emergency Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm figtree-semibold text-gray-700 mb-3">Message / Symptoms</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Please describe your symptoms or concerns..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-gradient-to-r from-[#DE2225] to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl figtree-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
                >
                  Book Cardiology Appointment
                  <HeartIcon className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="figtree-semibold text-4xl md:text-5xl text-[#0D5094] mb-6">Related Services</h2>
            <p className="poppins-normal text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our other medical specialties and comprehensive healthcare services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Neurology",
                hindiName: "न्यूरोलॉजी",
                description: "Advanced neurological care for brain and nervous system disorders",
                SvgIcon: () => (
                  <svg className="w-6 h-6 text-[#0D5094]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    <circle cx="12" cy="8" r="2" />
                    <path d="M8 14c0-2.21 1.79-4 4-4s4 1.79 4 4" />
                  </svg>
                ),
              },
              {
                name: "Orthopedics",
                hindiName: "हड्डी रोग",
                description: "Complete bone and joint care with minimally invasive surgical techniques",
                SvgIcon: () => (
                  <svg className="w-6 h-6 text-[#0D5094]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    <rect x="10" y="6" width="4" height="12" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="12" cy="19" r="2" />
                  </svg>
                ),
              },
              {
                name: "Emergency Care",
                hindiName: "आपातकालीन देखभाल",
                description: "Round-the-clock emergency medical services",
                SvgIcon: () => (
                  <svg className="w-6 h-6 text-[#0D5094]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    <path d="M13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3z" />
                  </svg>
                ),
              },
              {
                name: "General Medicine",
                hindiName: "सामान्य चिकित्सा",
                description: "Comprehensive primary healthcare and preventive medicine",
                SvgIcon: () => (
                  <svg className="w-6 h-6 text-[#0D5094]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6m0 10v6m11-7h-6m-10 0H1" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg bg-gradient-to-br from-[#0D5094]/5 to-gray-50 border-gray-200"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-3 bg-[#0D5094]/20 rounded-full">
                    <service.SvgIcon />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <h3 className="text-[#0D5094] poppins-normal text-sm md:text-base font-medium mb-2 leading-tight">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 text-xs md:text-sm mt-auto mb-3">{service.hindiName}</p>

                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.description}</p>

                    <button className="w-full py-2 bg-[#0D5094] hover:bg-[#0a4275] text-white rounded-lg text-sm figtree-semibold transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
