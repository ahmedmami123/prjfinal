import React, { useEffect } from 'react'
import "./About.css"
import Aos from 'aos'
import "aos/dist/aos.css"
function About({setnav,setpp}) {
    useEffect(() => {
        setnav("nav-login")
        setpp("pp")
    }, [])
    useEffect(() => {
    Aos.init({
        duration:3000
    });
    }, [])
    
  return (
    <div className='about'>
      <div className='abdescri'>
        <div className='descri'data-aos="fade-down">
          
         
          <p className='p1'>Helping you Start a new life, New opportunity
          </p>
          <p className='p2'>Do you have a project idea and want to  be realized,chase your  chance,your dream may be true </p>
        </div>
        <div className='img' data-aos="fade-left">
          <img src='aboutwork.jpg'/>
        </div>
      </div>
      <h1 className='h1'>What are the steps that you make to add your project?</h1>
      <div className='step'>
        <div className='step1' data-aos="fade-right">
          <img src='lamp1.png'/>
        </div>
        <div className='step11'  data-aos="fade-left">
          <h2> Step1 :Go to the ideas page</h2>
          <p>Enter your project details
Please don't use bad words</p>
        </div>
        <div className='step2' data-aos="fade-left">
          <img src='lamp4.png'/>
        </div>
        <div className='step22'  data-aos="fade-right">
          <h2> Step2 :

Your project idea will be checked and well verified</h2>
          <p>It will be 
  rejected if it's badly written</p>
        </div>
        <div className='step3' data-aos="fade-right">
          <img src='hand2.png'/>
        </div>
        <div className='step33'  data-aos="fade-left">
          <h2> Step3 :Vote</h2>
          <p>A voting system will be applied by the different investors.
The best project will be published on the site, analyzed and then applied in the field if it follows the various constraints.</p>
        </div>
        <div className='bar'>
          <div className='div'>
          <div></div>
          </div>
          <div className='div'>
          <div></div>
          </div>
          <div className='div'>
          <div></div>
          </div> 
        </div>
      </div>
     {/* <div className='bb'data-aos="fade-down">1</div>
     <div className='bb'>2</div>
     <div className='bb'>3</div>
     <div className='bb' data-aos="fade-up">4</div> */}

        </div>

    
  )
}

export default About