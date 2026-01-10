import React from 'react'
import image from './images/image.png'
import project2img from './images/wear-it.png'
function Project() {
  return (
    <secton>
      <div className='project-page'>
       <center>
        <h2 className='titele-text'>MY <span>PROJECTS</span></h2>
        </center>
        <div className='proj-container'>
            <div className='p-box'>
              <div className='overlay'>
                <center>
                <h3>MOBILE APP</h3> 
                </center>
                <p>A mobile shop management system that displays smartphones, 
                  accessories, prices, and offers with an easy-to-use interface.</p>
                  <center>
                  <a href="__" target='blank'>View Project</a>
                  </center> 
              </div>
            <img src={image}></img>
            </div>

            <div className='p-box'>
            <div className='overlay'>
                <center>
                <h3>Wear-it</h3> 
                </center>
                <p></p>
                  <center>
                  <a href='https://wearit-eosin.vercel.app/'  target='blank'>View Project</a>
                  </center>  
              </div>
            <img  src={project2img}></img>
          </div>
          <div className='p-box'>


          <div className='overlay' style={{display: "block"}} >
                <center>
                <h3></h3> 
                </center>
                <p></p>
                  <center>
                  <a href='#'>Soon !</a>
                  </center>
                 

              </div>
            <img ></img>
          </div>
        </div>
        </div> 
    </secton>
  )
}

export default Project