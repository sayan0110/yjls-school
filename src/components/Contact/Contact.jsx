import React from 'react'
import contact from "../A_media/contact.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='main'>
    <div className='side-image'>
        <img src={contact} alt="contact"/>
    </div>
    <form action='https://formspree.io/f/xyyrbnkk' method='POSTcontact' className='contact-container' >
        <h1>Contact us</h1>
        <input id='name' type="text" name="name" placeholder="Name" />
        <input id='email' type="email" name='email' placeholder='Email'/>
        <input id='message' type="text" name='message' placeholder='Message'/>
        <button type='submit' >Send Message</button>
    </form>
    </div>
  )
}

export default Contact