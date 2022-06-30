import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='MainHeader'>
      <div className='Intro'>
        <div className='Header'>
          <h1>Jedinou předvídatelnou věcí na rybolovu je nepředvídatelnost</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Fusce wisi.</p>
          <div>
            <button type='button'>O klubu</button>
            <button type='button'>Povolenky</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;