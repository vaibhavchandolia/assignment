import React from 'react'
import Amenities from '../Amenities/Amenities'
import FloorPlan from '../FloorPlan/FloorPlan'
import Home from '../Home/Home'
import Location from '../Location/Location'
import Navbar from '../Navbar/Navbar'
import Overview from '../Overview/Overview'
import Pricing from '../Pricing/Pricing'
import VideoTour from '../VideoTour/VideoTour'
import './App.css'

export default function App() {
  return (
    <div className='app'>
        <Navbar />
        <Home />
        <Overview />
        <Amenities />
        <Pricing />
        <FloorPlan />
        <Location />
        <VideoTour />
    </div>
  )
}
