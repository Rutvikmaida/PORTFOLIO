import React from 'react';
import Skill from './skill';
import Resume from './images/rutvik.pdf';
import Certificate from './Certificate';

const About = () => {

  return (
    <>
    <section className='about-page'>
        <center>
        <h2 className='titele-text'>ABOUT <span>ME</span></h2>
        </center>
      <div className='personal-info'>
       <h2> PERSONAL INFO
       </h2>
      </div>
      <div className='container'>
        <div className='box1'>
        <h3><span>NAME : </span>MAIDA RUTVIK</h3>
        <h3><span>AGE : </span>22</h3>
        <h3><span>EMAIL : </span>rutvikmaida4526@gmail.com</h3>
        <h3><span>ADDRESS : </span>Gondal,Rajkot,india</h3>
        </div>
        <div className='box2'>
        <h3><span>Skill : </span>Frontend and Backend</h3>
        <h3><span>Experience : </span>Fresher</h3>
        <h3><span>Language : </span>English/Hindi/Gujarati</h3>
        </div>
      </div>
      
      <a href={Resume} download="Rsume.pdf">
      <div  className='btn' > 
        <span>Resume</span>
        <i class='fas fa-download'></i>
        </div>
        </a>

        <Skill/>
        <br/>
        {/* <Certificate/> */}
    </section>
    
     
    </>
    
  )
}


export default About