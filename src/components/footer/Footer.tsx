import React from 'react'
import logo from '../../images/logo.svg';
import CZ from '../../images/CZ.svg';
import "./footer.css"
import ChevronRight from "../../images/chevron-right.svg";

const Footer = () => {
  return (
    <div className='Footer' id='contact'>
      <div className='FooterText'>
        <div className='FooterLogo'>
          <div className='LogoImg'>
            <img src={logo} alt="logo" />
          </div>
          <div className="LogoText">
              <h4>Klub sportovních</h4>
              <h4>rybářů Kněžice</h4>
          </div>
        </div>
        <div className='FooterColumns'>
          <h2>Odkazy</h2>
          <a href="#about">
            <img src={ChevronRight} alt="Chevron Right"/>
            <p>O klubu</p>
          </a>
          <a href="#catches">
            <img src={ChevronRight} alt="Chevron Right"/>
            <p>Úlovky</p>
          </a>
          <a href="#about">
            <img src={ChevronRight} alt="Chevron Right"/>
            <p>Akce klubu</p>
          </a>
          <a href="#about">
            <img src={ChevronRight} alt="Chevron Right"/>
            <p>Pro členy</p>
          </a>
        </div>
        <div className='FooterColumns'>
          <h2>Kantakt</h2>
          <div>
            <img src={ChevronRight} alt="Chevron Right"/>
            <p>Kněžice 202, 289 02</p>
          </div>
          <div>
            <img src={ChevronRight} alt="Chevron Right"/>
            <p>+420 724 150 703</p>
          </div>
          <div>
            <img src={ChevronRight} alt="Chevron Right"/>
            <p>rybari.knezice@seznam.cz</p>
          </div>
        </div>
        <div className='MapAlign'>
          <img className='MapImg' src={CZ} alt="CZ map" />
        </div>  
      </div>
      <div className='FooterCopy'>
        <p>Oficiální stránky klubu sportovních rybářů Kněžice © 2022</p>
      </div>
    </div>
  )
}

export default Footer;