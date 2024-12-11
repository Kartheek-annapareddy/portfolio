import React from 'react'
import "./Project.css"
import calc from '../../assets/logos/calculator.png'
import weather from '../../assets/logos/weather.png'
import stopwatch from '../../assets/logos/eCommerce.jpeg'
import speech from '../../assets/logos/Ticket-Booking.jpeg'


function Projects() {

  var projectdetails = [{ title: "Calculator App", img:calc, description: "simple calculator which can perform some of the basic  mathematical operations",sourcecode:'#',live:'https://kartheek-calculator-app.netlify.app/' }, { title: "Weather", img:weather, description: "Created Weather application using basic UI & Integreted weather API using Axios library ",sourcecode:'https://github.com/Kartheek-annapareddy/WeatherApp',live:'https://aweatherapplication-ak.netlify.app/' }, { title: "E-Cart Appalication", img:stopwatch, description: "Basic E-Cart application which is Developed using Reactjs,Redux,Axios librarys where data is stored in json server.",sourcecode:'https://github.com/Kartheek-annapareddy/E-Cart-Application' }, { title: "Ticket Booking Application", img:speech, description: "Ticket Booking Application Where the user can register login and book tickets for the movie.Technologies used Reactjs,Expressjs,Sql",sourcecode:'https://github.com/Kartheek-annapareddy/Ticket-Booking' }]
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
                          <a href={ele.sourcecode} target='_blank'><button className='project-button'>Source code</button></a>
                          <a href={ele.live} target='_blank'><button className='project-button'>Live </button></a>
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
