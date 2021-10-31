
import React from 'react'

function ServicesItem (props){
    return(
<div className='Servicesitem'>
    <div style={{backgroundImage : `url(${props.image})`}} ></div>
    <h2>{props.h2}</h2>
    <p>{props.text}</p>
</div>
    )
}
export default ServicesItem;