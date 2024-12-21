import React from 'react'
import "./Skills.css"
import { useEffect } from 'react'
import { useRef } from 'react'
import html from '../../assets/logos/html (1).png'
import css from '../../assets/logos/css.png'
import javascript from '../../assets/logos/javascript.png'
import react from '../../assets/logos/react.png'
import mongodb from '../../assets/logos/mongo-db.png'
import nodejs from '../../assets/logos/nodejs.png'
import python from '../../assets/logos/python.png'

function Skills() {

  const skillsref=useRef(null);
  // const skillsiconref=useRef(null)

  useEffect(()=>{
    const observer=new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          skillsref.current.classList.add('skill-heading-animation')
        }
      },{threshold:0.2}
    )
    if(skillsref.current){
      observer.observe(skillsref.current)
    }
    return ()=>{
        if(skillsref.current){
          observer.unobserve(skillsref.current)
        }
    }
  },[])

    var skillsarray=[{img:html,title:"HTML"},{img:css,title:"CSS"},{img:javascript,title:"JAVASCRIPT"},{img:react,title:"REACT"},{img:mongodb,title:"MONGODB"},{img:nodejs,title:"NODE JS"},{img:python,title:"PYTHON"}]
  return (
   
    <div className='skills-container'>
    <div className='skill-heading' ref={skillsref}><h2>Skills</h2><hr/></div>
    <div className='skills-set'>
    {
        skillsarray.map((ele)=>{
            return(
                   <div className='skill-container'>
                    <img className="skill-img" src={ele.img}/>
                    <p className='skill-title'>{ele.title}</p>
                    </div>
            )
        })
    }
      </div>
    </div>
    
  )
}

export default Skills;
