import React from 'react'
import "./members.css"
import Profile from "./Profile"
import Foto1 from "../../images/ProfileFoto.png"
import Foto2 from "../../images/ProfileFotoPredseda.jpg"

const DataMembers = [
  { img: Foto1, 
    name: "Oldřich Donát", 
    use: "Místopředseda", 
  },
  { img: Foto1, 
    name: "Jaroslav Šafařík", 
    use: "Hospodář", 
  },
  { img: Foto2, 
    name: "Petr Trejbal", 
    use: "Předseda", 
  },
  { img: Foto1, 
    name: "Luboš Zdeněk", 
    use: "Pokladník", 
  },
  { img: Foto1, 
    name: "Pavel Trejbal", 
    use: "Člen výboru", 
  },
];

const Members = () => {
  return (
    <div className='Members'>
      <h1>Členové výboru</h1>
      <div className='MembersPeople'>
        {DataMembers.map((Member) => ( <Profile Member={Member} /> ))}
      </div>
    </div>
  )
}

export default Members