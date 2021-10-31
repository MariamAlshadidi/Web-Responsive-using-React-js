import React from 'react'
import '../styles/Clinc.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import {ClincList} from '../helpers/ClincList'
import clincItem from '../components/ClincItem'

function Clinc() {
    return (
<div className='clinc'>
    <h1>Follow us on <span> instagram </span></h1>
    <div className='clincList'>
    {ClincList.map((clincItem, key)=>{
        return (
            <clincItem 
            key={clincItem.key}
            image={clincItem.image}
            text={clincItem.text}
            />
        )
    })}
    </div>
    <button><InstagramIcon/></button>
</div>
    )
}
export default Clinc