import React from 'react'
import './defiprojects.scss'
import { Defi } from '../../components'
import drift from "../../assets/logo/drift-logo.svg"
import jupiter from "../../assets/logo/jupiter-logo.svg"
import orca from "../../assets/logo/orca-logo.svg"

const Defiprojects = () => {
  return (
    <div className='sol__defi-projects main-padding' >
      <div className="sol__defi-header">
        <h1>Top DeFi Projects</h1>
        <div className="sol__defi-carousel">
          <Defi btnMargin={46} img={orca} title={"Orca"} slogan={"DeFi for people, not programs"} description={"Trade, farm, and build on Solana’s most user-friendly concentrated liquidity AMM."}/>
          <Defi btnMargin={66} img={jupiter} title={"Jupiter Aggregator"} slogan={"Built for smart traders who like money"} description={"Jupiter offers a wide range of tokens in the Solana ecosystem."}/>
          <Defi btnMargin={66} img={drift} title={"Drift Protocol"} slogan={"Trade with leverage. Earn yield."} description={"All your assets cross-margined and a lightning fast experience."}/>
        </div>
      </div>
    </div>
  )
}

export default Defiprojects