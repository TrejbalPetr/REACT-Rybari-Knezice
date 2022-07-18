import React from 'react'
import "./events.css"

const Events = () => {
  return (
    <div className='EventsMain' id='events'>
      <h1>Události</h1>
      <div className='Events'>
        <div className='EventLeft'>
          <h2>Závody</h2>
        </div>
        <div className='EventsRight'>
          <h2>Událost 1</h2>
          <h2>událost 2</h2>
        </div>
      </div>
    </div>
  )
}

export default Events