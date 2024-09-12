import React from 'react'
import '../Style/Contact.css'
const Contact = () => {
  return (
    <div id="contact" className='cont'>
      <h1>CONTACT US</h1>
      <form className='form-contact'>
        <label>Name:</label>
        <input type='text'/>
        <br/>
        <label>Contact:</label>
        <input type='number'/>
        

      </form>
      <p>ADD our details here so that they can call </p>
    </div>
  )
}

export default Contact