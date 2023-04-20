import React from 'react'
import './header.scss';
const Header = () => {
  return (
    <div className='sol__header'>
      <div className="sol__header-content">
         <div className="sol__header-content-cta main-padding">
          <h1>Discover the hottest projects on Solana</h1>
          <button className='sol__explore-btn' >EXPLORE THE ECOSYSTEM</button>
        </div>
      </div>
    </div>
  )
}

export default Header