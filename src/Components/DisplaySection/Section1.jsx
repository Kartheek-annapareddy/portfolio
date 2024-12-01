import React from 'react'
import "./Section1.css"
import { useState } from 'react'


function Section1() {
  var [resume, setresume] = useState("false");
  function getresumecall() {
    if (resume === "true") {
      setresume("false");
    }
    else {
      setresume("true")
    }
  }
  function downloadfile() {

    saveAs("src/assets/logos/Kartheek_Annapareddy_Resume (2) (1).pdf", "kartheek_resume.pdf")

  }

  //   <div className="section1-container" id="home-container">
  //     <div className='section1-content-container'>
  //       <h1 className='section1-name'>HEY,I'M ANNAPAREDDY KARTHEEK</h1>
  //       <p className='section1-animi'>A Result-Oriented Web Developer building and managing Websites</p>
  //       <button className='section1-resume-btn' onClick={getresumecall}>Resume</button>
  //     </div>
  //     <div className='section1-social'>
  //       <a href=""> <i class="bi bi-instagram custom-icon" ></i></a>
  //       <a href=""><i class="bi bi-github custom-icon"></i></a>
  //       <a href=""><i class="bi bi-linkedin custom-icon"></i></a>
  //       <a href=""><i class="bi bi-whatsapp custom-icon"></i></a>
  //     </div>

  //     <div className='drage-container'>
  //       <p className='drage'>.</p>
  //     </div>
  //     {
  //       resume === "true" ? <div className='section1-resume'><div className='resume-back-container' onClick={getresumecall}></div> <div className='resume-img-container'><button className='resume-download' onClick={downloadfile}>download</button></div> </div> : null
  //     }

  //   </div>

  // )



  return (
    <div className="container-fluid section1-container" id="home-container">
      <div className="row ">
        <div className='col-1 text-center'>
          <div className='section1-social'>
            <a href=""><i class="bi bi-instagram custom-icon" ></i></a>
            <a href=""><i class="bi bi-github custom-icon"></i></a>
            <a href=""><i class="bi bi-linkedin custom-icon"></i></a>
            <a href=""><i class="bi bi-whatsapp custom-icon"></i></a>
          </div>
        </div>
        <div className='col-11'>
          <div className='text-center'>
            <h1 className='section1-name '>HEY,I'M</h1></div>
          <div className='text-center'><h1>ANNAPAREDDY KARTHEEK</h1></div>
          <div className='text-center'> <p >A Result-Oriented Web Developer building and managing Websites</p></div>
          <div className='text-center'><button className='section1-resume-btn text-center' onClick={getresumecall}>Resume</button> </div>
          <div className='text-center'><button className='section1-resume-btn-download' onClick={downloadfile}>Resume download</button></div>
          <div className='drage-container'>
            <p className='drage'>.</p>
          </div>
        </div>
      </div>
      {
        resume === "true" ? <div className='container-fluid'><div className='section1-resume'><div className='resume-back-container' onClick={getresumecall}></div> <div className='resume-img-container row text-center'><img src='src\assets\logos\resume.png'/></div><div><button className='resume-download' onClick={downloadfile}>download</button></div></div></div> : null
      }
    </div>
  )
}

export default Section1;
