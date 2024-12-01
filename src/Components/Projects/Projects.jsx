import React from 'react'
import "./Project.css"
import calc from '../../assets/logos/calculator.png'
import weather from '../../assets/logos/weather.png'
import stopwatch from '../../assets/logos/stopwatch.png'
import speech from '../../assets/logos/text to speech.png'


function Projects() {

  var projectdetails = [{ title: "Calculator App", img:calc, description: "simple calculator which can perform some of the basic  mathematical operations" }, { title: "Weather", img:weather, description: "Created Weather application using basic UI & Integreted weather API using Axios library " }, { title: "Stop Watch", img:stopwatch, description: "" }, { title: "Text to Speech Converter", img:speech, description: "" }]
  return (
    // <div className='project-Container' id="project-container">
    //     <h3 className='project'>Projects </h3><br/><hr className='project-heading-line'/>
    //     <div className='project-holder-container'>
    //       {
    //         projectdetails.map((ele)=>{
    //             return(

    //                 <div className='project-holder'>
    //                     <div className='project-content'>
    //                     <img className='project-img' src={ele.img} />
    //                     <h3 className='project-name'>{ele.title}</h3>
    //                     <p className='project-description'>{ele.description}</p>
    //                     <div className='project-btn-container'>
    //                     <button className='project-button'>Source code</button>
    //                     <button className='project-button'>Live </button>
    //                     </div>
    //                     </div>
    //                 </div>

    //             )
    //         })
    //       }
    //       </div>
    // </div>


    <div>
      <div className='container-fluid' id='project-container'>
        <div className='row'>
          <div className='col-12'>
            <div><h3 className='project'>Projects </h3><br /><hr className='project-heading-line' /></div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='project-holder-container'>
              {
                projectdetails.map((ele) => {
                  return (

                    <div className='project-holder'>
                      <div className='project-content'>
                        <img className='project-img' src={ele.img} />
                        <h3 className='project-name'>{ele.title}</h3>
                        <p className='project-description'>{ele.description}</p>
                        <div className='project-btn-container'>
                          <button className='project-button'>Source code</button>
                          <button className='project-button'>Live </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
