import React from 'react';
import '../styles/News.css'
import {NewsList} from '../helpers/NewsList.js'
import NewsItem from '../components/NewsItem'



function News (){
    return (
        <div className='news'>
<h1>News</h1>
<div className='newsList'>
{NewsList.map((newsItem, key) => {
return (
<NewsItem
key={key}
 image={newsItem.image}
 text={newsItem.text}
 price={newsItem.price}

/>

)}
)}
</div>
        </div>
    )
}
export default News