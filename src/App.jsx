import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Featured from './components/Features'
import ParticleComponent from './components/ParticleComponent'
import Projects from './components/Projects'
import Resume from './components/resume/Resume'
import Testimonial from './components/testimonial/Testimonial'
import { useTheme } from './context/ThemeContext'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [isLightMode] = useTheme()
  return (
    <>
    <div>
      <ParticleComponent/>
    </div>
    <div id={isLightMode}>
      <Navbar/>
      <Banner/>
      <Featured/>
      <Projects/>
      <Resume/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App