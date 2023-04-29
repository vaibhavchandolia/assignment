import React from 'react'
import { Carousel } from '../Carousel/Carousel'
import  data  from "./../../Data/carouselData.json"
import logo from './../../Assets/dew-drops-logo.jpg'
import about from './../../Assets/about-img.jpg'
import './Home.css'

export default function Home() {
  return (
    <div id='home' className='home'>
        <Carousel data={data.slides} />
        <div className="project-details">
            <div className="home-img-con"><img className='project-img' src={logo} alt="dew-drop-logo" /></div>
            <div className="dew-detail">
                <h2>Prestige Dew Drops</h2>
                <p>Doddaballapur Main Rd, Adde Vishwanathapura, Rajanukunte, Bengaluru , 560064.</p>
            </div>
            <button className="button-5" role="button">Enquire Now</button>
        </div>
        <div className='about-container'>
            <h1>Where the Dream of Your Lavish Villa Experience Comes True </h1>
            <p>Become a Pride Resident of the Finest Locale of Yehalanka</p> 
            <div className="drop1">
                <div className="about-img-con"><img className='about-img' src={about} alt="about" /></div>
                <div className="about-details">
                    <div className="about-details-child">
                        <h3>Enticing Mix of Amenities</h3>
                        <p>9 Ft Grand Entrance, 10K Sq. Ft Clubhouse & Other Provisions</p>
                    </div>
                    <div className="about-details-child">
                        <h3>Exclusive Villa Luxury</h3>
                        <p>Nature Homes with Classy Interiors & Engineered-wood Flooring</p>
                    </div>
                    <div className="about-details-child">
                        <h3>Address of the Future</h3>
                        <p>Placed Near Upcoming Metro Station Connecting Airport, KR Puram, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
