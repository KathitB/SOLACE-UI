import React from 'react'
import Autopilot from "../../assets/autopilot-dashboard.svg"
import "./styles/AutopilotDashboard.scss"

export default function AutopilotDashboard() {
  return (
    <div className='autopilot-section'>
    <div className='autopilot-container'>
      <div className='autopilot-headline'>
        <h1 className='title'>Your autopilot dashboard</h1>
        <p className='subtitle'>See your entire operations from one-screen anytime, anywhere.</p>
      </div>

      <div className='dashboard-image'>
        <img src={Autopilot} alt='autopilot'/>
      </div>
    </div>

    
    </div>
  )
}
