import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import "../styles/SectionHome.css";
import Services from '../pages/Service'
import CatImage from '../assets/cat1.png'
import DogImage from '../assets/dog1.png'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


function SectionHome (){
    return (
        <div className="home" >
        <div className='homa-img' >
        <div className='overlay'></div>
        <div className="headerContainer">
          <h1> Welcome to Pet Clinic</h1>
          <p> We Are Open And Ready To Help</p>
          <Link to="/menu">
            <div className='button'>
            <h3> BOOK ONLINE</h3>
            <LocalHospitalIcon/> 
            </div>
            
          </Link>
        </div>
        </div>
  <div className='cat-dog'>
    <h1 className='cat-dog-title'>Animal Clinic in Riyadh, SA</h1>
    <p className='cat-dog-p'>Our pet clinic has served the local area since 1967, . Some of the services we offer include:</p>
    <div className='cat-dog-card'>
      <div className='card'>
  <img src={CatImage}/>
  <Link to="/menu"><button  className='btn'>Cat Health Care</button></Link>
  
      </div>
      <div className='card'>
  <img src={DogImage} />
  <Link to="/menu"><button className='btn'>Dog Health Care</button></Link>
      </div>
    </div>
    <div className='waht-can-do'>
        <h1>What Our Veterinary Clinic Can Do</h1>
        <p>Pets need medical care and disease prevention just like people, and we provide all of the shots, screenings, exams, and imaging they require. These are small investments with big payoffs; </p>
      </div>
  </div>
  <div className='service'>
  <Services/>
  </div>
  <hr/>
       <div className='last'>
         <div className='last-card'>
           <h2>Clinic Foundation</h2>
           <p>We're committed to making a better world for pets because they make a better world </p>
           <h3>Explore the Clinic Foundation</h3>
         </div>
         <div className='last-card'>
           <h2>Careers</h2>
           <p>Become a part of a respected and dedicated network that shares your passion for pets.</p>
           <h3>Get started on a Clinic career</h3>
         </div>
         <div className='last-card'>
           <h2>Equity, inclusion</h2>
           <p>We build a workplace that engages the voices and insights of all of our Associates.</p>
           <h3>See more about our approach</h3>
         </div>
       </div>
      </div>
  
    )
}
export default SectionHome