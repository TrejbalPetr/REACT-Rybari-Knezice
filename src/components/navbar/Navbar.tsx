import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from '../../images/logo.svg';
import home from "../../images/home.svg";
import admin from "../../images/admin.svg";
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='Navbar'>
      <div className='Logo'>
        <img src={logo} alt="logo" />
        <div className="LogoText">
            <h4>Klub sportovních</h4>
            <h4>rybářů Kněžice</h4>
        </div>
      </div>  
      <div className='Menu'>
      <h4><a href="#home"><img src={home} alt="home" /></a></h4>
        <h4><a href="#about">O klubu</a></h4>
        <h4><a href="#catches">Úlovky</a></h4>
        <h4><a href="#events">Události</a></h4>
        <h4><a href="#forMembers">Pro členy</a></h4>
        <h4><a href="#contact">Kontakty</a></h4>
        <h4 className="homeIcon"><a href="#login"><img src={admin} alt="admin" /></a></h4>
      </div>
      <div className='MenuMobile'>
        {toggleMenu
          ? <RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="MenuMobileContainer scale-up-center">
          <div className="MenuMobileText">
            <h4><a href="#home"><img src={home} alt="home" /></a></h4>
            <h4><a href="#about">O klubu</a></h4>
            <h4><a href="#catches">Úlovky</a></h4>
            <h4><a href="#events">Události</a></h4>
            <h4><a href="#forMembers">Pro členy</a></h4>
            <h4><a href="#contact">Kontakty</a></h4>
            <h4><a href="#login"><img src={admin} alt="admin" /></a></h4>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar