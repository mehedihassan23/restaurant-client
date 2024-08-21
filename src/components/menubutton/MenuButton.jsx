import React from 'react'

import './menubutton.css'
import { NavLink } from 'react-router-dom'
const MenuButton = () => {
  return (
     <>
      <button className='home-menu-button'>
          <NavLink className="home-menu-button-link" to="/shop">View full menu</NavLink>
        </button>
     </>
  )
}

export default MenuButton
