import React, { useState ,useRef} from 'react';
import emailjs from 'emailjs-com';
import contactimg from '../../assets/logos/contact-background.jpg'
import ReactLoading from 'react-loading'
import { useEffect } from 'react';
import './Contact.css'

import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Autocomplete,
  TextareaAutosize,
} from '@mui/material';


const Contact = () => {
  const[loading,setloading]=useState(0)
  const[open,setopen]=useState(0)
  const[error,seterror]=useState(0)
  const [data, setData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

const contactref = useRef(null);


  useEffect(()=>{
    const observer= new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
            contactref.current.classList.add('animation')
        }
      },{threshold:0.1}
    )

    if(contactref.current){
       observer.observe(contactref.current)
    }
    return()=>{
      if(contactref.current){
        observer.unobserve(contactref.current)
      }
    }
  },[])
   
  
  const handleClose=()=>{
    setopen(0)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(1)
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
         setloading(0);
         setopen(1);
         seterror(0)
         setData({ Name: '', Email: '', Message: '' });  
       },
       (error) => {
         console.error('FAILED...', error);
         setloading(0)
         setopen(1)
         seterror(1)
       }
     );
  };

  const handleInputChange = (e) => {
     var{name,value}=e.target
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  
  return (
    <div
     ref={contactref}
      className="container-fluid contact-container"
      id="contact-container"
      style={{height:600,  backgroundImage: `linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url(${contactimg})`, backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',paddingTop:'80px'}}>
      <Box className="contact-content-container" sx={{ textAlign: 'center'}}>
        <Typography variant="h4" className="contact-heading" sx={{fontWeight:'bold'}}>
          Contact Me
        </Typography>
        <hr className="contact-line" style={{width:'150px',height:'4px',backgroundColor:'green',color:'green',display:'inline-block',textAlign:'center',zIndex:'2'}} />
        <Typography variant="body1" className="contact-content">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </Typography>
      </Box>
     

      <Box
        className="contact-form-container"
        sx={{ mt: 4, maxWidth: 600, margin: '20px auto' }}
      >
        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" required type='text' name={'Name'} value={data.Name} label="* Enter Your Name" variant="outlined"  sx={{width:'100%',marginBottom:'12px',paddingRight:1,paddingLeft:1}} onChange={(e)=>{handleInputChange(e)}}/><br/>
        <TextField id="outlined-basic" required type='email' name={'Email'} value={data.Email} label=" * Enter Your Email" variant="outlined" sx={{width:'100%',marginBottom:'12px',paddingRight:1,paddingLeft:1}} onChange={(e)=>{handleInputChange(e)}} /><br/>
        <TextField label="*  Your Message" required multiline rows={4} name={'Message'} value={data.Message} variant="outlined"  fullWidth sx={{width:'100%',marginBottom:'12px',paddingRight:1,paddingLeft:1}} onChange={(e)=>{handleInputChange(e)}}/>
          <Box sx={{ mt: 2,textAlign:'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="contact-button"
            >
              {loading===1?<div style={{display:'flex'}}><ReactLoading type='spin' color="#00BFFF" height={25} width={25}/><div>sending</div></div>:'send'}
            </Button>
          </Box>
        </form>
      </Box>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
       <Alert
        onClose={handleClose}
       severity={error?'error':'success'}
        variant="filled"
       sx={{width: '100%'}}
     >
      {error?'Failed to send message':'message sent successfully'}
  </Alert>
</Snackbar>

      </div>
  );
};

export default Contact;
