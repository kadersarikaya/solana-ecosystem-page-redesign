import React from 'react'
import './app.scss'
const App = ({logo, title, desc}) => {
  return (
    <div className='sol__web3-app'>
      <div className="sol__app-content">
        <div className="sol__app-logo">
          <img src={logo} alt="" />
        </div>
        <div className="sol__app-info">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="sol__app-btns">
        <button>Learn More</button>
        <button>Visit website</button>
      </div>
    </div>
  )
}

export default App