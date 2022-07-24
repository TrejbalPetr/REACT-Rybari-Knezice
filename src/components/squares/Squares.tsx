import React from 'react'
import { COLORS } from '../../colors';
import Square from './Square'
import "./squares.css"

const Squares = () => {
  return (
    <div className="Squares">
        <a href="#catches"><Square title='Úlovky' text='Zajímá Vás co se dá našich vodách ulovit?' color={COLORS.white} /></a>
        <a href="#events"><Square title='Akce klubu' text='Jako spolek pořádáme každoročně zajímavé akce' color={COLORS.green} /></a>
        <a href="#cottage"><Square title='Pronájem chaty' text='Možnost pronájmu chalupu v rámci soukromého využití' color={COLORS.blue} /></a>
    </div>
  )
}

export default Squares