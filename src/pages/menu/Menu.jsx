import React from 'react'
import Featured from '../../shared/featured/Featured'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import MenuCard from '../../helper/MenuCard/MenuCard'
import MenuButton from '../../components/menubutton/MenuButton'
import { Helmet } from 'react-helmet'

import './menu.css'
import FilterMenuCard from '../../helper/FilterMenuCard/FilterMenuCard'
const Menu = () => {
  return (
    <>
    <Helmet>
       <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1716611888/Resturant%20Project/menu-bar_vee4ik.png" type="image/x-icon" />
       <title> । Menu</title>
    </Helmet>
      <Featured
       heading="our menu"
       details="Would you like to try a dish?"    
       imageUrl="https://res.cloudinary.com/doolocyaf/image/upload/v1720336993/Rectangle_1_ayyjuj.png"
      >
      </Featured>

       <section>
          <SectionTitle subTitle="don't miss" title="todays best offer"></SectionTitle>
          <FilterMenuCard filtermenu="popular"></FilterMenuCard> 
          <MenuButton></MenuButton>
       </section>

      <Featured
       heading="desserts"
       details="Would you like to try a dish?"    
       imageUrl="https://res.cloudinary.com/doolocyaf/image/upload/v1720338451/Rectangle_3978_ge3qom.png"
      >
      </Featured>

      <section>
          <SectionTitle subTitle="don't miss" title="todays best offer"></SectionTitle>
          <FilterMenuCard filtermenu="dessert"></FilterMenuCard>
          <MenuButton></MenuButton>
       </section>

      <Featured
       heading="pizza"
       details="Would you like to try a dish?"    
       imageUrl="https://res.cloudinary.com/doolocyaf/image/upload/v1720285225/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__06__20142828-peruvian-cuisine-ceviche1-kevin-cox-2d7966badb274a88a7bd077f2057a6a9_ammafw.jpg"
      >
      </Featured>

      <section>
          <SectionTitle subTitle="don't miss" title="todays best offer"></SectionTitle>
          <FilterMenuCard filtermenu="pizza"></FilterMenuCard>
          <MenuButton></MenuButton>
       </section>

      <Featured
       heading="cofee"
       details="Would you like to try a dish?"    
       imageUrl="https://res.cloudinary.com/doolocyaf/image/upload/v1720338352/Rectangle_3980_iefp8e.png"
      >
      </Featured>

      <section>
          <SectionTitle subTitle="don't miss" title="todays best offer"></SectionTitle>
          <FilterMenuCard filtermenu="cofee"></FilterMenuCard>
          <MenuButton></MenuButton>
       </section>

      <Featured
       heading="drinks"
       details="Would you like to try a dish?"    
       imageUrl="https://res.cloudinary.com/doolocyaf/image/upload/v1720286157/Rectangle_9_lnvuko.png"
      >
      </Featured>
      <section>
          <SectionTitle subTitle="don't miss" title="todays best offer"></SectionTitle>
          <FilterMenuCard filtermenu="drinks"></FilterMenuCard>
          <MenuButton></MenuButton>
       </section>
    </>
  )
}

export default Menu
