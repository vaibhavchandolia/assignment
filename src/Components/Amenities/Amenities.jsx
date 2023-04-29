import React from 'react'
import './Amenities.css'

export default function Amenities() {
  return (
    <div id='amenities' className='amenities-container'>
        <div className="amenities-head">
            <h1>Amenities</h1>
        </div>
        <ul className='amenities-parent'>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Badminton Court</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Gymnasium</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Football Field</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Yoga Deck</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Party Hall</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Skating Rink</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Amphitheatre</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Basketball Court</li>
        </ul>
    </div>
  )
}
