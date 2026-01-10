import React, { useRef,useState} from "react";
import emailjs from "emailjs-com";
  import { ToastContainer, toast } from 'react-toastify';

function Contact() {
   
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    const data = new FormData(form.current);

    const name = data.get("name")?.trim();
    const email = data.get("email")?.trim();
    const subject = data.get("subject")?.trim();
    const message = data.get("message")?.trim();

    if (!name) newErrors.name = "Name is required";

    if (!email) {
      newErrors.youremail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.youremail = "Invalid email address";
    }

    if (!subject) newErrors.subject = "Subject is required";
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix form errors ❌");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_qko7s2r",
        "template_nfxwr7g",
        form.current,
        "mZt7Guvi7HhVadT0c"
      )
      .then(() => {
        toast.success("Message sent successfully ✅");
        form.current.reset();
        setErrors({});
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
      })
      .finally(() => setLoading(false));
  };

  return (
    <secton> 
      <ToastContainer/>
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

        <form  ref={form} onSubmit={sendEmail}>
          <input type='text' name="name" id="name" placeholder='Your name' className='input1'/>
          <input type='email' name="email" id="email" placeholder='Your mail' className='input1'/>
          <br/>
          <div style={{display:'flex',justifyContent:'space-around'}}>
             {errors.name && <p className="error">{errors.name}</p>}
          {errors.youremail && <p className="error">{errors.youremail}</p>}
          </div>

          <input type='text' name="subject" id="subject" placeholder='Subject' className='input2'/>
            {errors.subject && <p className="error">{errors.subject}</p>}
          <br/>
          <textarea cols='81' name="message" className='input2' placeholder='Message'></textarea>
           {errors.message && <p className="error">{errors.message}</p>}
          <br/>
          <input type='submit' id="subject" value='send massage' className='btn-form' disabled={loading}></input>
            {loading ? "Sending..." : "Send Message"}

        </form>
     </div>
    </div>
     </div>
     
    
     

 </secton>
  )
}

export default Contact