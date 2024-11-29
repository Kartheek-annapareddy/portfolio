import React from 'react'
import "./Header.css"
import { useState } from 'react'

function Header({scrolltosection}) {

  var[menu,setmenu]=useState("false")


  function getmenucall(){

    if(menu === "false"){
       setmenu("true")
    }
    else{
      setmenu("false")
    }   
  }

  function twoeventhandle(e){
    getmenucall();
    scrolltosection(e);
  }
  
  return (
   
    <div>
      <div className='container-fluid'>
        <div className='row header-container'>
          <div className="col-6 header-container1">
          <img className="header-image" src="" width={"70px"} height={"70px"}/>
          <h3 className='header-name-owner'>Annapareddy Kartheek</h3>
          </div>
          <div className='col-6 header-container2'>
          <div ><a className='header-nav' onClick={(e) =>{ e.stopPropagation; scrolltosection('home-container')}}>Home</a><p className='scroll'></p></div>
            <div><a className='header-nav' onClick={(e) => { e.stopPropagation; scrolltosection('about-container')}}>About</a></div>
            <div><a className='header-nav' onClick={(e) => {e.stopPropagation; scrolltosection('project-container')}}>Projects</a></div>
            <div><a className='header-nav' onClick={(e) => {e.stopPropagation; scrolltosection('contact-container')}}>Contact</a></div>
         
            <div className='mobile-icon'>
              {menu==="true"?<i class="bi bi-x-circle-fill" onClick={getmenucall}></i>:<i class="bi bi-list" onClick={getmenucall}></i>}
            </div>
          </div>
        
        </div>
      </div>
      <div>
        {
          menu==="true"?<div><div className='menu-handler-outer' onClick={getmenucall}></div><div className={`menu-container ${menu?'open':null}`} >
              <a className='menu-handler' onClick={() => twoeventhandle('home-container')} >Home</a>
              <a className='menu-handler' onClick={() => twoeventhandle('about-container')}>About</a>
              <a className='menu-handler' onClick={() => twoeventhandle('project-container')}>Projects</a>
              <a className='menu-handler' onClick={() => twoeventhandle('contact-container')}>Contact</a>
             </div></div>:null
        }
      </div>
    </div>
  )
}

export default Header


