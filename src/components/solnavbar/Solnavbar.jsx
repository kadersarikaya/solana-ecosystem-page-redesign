import React, {useState} from 'react'
import logo from '../../assets/logo/solanaLogo.svg';
import './solnavbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc';

const Solnavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="sol__navbar main-padding">
      <div className="sol__navbar-container">
        <div className="sol__navbar-links">
          <div className="sol__navbar-links_logo">
            <img src={logo} alt="solana-logo" />
          </div>
          <div className="sol__navbar-links_container">
            <p>
              <a href="#learn">Learn</a>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#A4A5A7"/>
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#fff" fill-opacity="0.04"/>
              </svg>
            </p>
            <p>
              <a href="#build">Build</a>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#A4A5A7"/>
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#fff" fill-opacity="0.04"/>
              </svg>
            </p>
            <p>
              <a href="network">Network</a>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#A4A5A7"/>
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#fff" fill-opacity="0.04"/>
              </svg>
            </p>
            <p>
              <a href="community">Community</a>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#A4A5A7"/>
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#fff" fill-opacity="0.04"/>
              </svg>
            </p>
          </div>
        </div>
        <div className="sol__navbar-menu">
          {toggleMenu ?<VscChromeClose color='#fff'size={24} onClick={()=> setToggleMenu(false)} /> 
          : <GiHamburgerMenu color='#fff' size={24} onClick={()=> setToggleMenu(true)} />}
        </div>
      </div>
      {toggleMenu && (
        <div className="sol__navbar-menu_container">
          <div className="sol__navbar-menu_container-links">
            <p>
              <a href="#learn">Learn</a>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#A4A5A7"/>
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#fff" fill-opacity="0.04"/>
              </svg>
            </p>
            <p>
              <a href="#build">Build</a>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#A4A5A7"/>
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#fff" fill-opacity="0.04"/>
              </svg>
            </p>
            <p>
              <a href="network">Network</a>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#A4A5A7"/>
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#fff" fill-opacity="0.04"/>
              </svg>
            </p>
            <p>
              <a href="community">Community</a>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#A4A5A7"/>
                <path d="M11.79 1.28957C11.4 0.89957 10.77 0.89957 10.38 1.28957L6.49998 5.16957L2.61998 1.28957C2.22998 0.89957 1.59998 0.89957 1.20998 1.28957C0.819977 1.67957 0.819977 2.30957 1.20998 2.69957L5.79998 7.28957C6.18998 7.67957 6.81998 7.67957 7.20998 7.28957L11.8 2.69957C12.18 2.31957 12.18 1.67957 11.79 1.28957Z" fill="#fff" fill-opacity="0.04"/>
              </svg>
            </p>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Solnavbar