import React from 'react'
import "./Skills.css"

function Skills() {
    var skillsarray=[{img:"src/assets/logos/html (1).png",title:"HTML"},{img:"src/assets/logos/css.png",title:"CSS"},{img:"src/assets/logos/javascript.png",title:"JAVASCRIPT"},{img:"src/assets/logos/react.png",title:"REACT"},{img:"src/assets/logos/mongo-db.png",title:"MONGODB"},{img:"src/assets/logos/nodejs.png",title:"NODE JS"},{img:"src/assets/logos/python.png",title:"PYTHON"}]
  return (
   
    <div className='skills-container'>
    <div className='skill-heading'><h2>Skills</h2><hr/></div>
    <div className='skills-set'>
    {
        skillsarray.map((ele)=>{
            return(
                   <div className='skill-container'>
                    <img className="skill-img"src={ele.img}/>
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
