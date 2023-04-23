import React from 'react'
import './dexprojects.scss'
import {Dex} from '../../components'
import cropper from '../../assets/logo/cropper.svg'
import dexlab from '../../assets/logo/dexlab.svg'
import HydraSwap from '../../assets/logo/HydraSwap.svg'
import lumos from '../../assets/logo/lumos.svg'
import ohone from '../../assets/logo/01.svg'
import solendLogo from '../../assets/logo/solendLogo.svg'
const Dexprojects = () => {
  return (
    <div className='sol__dex-projects main-padding'>
      <div className="sol__dex-header">
        <h1 className="sol__dex-title">DEX Projects</h1>
        <button>View all</button>
      </div>
      <div className="sol__dex-projects-container">
        <Dex logo={lumos} title={"Lumos Exchange"} desc={"Lumos is developing the first non-custodial, peer-to-peer exchange for Solana."} />
        <Dex logo={cropper} title={"CropperFinance"} desc={"Bringing yield farming to the next level on Solana."} />
        <Dex logo={HydraSwap} title={"HydraSwap"} desc={"DEX is Better Than CEX With HydraSwap"} />
        <Dex logo={ohone} title={"01"} desc={"Secure, trustless & powerful crypto exchange."} />
        <Dex logo={dexlab} title={"Dexlab"} desc={"Dexlab makes launching on Solana easy with a minting lab, a launchpad and a dedicated DEX for all listings"} />
        <Dex logo={solendLogo} title={"Solend"} desc={"Solend is the bank of the future, for everyone."} />
      </div>
    </div>
  )
}

export default Dexprojects