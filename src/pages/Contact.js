import React from 'react'
import PizzaLeft from '../assets/6.jpg'
import '../styles/Contact.css'

function Contact (){
    return(
        <div className='contact'>
<div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
<div className='rightSide'> 
<h1>Contact Us</h1>
<form>
    <label htmlFor='name' method='POST'>Full Name</label>
    <input name='name' placeholder=' Enter Your Name' type='text'></input>

    <label htmlFor='email' method='POST'>Email</label>
    <input name='email' placeholder=' Enter Email...' type='email'></input>

    <label htmlFor='message' method='POST'>Message</label>
    <textarea rows='6' placeholder='Enter Your Message' name='message'></textarea>
    <button type='submit'>SEND MESSAGE</button>
</form>
</div>

        </div>
    )
}
export default Contact