import React from 'react'
import { COLORS } from '../../colors';
import Square from './Square'
import "./squares.css"

const Squares = () => {
  return (
    <div className="Squares">
        <Square title='Úlovky' text='Zajímá Vás co se dá našich vodách ulovit?' color={COLORS.white} />
        <Square title='Akce klubu' text='Jako spolek pořádáme každoročně zajímavé akce' color={COLORS.green} />
        <Square title='Pronájem rybárny' text='Možnost pronájmu chalupu v rámci soukromé akce' color={COLORS.blue} />
    </div>
  )
}

export default Squares