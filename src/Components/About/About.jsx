import React from 'react'
import "./About.css"

function About({ scrolltosection }) {
  return (
    //   <div className='about-container' id="about-container">

    //      <div className='about-content-container'>
    //      <h2 className='about-heading'>About</h2><hr className="about-heading-line"/>
    //       <h3>Get to Know About me</h3><br/>
    //       <p><b>*</b> I graduated with a Bachelor of Engineering in Mechanical Engineering from Seshadri Rao Gudlavalleru Engineering College, achieving a percentage of 78%.I have learned python as a part of my academics<br/><br/> <b>*</b> I have a strong foundation in web development, proficient in HTML, CSS, and JavaScript, and familiar with frameworks like React.js. I also have knowledge on back-end technologies such as Node.js and database management systems like MySQL and MongoDB.<br/><br/><b>*</b> My background in mechanical engineering provides me with solid problem-solving skills and analytical thinking. I have worked on various projects that highlight my ability to integrate web development with engineering principles.<br/><br/><b>*</b> I am passionate about coding and continuously learning about new technologies. I aim to leverage my engineering background and web development skills to create innovative solutions and contribute to impactful projects.
    //   </p>
    //   </div>
    //  <div className='move-to-top' >
    //  {/* <i class="bi bi-arrow-up-square-fill custom-icon-about" onClick={() => {scrolltosection('home-container')}}></i>
    //  </div> */}
    //  </div>
    //   </div>

    <div className='container-fluid about-container about-content-container' id="about-container">
      <div className='row'>
        <div className='col-12'>
          <div className='about-heading'> <h2>About</h2><hr className="about-heading-line" /></div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div>
            <h3>Get to Know About me</h3><br />
            <p><b>*</b> I graduated with a Bachelor of Engineering in Mechanical Engineering from Seshadri Rao Gudlavalleru Engineering College, achieving a percentage of 78%.I have learned python as a part of my academics<br /><br /> <b>*</b> I have a strong foundation in web development, proficient in HTML, CSS, and JavaScript, and familiar with frameworks like React.js. I also have knowledge on back-end technologies such as Node.js and database management systems like MySQL and MongoDB.<br /><br /><b>*</b> My background in mechanical engineering provides me with solid problem-solving skills and analytical thinking. I have worked on various projects that highlight my ability to integrate web development with engineering principles.<br /><br /><b>*</b> I am passionate about coding and continuously learning about new technologies. I aim to leverage my engineering background and web development skills to create innovative solutions and contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
