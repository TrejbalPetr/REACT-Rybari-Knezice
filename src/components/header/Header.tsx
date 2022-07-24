import React, { useState } from 'react'
import "./header.css"
import Close from "../../images/Close.svg";

const Header = () => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  if(popup) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <div className='MainHeader'>
      <div className='Intro'>
        <div className='Header'>
          <h1>Jedinou předvídatelnou věcí na rybolovu je nepředvídatelnost</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Fusce wisi.</p>
          <div>
            <button type='button' className='BtnTransparent'><a href="#cottage">Chalupa</a></button>
            <button type='button' className='BtnGreen' onClick={togglePopup}>Povolenky</button>
          </div>
        </div>
      </div>
      {popup && (
        <div className="modal">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="modal-content">
            <h2>Prodej povolenek</h2>
            <p>
              V současné době <strong>není</strong> možné si zakoupit povolenku na Osecký rybník. Po usnesení členů klubu došlo k uzavření rybníka pouze pro členy, přičemž každý člen se může "zaručit"
              za dvě osoby, které si mohou povolenku zakoupit. Další možností jak si u nás zarybařit je zúčastnit se rybářských závodů (přehled konaných akcí naleznete níže na stránce). 
            </p>
            <button className="close-modal" onClick={togglePopup}>
              <img src={Close} alt="Close" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header;