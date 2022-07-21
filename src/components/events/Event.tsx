import React from 'react'
import "./events.css"

const Event = ( {Data} ) => {
  let BgColor = "TypeOne";
  if (Data.type === 2){
    BgColor = "TypeTwo"
  }  

  return (
    <div className = {BgColor} style={{background: "linear-gradient(128deg, {BgColor})"}}>
    {/* // <div className='Event Blue'> */}
        <img src={Data.img} alt={Data.title} />
        <h2>{Data.title}</h2>
        <small>{Data.text}</small>
    </div>
  )
}

export default Event