import React from 'react'
import './dex.scss'
const Dex = ({logo, title, desc}) => {
  return (
    <div className='sol__dex'>
      <img src={logo} alt="" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Dex