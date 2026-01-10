import React from 'react'

function Contact() {
  return (
    <secton> 
      <div className='contact-page'>

    <center>
     <h2 className='titele-text'>CONTACT <span>ME</span></h2>
     </center>

     <div className='form-container'>
     <div className='left'>
      <div className='c-box'>
       <i class='fas fa-map'></i>
       <div className='info'>
        <h3>Address:</h3><br/>
        <p>Gondal,Gujarat , india</p>
       </div>
      </div>

      <div className='c-box'>
       <i class='fas fa-envelope'></i>
       <div className='info'>
        <h3>Email:</h3><br/>
       <a href='mailto:rutvikmaida4526@gmail.com'> <p>rutvikmaida4526@gmail.com</p></a>
       </div>
      </div>

      <div className='c-box'>
       <i class='fas fa-phone'></i>
       <div className='info'>
        <h3>Number :</h3><br/>
       <a href='tel:+91 6351853999'> <p>+91 6351853999</p></a>
       </div>
      </div>

      <div className='share'>
      <a href='https://github.com/Rutvikmaida' className='fab fa-github' target='blank' rel='noreferrer'></a>
      <a href='#' className='fab fa-linkedin' target='blank'  rel='noreferrer'></a>

      </div>
     </div>
     
    

     <div className='form-div'>
      <center>
        <i className='fas fa-envelope'></i>
      </center>

        <form action="https://formspree.io/f/mdovobez" method="post">
          <input type='text' name="name" id="name" placeholder='Your name' className='input1'/>
          <input type='email' name="email" id="email" placeholder='Your mail' className='input1'/>
          <br/>
          <input type='text' name="subject" id="subject" placeholder='Subject' className='input2'/>
          <br/>
          <textarea cols='81' className='input2' placeholder='Message'></textarea>
          <br/>
          <input type='submit'  name="subject" id="subject" value='send massage' className='btn-form'></input>

        </form>
     </div>
    </div>
     </div>
     
    
     

 </secton>
  )
}

export default Contact