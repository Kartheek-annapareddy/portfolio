import React from 'react'
import "./Project.css"
import calc from '../../assets/logos/calculator.png'
import weather from '../../assets/logos/weather.png'
import stopwatch from '../../assets/logos/eCommerce.jpeg'
import speech from '../../assets/logos/Ticket-Booking.jpeg'



function Projects() {

  var projectdetails = [
    { 
      title: "Calculator App", 
      img: calc, 
      description: "A streamlined calculator application that performs essential arithmetic operations using a clean, user-friendly interface.", 
      sourcecode: '#', 
      live: 'https://kartheek-calculator-app.netlify.app/' ,
      disabilty:false
    },
    { 
      title: "Weather ", 
      img: weather, 
      description: "A dynamic weather application featuring a minimalist UI, integrated with a weather API via Axios to fetch and display real-time data.", 
      sourcecode: 'https://github.com/Kartheek-annapareddy/WeatherApp', 
      live: 'https://aweatherapplication-ak.netlify.app/' ,
      disabilty:false
    },
    { 
      title: "E-Cart Application", 
      img: stopwatch, 
      description: "A basic e-commerce platform built with React.js, Redux, and Axios. It offers seamless product management and a fully functional shopping cart, with data stored on a JSON server.", 
      sourcecode: 'https://github.com/Kartheek-annapareddy/E-Cart-Application' ,
      disabilty:true
    },
    { 
      title: "Ticket Booking Application", 
      img: speech, 
      description: "A comprehensive ticket booking system that enables users to register, log in, and book movie tickets effortlessly. Developed with React.js, Express.js, and SQL, it ensures secure authentication and an intuitive booking experience.", 
      sourcecode: 'https://github.com/Kartheek-annapareddy/Ticket-Booking',
      disabilty:true 
    }
  ];
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
               <div className='d-flex project-holder-container'>
                {
                   projectdetails.map((ele)=>{
                    return(
                     <div className='card'>
                      <div className='card-front'><img src={ele.img}/><h4>{ele.title}</h4></div>
                      <div className='card-back'><h4>{ele.title}</h4>
                      <p>{ele.description}</p>
                      <div className='w-100 d-flex justify-content-evenly'><a href={ele.sourcecode} target='_blank'><button className='btn btn-primary'>Source code</button></a><a href={ele.live} target='_blank'><button className='btn btn-secondary'disabled={ele.disabilty}>Live</button></a></div></div>
                     </div>)
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
