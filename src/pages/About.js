import React from 'react'
import'../styles/About.css'
import MultiplePizzas from '../assets/8.jpg'

function About(){
    return (
<div className='about'>
<div className='aboutTop'  style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
<div className='aboutBottom'>
    <h1>About Us</h1>
    <p> 
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis magni odit delectus 
    facere necessitatibus deleniti expedita officia cupiditate dolore ipsa!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis magni odit delectus 
    facere necessitatibus deleniti expedita officia cupiditate dolore ipsa!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis magni odit delectus 
    facere necessitatibus deleniti expedita officia cupiditate dolore ipsa!
    </p>
</div>
</div>
    )
}
export default About