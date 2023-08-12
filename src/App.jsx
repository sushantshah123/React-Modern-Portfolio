import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Featured from './components/Features'
import ParticleComponent from './components/ParticleComponent'
import Projects from './components/Projects'
import Resume from './components/Resume'

const App = () => {
  return (
    <>
    <div>
      <ParticleComponent/>
    </div>
      <Navbar/>
      <Banner/>
      <Featured/>
      <Projects/>
      <Resume/>
    </>
  )
}

export default App