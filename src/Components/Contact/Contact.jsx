import React from 'react'
import "./Contact.css"
import { useState } from 'react'
import emailjs from "emailjs-com"


function Contact() {
  var [data, setdata] = useState({ Name: "", Email: "", Message: "" })
  function getfunctioncall(e) {
    setdata(
      {
        ...data,
        [e.target.name]: e.target.value
      }
    )
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_gfmyzzi",
        'template_uoooug7',
        {
          from_name: data.Name,
          from_email: data.Email,
          message: data.Message,
          to_name: "Kartheek"
        },
        "pbbgMyhUsxiSC1gXO"
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("message sent succesfully")
          setdata({ Name: "", Email: "", Message: "" });
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  }
  return (
    // <div className='contact-container' id="contact-container">
    //     <div className='contact-content-container'>
    //         <div className='contact-heading-container'><h2 className='contact-heading'>Contact Me</h2><hr className='contact-line'/><p className='contact-content'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p></div>
    //         <div className='contact-form-container'>
    //             <form onSubmit={()=>{handleSubmit(event)}}>
    //                 <label className='contact-label'>Enter Your Name :</label> <br/>
    //                 <input className='contact-input' type="text" required placeholder='Enter Your Name' name="Name" value={data.Name} onChange={()=>{getfunctioncall(event)}}/><br/>
    //                 <label className='contact-label'>Enter Your Email :</label><br/>
    //                 <input className='contact-input' requiredbtype="email" placeholder='Enter Your Email' name="Email" value={data.Email} onChange={()=>{getfunctioncall(event)}}/><br/>
    //                 <label className='contact-label'>Message :</label><br/>
    //                 <textarea className='contact-textarea' required name="Message" rows="4" cols="50" value={data.Message} placeholder="Write your message here..." onChange={()=>{getfunctioncall(event)}}></textarea><br/>
    //                  <button  className='contact-button'>Send</button>
    //             </form>
    //         </div>
    //   </div>
    //   </div>

    <div className='container-fluid contact-container' id='contact-container'>
      <div className='contact-content-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='contact-heading-container'><h2 className='contact-heading'>Contact Me</h2><hr className='contact-line' /><p className='contact-content'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p><p className='contact-container1'>Feel free to Contact me</p></div>
          </div>

        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='contact-form-container'>
              <form onSubmit={() => { handleSubmit(event) }}>
                <label className='contact-label'>Enter Your Name :</label> <br />
                <input className='contact-input' type="text" required placeholder='Enter Your Name' name="Name" value={data.Name} onChange={() => { getfunctioncall(event) }} /><br />
                <label className='contact-label'>Enter Your Email :</label><br />
                <input className='contact-input' requiredbtype="email" placeholder='Enter Your Email' name="Email" value={data.Email} onChange={() => { getfunctioncall(event) }} /><br />
                <label className='contact-label'>Message :</label><br />
                <textarea className='contact-textarea' required name="Message" rows="4" cols="50" value={data.Message} placeholder="Write your message here..." onChange={() => { getfunctioncall(event) }}></textarea><br />
                <button className='contact-button'>Send</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;
