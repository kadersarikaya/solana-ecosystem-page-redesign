import React from 'react'
import './apps.scss'
import {App} from '../../components/'
import audius from '../../assets/logo/audius.svg'
import grape from '../../assets/logo/grape.svg'
import panzer from '../../assets/logo/panzer.svg'
import phantasia from '../../assets/logo/phantasia.svg'
const Apps = () => {
  return (
    <div className='sol__web3-apps main-padding'>
      <h1>Top Web3 Apps</h1>
      <div className="sol__top-apps">
        <App logo={phantasia} title={"Phantasia Sports"} desc={"The Future of Fantasy Sports"}/>
        <App logo={audius} title={"Audius"} desc={"Audius is a fully decentralized music platform. Own the masters & the platform."}/>
        <App logo={grape} title={"Grape Protocol"} desc={"The Future of Fantasy Sports"}/>
        <App logo={panzer} title={"Panzer Dogs"} desc={"A PVP tank brawler on Solana starting with the release of 5555 unique dog avatars."}/>
      </div>
    </div>
  )
}

export default Apps 