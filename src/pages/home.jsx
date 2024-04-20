import React from 'react'
import Header from '../components/header'
import Landing from '../components/landing'
import Stats from '../components/stats'
import About from '../components/about'
import Mission from '../components/mission'
import Awards from '../components/awards'
import Departments from '../components/departments'

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
    </div>
   </>
  )
}
