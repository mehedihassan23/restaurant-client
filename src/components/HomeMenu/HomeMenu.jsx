import React from 'react'
 
import MenuCard from '../../helper/MenuCard/MenuCard'
import SectionTitle from '../SectionTitle/SectionTitle'
 
import "./homemenu.css"
import { NavLink } from 'react-router-dom';

const HomeMenu = () => {
  return (
     <section className="menu-section">
        <SectionTitle subTitle="check it out" title="from our menu">
        </SectionTitle>
       
        <MenuCard></MenuCard>
        
        <button className='home-menu-button'>
          <NavLink className="home-menu-button-link" to="/menu">View menu</NavLink>
        </button>    
     </section>
  )
}

export default HomeMenu
