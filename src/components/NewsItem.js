import React from 'react'

function NewsItem (props){
    return(
<div className='newsItem'>
    <div style={{backgroundImage : `url(${props.image})`}}></div>
    <h1>{props.text}</h1>
    <p> Read More</p>
</div>
    );
}
export default NewsItem;