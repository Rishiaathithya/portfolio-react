import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Temp from './components/temp'
import Skill from './components/Skill'
import Certification from './components/Certification'
import Footer from './components/Footer'
import Background from './components/Background'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 font-poppins w-full'>
      <Background />
      <Header />
      <Temp />
      <Background />
      <Skill />
      <Projects />
      <Background />
      <Certification />
      <Footer />
    </div>
  )
}

export default App

// bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]