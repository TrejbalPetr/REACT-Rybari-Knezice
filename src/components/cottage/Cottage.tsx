import React, { useState } from 'react'
import CottageImg from "../../images/Cottage.jpg"
import Callendar from "../../images/Callendar.png"
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar'
import "./cottage.css"

const Cottage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='Cottage'>
      <div className='CottageLeft'>
        <div className='CottageLeftImg'>
          <img src={CottageImg} alt="Chalupa" />
        </div>
        <div className='CottageLeftText'>
          <h1>Chalupa</h1>
          <p>Jako klub vlastníme chalupu na břehu Oseckého rybníka, kterou je možné využít k soukromým akcím. Chalupa je vybavena vnitřním sezením, WC se sprchou a je zde také možnost přespání v půdních prostorech. Po domluvě je také možné zapůjčit "pivní sety" k venkovnímu posezení nebo gril.</p>
        </div>
        <button className='BtnGreen'>
          Rezervace
        </button>
      </div>
      <div className='CottageRight'>
        <div className='CottageRightImg'>
          {/* <img src={Callendar} alt="Kalendář" /> */}
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  )
}

export default Cottage