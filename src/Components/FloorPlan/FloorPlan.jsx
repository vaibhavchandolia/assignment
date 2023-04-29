import React from 'react'
import './FloorPlan.css'

export default function FloorPlan() {
  return (
    <div id='floorplan'   className='floorplan-container'>
        <h1>SITE & FLOOR PLAN</h1>
        <div className="floorplan-card">
            <div className="card">
                <div className="img-con img1"></div>
                <button className='flr-btn'>Master Plan</button>
            </div>
            <div className="card">
                <div className="img-con img2"></div>
                <button className='flr-btn'>Villa Plan</button>
            </div>
        </div>
    </div>
  )
}
