import React from 'react'
import "./events.css"

const Event = ( {Data} ) => {
  let BgColor = "TypeOne";
  let DateText = "Zjistit více";
  if (Data.type === 2){
    BgColor = "TypeTwo"
    DateText = "Datum konání: ";
  }  

  return (
    <div className = {BgColor} style={{background: "linear-gradient(128deg, {BgColor})"}}>
    {/* // <div className='Event Blue'> */}
        <div>
          <img src={Data.img} alt={Data.title} />
          <h2>{Data.title}</h2>
          <p className='EventText'>{Data.text}</p>
        </div>
        <div className='EventDate'>
          <small>{DateText}</small><p><strong>{Data.date}</strong></p>
        </div>
    </div>
  )
}

export default Event