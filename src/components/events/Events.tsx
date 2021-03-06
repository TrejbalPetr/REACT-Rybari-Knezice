import React from 'react'
import "./events.css"
import Event from './Event'
// import Competition from "../../images/Zavody.jpg"
// import Band from "../../images/Band.jpg"
import Carp from "../../images/Carp.jpg"
import MalyDrobnyBand from "../../images/MalyDrobnyBand2.jpg"
import fishingCompetition from "../../images/fishingCompetition.jpg"


const DataEvents = [
  { img: fishingCompetition, 
    title: "Závody",
    date: "",
    text: "Klub sportovních rybářů Kněžice každoročně pořádá několik závodů. Prvního května se tradičně pořádají závody dětské, dále 24hodinový memoriál Františka Hlaváčka a Františka Melišíka, který probíhá okolo poloviny června. Pro velký zájem v posledních letech pořádány zářiové 12hodinové závody dospělých.", 
    type: 1,
  },
  { img: MalyDrobnyBand, 
    title: "Malý drobný band", 
    date: "30. 7. 2022",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Phasellus et lorem id felis nonummy placerat.", 
    type: 2,
  },
  { img: Carp, 
    title: "Prodej vánočních kaprů", 
    date: "23. 12. 2022",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Phasellus et lorem id felis nonummy placerat. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est.", 
    type: 2,
  },
];

const Events = () => {
  return (
    <div className='Events' id='events'>
      <h1>Události</h1>
      <div className='EventsEvent'>
        {DataEvents.map((DataEvent) => ( <Event Data={DataEvent} /> ))}
      </div>
    </div>
  )
}

export default Events