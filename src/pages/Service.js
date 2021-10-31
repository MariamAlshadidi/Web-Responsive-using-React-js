import React from 'react'
import '../styles/Services.css'
import {ServicesList} from '../helpers/ServicesList'
import ServicesItem from '../components/ServicesItem'

function Services() {
    return (
<div className='Services'>
    <h1 className='title'>OUR SERVICES</h1>
    <div className='secvice-list'>
    {ServicesList.map((clincItem, key) =>{
        return (
            <ServicesItem 
            key={clincItem.key}
            image={clincItem.image}
            text={clincItem.text}
            h2={clincItem.h2}
            />
        )
    })}
    </div>
</div>
    )
}
export default Services