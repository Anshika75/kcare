import React from 'react'
import Header from '../components/header'
import Landing from '../components/landing'

export default function Home() {
  return (
   <>
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-[#4396A2]">
      <Header/>
      <Landing/>
    </div>
   </>
  )
}
