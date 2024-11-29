import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Box,
  Typography,
  TextField,
  Button,
  Autocomplete,
  TextareaAutosize,
} from '@mui/material';

const Contact = () => {
  const [data, setData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data); // Process form submission
     
     emailjs
     .send(
       'service_gfmyzzi', 
       'template_uoooug7', 
       {
         from_name: data.Name,
         from_email: data.Email,
         message: data.Message,
         to_name: 'Kartheek', 
       },
       'pbbgMyhUsxiSC1gXO'
     )
     .then(
       (response) => {
         console.log('SUCCESS!', response.status, response.text);
         alert('Message sent successfully');
         setData({ Name: '', Email: '', Message: '' }); 
       },
       (error) => {
         console.error('FAILED...', error);
         alert('Failed to send message. Please try again later.');
       }
     );
  };

  const handleInputChange = (e) => {
     var{name,value}=e.target
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  
  return (
    <div
      className="container-fluid contact-container"
      id="contact-container"
      style={{ p: 4,height:550,  backgroundImage: 'url(src/logos/contact-background.jpg)', backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat' }}>
        <div className='background-white' style={{width:'100%', height:'fit-content',position:'absolute',left:'0px',backgroundColor:'rgba(255,255,255,0.7)'}}>
        <div style={{zIndex:'2'}}>
      <Box className="contact-content-container" sx={{ textAlign: 'center',marginTop:'80px'}}>
        <Typography variant="h4" className="contact-heading" sx={{fontWeight:'bold'}}>
          Contact Me
        </Typography>
        <hr className="contact-line" style={{width:'150px',height:'4px',backgroundColor:'green',color:'green',display:'inline-block',textAlign:'center',zIndex:'2'}} />
        <Typography variant="body1" className="contact-content">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </Typography>
      </Box>
      </div>

      <Box
        className="contact-form-container"
        sx={{ mt: 4, maxWidth: 600, margin: '20px auto' }}
      >
        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" type='text' name={'Name'} value={data.Name} label="Enter Your Name" variant="outlined"  sx={{width:'100%',marginBottom:'12px',}} onChange={(e)=>{handleInputChange(e)}}/><br/>
        <TextField id="outlined-basic" type='text' name={'Email'} value={data.Email} label="Enter Your Email" variant="outlined" sx={{width:'100%',marginBottom:'12px'}} onChange={(e)=>{handleInputChange(e)}} /><br/>
        <TextField label="Your Message" multiline rows={4} name={'Message'} value={data.Message} variant="outlined"  fullWidth sx={{width:'100%',marginBottom:'12px'}} onChange={(e)=>{handleInputChange(e)}}/>
          <Box sx={{ mt: 2,textAlign:'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="contact-button"
            >
              Send
            </Button>
          </Box>
        </form>
      </Box>
      </div>
    </div>
  );
};

export default Contact;
