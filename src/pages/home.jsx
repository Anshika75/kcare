import React from 'react'
import Header from '../components/Home/header'
import Landing from '../components/Home/landing'
import Stats from '../components/Home/stats'
import About from '../components/Home/about'
import Mission from '../components/Home/mission'
import Awards from '../components/Home/awards'
import Departments from '../components/Home/departments'
import Services from '../components/Home/services'
import Testimonial from '../components/Home/testimonial'
import Team from '../components/Home/team'
import Sponsors from '../components/Home/sponsors'
import Footer from '../components/Home/footer'

export default function Home() {
  return (
   <>
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-[#f9f9f9]">
      <Header/>
      <Landing/>
      <Stats/>
      <About/>
      <Mission/>
      <Awards/>
      <Departments/>
      <Services/>
      <Team/>
      <Testimonial/>
      <Sponsors/>
      <Footer />
    </div>
   </>
  )
}
