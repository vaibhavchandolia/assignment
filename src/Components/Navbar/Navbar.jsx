import React from 'react'
import logo from './../../Assets/logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className="nav-left">
            <img className='logo' src={logo} alt="logo" />
        </div>
        <div className="nav-right">
            <ul className='nav-elements'>
                <li className='nav-li'><a className='nav-link' href='#home'>Home</a></li>
                <li className='nav-li'><a className='nav-link' href='#overview'>Overview</a></li>
                <li className='nav-li'><a className='nav-link' href='#amenities'>Amenities</a></li>
                <li className='nav-li'><a className='nav-link' href='#pricing'>Pricing Details</a></li>
                <li className='nav-li'><a className='nav-link' href='#floorplan'>Site & Floor Plan</a></li>
                <li className='nav-li'><a className='nav-link' href='#location'>Location</a></li>
                <li className='nav-li'><a className='nav-link' href='#virtualtour'>Virtual tour</a></li>
            </ul>
        </div>
    </div>
  )
}
