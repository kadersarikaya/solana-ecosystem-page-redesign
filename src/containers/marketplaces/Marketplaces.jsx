import React from 'react'
import {Marketplace} from '../../components'
import './marketplaces.scss'
import expandArrow from '../../assets/icons/expandArrow.svg'
import digitalEyes from '../../assets/images/digitalEyes.svg'
import exchange from '../../assets/images/exchange.svg'
import magicEden from '../../assets/images/magicEden.svg'
import metaplex from '../../assets/images/metaplex.svg'
import solanaArt from '../../assets/images/solanaArt.svg'
import solSea from '../../assets/images/solsea.svg'
import solanartLogo from '../../assets/logo/solanartLogo.svg'
import solseaLogo from '../../assets/logo/solseaLogo.svg';
import metaplexLogo from '../../assets/logo/metaplex.svg';
import magicEdenLogo from '../../assets/logo/magicEden.svg'
import exchangeLogo from '../../assets/logo/exchange.svg'
import digitalEyesLogo from '../../assets/logo/eyes.svg'

const Marketplaces = () => {
  return (
    <div className='sol__nft main-padding'>
      <h1>Top NFT Marketplaces</h1>
      <div className="sol__nfts-mp">
        <Marketplace img={exchange} logo={exchangeLogo} title={"Exchange Art"} desc={"Exchange is the most innovative NFT marketplace on Solana."}/>
        <Marketplace img={solanaArt} logo={solanartLogo} title={"Solana Art"} desc={"Solanart is the first fully-fledged NFT marketplace on Solana."}/>
        <Marketplace img={solSea} logo={solseaLogo} title={"Solsea"} desc={"The biggest NFT platform on Solana"}/>
        <Marketplace img={magicEden} logo={magicEdenLogo} title={"Magic Eden"} desc={"Magic Eden is the leading NFT Marketplace on Solana."}/>
        <Marketplace img={digitalEyes} logo={digitalEyesLogo} title={"Digital Eyes"} desc={"One of the best Solana NFT and Sol marketplace."}/>
        <Marketplace img={metaplex} logo={metaplexLogo} title={"Metaplex"} desc={"Free-to-use, open source NFT standard & protocol."}/>
      </div>
      <div className="sol__nft-expand">
        <p>Expand</p>
        <img src={expandArrow} alt="expand"/>
      </div>
    </div>
  )
}

export default Marketplaces