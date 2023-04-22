import React from 'react'
import './defi.scss'
const Defi = ({img, title,slogan,description, btnMargin}) => {
  return (
    <div className="sol__defi-container">
      <div className="sol__defi-content">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <span>{slogan}</span>
        <p>{description}</p>
        <button style={{
          marginTop: btnMargin
        }} >VISIT WEBSITE
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.33301 10.8753L0.458008 10.0003L9.04134 1.41699H1.16634V0.166992H11.1663V10.167H9.91634V2.29199L1.33301 10.8753Z" fill="white"/>
            <path d="M1.33301 10.8753L0.458008 10.0003L9.04134 1.41699H1.16634V0.166992H11.1663V10.167H9.91634V2.29199L1.33301 10.8753Z" fill="#9945FF" fill-opacity="0.04"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Defi