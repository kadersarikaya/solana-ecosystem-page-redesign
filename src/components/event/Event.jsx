import React from 'react'
import './event.scss'
import telegram from "../../assets/logo/Telegram.svg"
import twitter from "../../assets/logo/Twitter.svg"
const Event = ({img, title, date}) => {
  return (
    <section className='sol__event' >
      <div className="sol__event-img">
        <img src={img} alt="event" />
      </div>
      <div className="sol__event-info">
        <span>{date}</span>
        <h1>{title}</h1>
        <div className="sol__event-social">
          <a href="https://twitter.com/solana" target="_blank" rel="noreferrer">
            <img src={telegram} alt="" />
          </a>
          <a href="https://twitter.com/solana" target="_blank" rel="noreferrer">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="sol__event-btns">
          <button>Details</button>
          <button> RSVP</button>
        </div>
      </div>
    </section>
  )
}

export default Event