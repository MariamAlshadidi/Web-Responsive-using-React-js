import React from 'react'

function ClincItem (props){
    return(
<div className='clicn-Item'>
    <div style={{backgroundImage : `url(${props.image})`}} ></div>
    <p>{props.text}</p>
</div>
    )
}
export default ClincItem;