import React, { useState } from 'react'
import Calendar from 'react-calendar'
import moment from 'moment'

import CottageImg from "../../images/Cottage.jpg"

import 'react-calendar/dist/Calendar.css';
import "./cottage.css" /*CSS kalendáře v Calendar.css */



const Cottage = () => {
  const [dateState, setDateState] = useState(new Date());

  const [fullDates, setFullDates] = useState([
    {date: new Date('2022-07-02'), text: "Olík"},
    {date: new Date('2022-07-03'), text: "Kamča"},
    {date: new Date('2022-07-04'), text: "Hanička"}
  ]);

  let vybranyDen: String = "---"
  let textColor: string = "#009900"
  let allFullDates: Date[] = [];

  for(let i = 0; i < fullDates.length; i++){
    allFullDates.push(fullDates[i].date);
  }

  for(let i = 0; i < fullDates.length; i++){
    if(fullDates[i].date.getFullYear() === dateState.getFullYear() && fullDates[i].date.getMonth() === dateState.getMonth() && fullDates[i].date.getDate() === dateState.getDate()){
      vybranyDen = fullDates[i].text;
      textColor = "#ff0000";
      break;
    }else{
      vybranyDen = "---";
      textColor = "#009900";
    }
  }

  return (
    <div className='Cottage'>
      <div className='CottageLeft'>
        <div className='CottageLeftImg'>
          <img src={CottageImg} alt="Chalupa" />
        </div>
        <div className='CottageLeftText'>
          <h1>Chalupa</h1>
          <p>Jako klub vlastníme chalupu na západním břehu Oseckého rybníka, kterou je možné využít k soukromým akcím. Chalupa je vybavena vnitřním sezením, WC se sprchou a je zde také možnost přespání v půdních prostorech. Po domluvě je také možné zapůjčit "pivní sety" k venkovnímu posezení nebo gril.</p>
        </div>
        <button className='BtnGreen'>
          Rezervace
        </button>
      </div>
      <div className='CottageRight'>
        <Calendar onChange={setDateState} value={dateState} 
          tileClassName = {({ date, view }) => {
            if((view === 'month') && allFullDates.some(disabledDate => date.getFullYear() === disabledDate.getFullYear() && date.getMonth() === disabledDate.getMonth() && date.getDate() === disabledDate.getDate())){
              return 'CottageFull';
            }
          }}
        />

        <p className='CalendarResult'>Dne <b>{moment(dateState).format('DD. MM. YYYY')}</b> je chalupa <b style={{color: textColor}}>{vybranyDen !== "---" ? "obsazená" : "volná"}</b>.</p>
        <p>(Pozn.: {vybranyDen})</p>
      </div>
    </div>
  )
}

export default Cottage