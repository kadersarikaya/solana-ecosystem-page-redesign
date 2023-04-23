import React from 'react'
import './events.scss' 
import {Event} from '../../components/' 
import austin from '../../assets/images/austinhh.png'
import berlin from '../../assets/images/berlinhh.png'
import istanbul from '../../assets/images/istanbulhh.png'
import chicago from '../../assets/images/chicagohh.png'

const Events = () => {
  return (
    <div className='sol__events main-padding' >
      <h1>Upcoming Solana Events</h1>
       <div className="sol__events-container">
        <Event img={istanbul} title={"Istanbul Hacker House"} date={"FEB 1"} />
        <Event img={chicago} title={"Chicago BootCamp"} date={"JUL 23"} />
        <Event img={berlin} title={"Berlin Hacker House"} date={"AUG 30"} />
        <Event img={austin} title={"Austin Hacker House"} date={"Apr 20"} />
      </div>  
      <div className="sol__event-details-btn">
        <button>See all events</button>
      </div>
    </div>
  )
}

export default Events