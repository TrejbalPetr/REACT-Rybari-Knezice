import React from 'react'
import Slider from './Slider'
import "./catches.css"
import Img1 from "./imgs/Amur.png"
import Img2 from "./imgs/Img1.jpeg"
import Img3 from "./imgs/Jeseter.jpg"


const Catches = () => {
  const slides = [
    { url: Img1, 
      title: "Amur bílý", 
      name: "Petr Trejbal", 
      date: "19. 5. 2020", 
      time: "21:28", 
      tech: "položená", 
      bait: "kukuřice",
      cm: 96,
      kg: 13 },
    { url: Img2, 
      title: "Kapr obecný", 
      name: "Robert Kousal", 
      date: "1. 7. 2022", 
      time: "0:22", 
      tech: "plavaná", 
      bait: "react",
      cm: 115,
      kg: 27.5 },
    { url: Img3, 
      title: "Jeseter malý", 
      name: "Adam Musil", 
      date: "29. 6. 2022", 
      time: "14:29", 
      tech: "položená", 
      bait: "chleba",
      cm: 96,
      kg: 9.0 },
  ];


  return (
    <div className='Catches'>
      <h1>Úlovky - Osecký rybník</h1>
      <Slider slides={slides}/>
    </div>
  )
}

export default Catches