import React from 'react'
import './newsletter.scss'

const Newsletter = () => {
  return (
    <div className='sol__newsletter main-padding'>
      <div className="sol__newsletter-header">
        <span>JOIN OUR NEWSLETTER</span>
        <h1>Sign up to the Solana Newsletter</h1>
        <p>We promise we won’t spam you</p>
      </div>
      <div className="sol__newsletter-form">
        <form action="">
          <input placeholder='Your email address' type="text" />
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter