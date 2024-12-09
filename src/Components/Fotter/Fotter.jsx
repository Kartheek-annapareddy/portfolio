import React from 'react'
import "./Fotter.css"

function Fotter() {
  return (

    // <div className='fotter-container'>
    // <div className='fotter-sec1'>
    //   <h3>Kartheek</h3>
    //   <h3>Contact</h3>
    // </div>
    // <div className='fotter-sec2'>
    //   <p className='fotter-sec2-content'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
    //   <div className='fotter-contact-container'>
    //   <a href=""> <i  class="bi bi-instagram custom-iconf" ></i></a>
    //  <a href=""><i   class="bi bi-github custom-iconf"></i></a>
    // <a href=""><i   class="bi bi-linkedin custom-iconf"></i></a>
    // <a href=""><i   class="bi bi-whatsapp custom-iconf"></i></a>
    //   </div>
    //     </div>
    //     <hr className='fotter-line'/>
    //     <div className='fotter-contant-last'>Created by Kartheek Annapareddy.</div>

    // </div>

    <div className='container-fluid fotter-container'>
      <div className='row'>
        <div className='col-7'>
          <div> <h3>Kartheek</h3></div>
        </div>
        <div className='col-5'>
          <div><h3>Contact</h3></div>
        </div>
      </div>
      <div className='row'>
        <div className='col-7'>
          <p className='fotter-sec2-content'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div className='col-5'>
          <div className='fotter-contact-container'>
          <a href="https://www.instagram.com/kartheek_naidu_4799/profilecard/?igsh=MTB2aGZtNDNjMzFjbw==" target='blank'><i class="bi bi-instagram custom-icon" ></i></a>
            <a href="https://github.com/Kartheek-annapareddy" target='blank'><i class="bi bi-github custom-icon"></i></a>
            <a href="https://www.linkedin.com/in/annapareddy-kartheek-bb8365255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'><i class="bi bi-linkedin custom-icon"></i></a>
            <a href="https://wa.me/918106953128" target='blank'><i class="bi bi-whatsapp custom-icon"></i></a>
          </div>
        </div>
      </div>
      <hr className='fotter-line' />
      <div className='row'>
        <div col-12>
          <div><div className='fotter-contant-last'>Created by Kartheek Annapareddy.</div></div>
        </div>
      </div>
    </div>
  )
}

export default Fotter
