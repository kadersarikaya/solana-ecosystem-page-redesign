import React from 'react'
import './categories.scss';
import Category from '../../components/category/Category';
import DeFi from '../../assets/icons/defi-icon.svg'
import Gaming from '../../assets/icons/gaming-icon.svg'
import Infra from '../../assets/icons/infra-icon.svg'
import Nft from '../../assets/icons/nft-icon.svg'
import Node from '../../assets/icons/node-icon.svg'

const Categories = () => {
  return (
    <div className='sol__categories main-padding' >
      <div className="sol__categories-header">
        <ul className='d-flex'>
          <li><a href="">DeFi Projects</a></li>
          <li><a href="">Marketplaces</a></li>
          <li><a href="">Lending Protocols</a></li>
          <li><a href="">Apps</a></li>
          <li><a href="">Events</a></li>
        </ul>
      </div>
      <div className="sol__categories-content">
        <div className="sol__categories__header">
          <div className="sol__categories-title">
            <h1>Browse by category</h1>
          </div>
          <div className="sol__categories-btn">
            <button>View all</button>
          </div>
        </div>
        <div className="sol__categories-body">
          <div className="sol__category-single">
            <Category title={"DeFi"} num={103} img={DeFi}/>
          </div>
          <div className="sol__category-single">
            <Category title={"NFT"} num={408} img={Nft}/>
          </div>
          <div className="sol__category-single">
            <Category title={"Gaming"} num={60} img={Gaming}/>
          </div>
          <div className="sol__category-single">
            <Category title={"Node Operator"} num={24} img={Infra}/>
          </div>
          <div className="sol__category-single">
            <Category title={"Infrastructure"} num={37} img={Node}/>
          </div>
          <div className="sol__category-single">
            <Category title={"DeFi"} num={103} img={DeFi}/>
          </div>
          <div className="sol__category-single">
            <Category title={"NFT"} num={408} img={Nft}/>
          </div>
          <div className="sol__category-single">
            <Category title={"Gaming"} num={60} img={Gaming}/>
          </div>
          <div className="sol__category-single">
            <Category title={"Node Operator"} num={24} img={Infra}/>
          </div>
          <div className="sol__category-single">
            <Category title={"Infrastructure"} num={37} img={Node}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories