import React from 'react'

import './homerecommendmenu.css'
import Card from '../card/Card'
import SectionTitle from '../SectionTitle/SectionTitle'

const HomeRecommendMenu = () => {
  return (
     <section style={{margin: "5rem 0"}} className='home-recommend-menu'>
        <SectionTitle subTitle="Should Try" title="chef recommends">
        </SectionTitle>       
        <Card></Card>
     </section>
  )
}

export default HomeRecommendMenu
