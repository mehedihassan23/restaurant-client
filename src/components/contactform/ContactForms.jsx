import React, { useState } from 'react'
import Swal from "sweetalert2"
import ReCAPTCHA from "react-google-recaptcha";

import './contactforms.css'

const ContactForms = () => {
    const [contactFormValue, setContactFormValue] = useState({name: " ", 
        email: " ", phone: " ", message: " "})
        const [userName, setUserName] = useState("")
    const {name, email, phone, message } = contactFormValue;
    const [captcha, setCaptha] = useState("")

    const onChange = (value) => {
        setCaptha(value);
    }
    const handleSubmitContactForm = (event) => {
          event.preventDefault()
          if(captcha.length==0){
            return Swal.fire("Please fill in the Captha!");           
          }
          setUserName(contactFormValue.name)
          setContactFormValue({name: " ",  email: " ", phone: " ", message: " "})
          setTimeout(() => {
            setUserName("")
          }, 5000)
          
    }
    const handleContactFormChange = (event) => {
         setContactFormValue({...contactFormValue, [event.target.name]: event.target.value})
        console.log("handle change", event.target.value)
    }
  return (
    <section className="contact-forms">
        <form onSubmit={handleSubmitContactForm}>
            <div className="inputGroup">
                <div className="inputDiv">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name}  onChange={handleContactFormChange} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="email">Email:</label>
                    <input type='email' name='email' value={email}    onChange={handleContactFormChange} />
                </div>
            </div>
             
            <div className="inputDiv">
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" value={phone} onChange={handleContactFormChange} />
            </div>
            <div className="inputDiv">
                <label htmlFor="message">Message</label>
                <textarea name="message" value={message}  onChange={handleContactFormChange}></textarea>
            </div>
            <ReCAPTCHA
                sitekey="6LdGWwoqAAAAAF1PlBx4AHUjs_dE-IVNZyT2yOae"
                onChange={onChange} />
            <input type="submit" value="Send Message" />
        </form>

       {
        userName.length> 1 && <p style={{fontSize: "1.5rem"}}> Hello <span style={{fontWeight: "600"}}>{userName}</span> , Your message is recorded successfully. You will get feedback very soong. Thank you.</p>  
       }
        
    </section>
  )
}

export default ContactForms
