import React from 'react'
import Header from './Components/Header/Header'
import Section1 from './Components/DisplaySection/Section1'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Skills from './Components/Skills/Skills'
import Fotter from './Components/Fotter/Fotter'
import AnimatedComponent from './Components/Animation/Animation'

function App() {
  function scrolltosection(id){
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div>
     <Header scrolltosection={scrolltosection}/>
     <Section1/>
     <About scrolltosection={scrolltosection}/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Fotter/>
     {/* <div style={{height:'600px'}}>the</div>
     <AnimatedComponent/> */}
    </div>
  )
}

export default App
