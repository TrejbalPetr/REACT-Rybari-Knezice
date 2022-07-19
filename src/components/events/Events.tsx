import React from 'react'
import "./events.css"
import Competition from "../../images/Zavody.jpg"
import Band from "../../images/Band.jpg"

const Events = () => {
  return (
    <div>
      <div className='EventsMain' id='events'>
        <h1>Události</h1>
      </div>
      <div className='Events'>
        <div className='EventLeft'>
          <img src={Competition} alt="Závody" />
          <h2>Závody</h2>
          <p>Klub sportovních rybářů Kněžice každoročně pořádá několik závodů. Prvního května se tradičně pořádají závody dětské, dále 24hodinový memoriál Františka Hlaváčka a Františka Melišíka, který probíhá okolo poloviny června. Pro velký zájem v posledních letech jsou ještě pořádány zářiové 12hodinové závody dospělých.</p>
        </div>
        <div className='EventsRight'>
          <img src={Band} alt="Malý drobný band" />
          <h2>Malý Drobný Band</h2>
          <p>30.7. 2022 se uskuteční tradiční letní akce u Oseckého rybníka, kde pro poslech zachraje skupina Malý Drobný Band. Občerstvení zajištěno.</p>
          <h2>událost 2</h2>
        </div>
      </div>
    </div>
  )
}

export default Events