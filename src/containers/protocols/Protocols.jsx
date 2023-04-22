import React from 'react'
import './protocols.scss'
import Protocol from '../../components/protocol/Protocol'
import Solend from '../../assets/logo/solend.svg'
import Port from '../../assets/logo/port.svg'
import Francium from '../../assets/logo/francium.svg'

const Protocols = () => {
  return (
    <div className='sol__top-protocols main-padding'>
      <div className="sol__protocols-header">
        <h1>Top Lending Protocols</h1>
      </div>
      <div className="sol__protocols">
        <Protocol title={"Port Finance"} logo={Solend}/>
        <Protocol title={"Francium"} logo={Port}/>
        <Protocol title={"Solend"} logo={Francium}/>
      </div>
    </div>
  )
}

export default Protocols