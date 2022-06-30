import React from 'react'
import AboutImg from "../../images/About.jpg"
import "./about.css"

const About = () => {
  return (
    <div className='About' id="about">
      <div className='AboutImg'>
        <img src={AboutImg} alt="About" />
      </div>
      <div className='AboutText'>
        <h1>O klubu</h1>
        <p>Klub sportovních rybářů Kněžice byl založen v první polovině roku 2008 jako pokračující organizace po zaniklé MO ČRS Kněžice. Klub má v současné době 31 stálých členů. Sportovní klub hospodaří na Oseckém rybníku s rozlohou 5 ha a na dalších šesti menších vodních plochách, které se nacházejí v obci Kněžice.</p>
        <h2>Osecký rybník</h2>
        <p>Jedná se o sportovní rybník s rozlohou 5 ha, který se nachází v katastrálním území obce Kněžice. Rybník byl v roce 2000 vypuštěn a kompletně odbahněn. K napuštění rybníka došlo v roce 2005 a od té doby probíhá jeho postupné zarybnění. V dnešní době je již rybník velmi kvalitně zarybněn. Jeho osádku tvoří: kapr, amur, štika, candát, lín, úhoř, jeseter a sumec. Sportovní rybolov byl na tomto rybníku zahájen v polovině roku 2008. Platí zde místní rybářský řád a povolenky nejsou nyní volně prodejné. Na Oseckém rybníku tradičně probíhají dětské rybářské závody, 24 hodinový memoriál Františka Hlaváčka a Františka Melišíka a také závody 12 hodinové. Více informací k jednotlivým akcím lze nalézt v sekci "Akce klubu".</p>
      </div>
    </div>
  )
}

export default About