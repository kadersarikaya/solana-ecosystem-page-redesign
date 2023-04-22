import React from 'react'
import './marketplace.scss'
const Marketplace = ({img, logo, title, desc}) => {
  return (
    <div className='sol__nft-mp' >
      <div className="sol__nft-content-up">
        <img src={img} alt="" />
      </div>
      <div className="sol__nft-content-down">
        <img src={logo} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Marketplace