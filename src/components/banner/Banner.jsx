import React from 'react'

import "./banner.css"
import SectionTitle from '../SectionTitle/SectionTitle'

const Banner = () => {
 
    // Get the current date
    const currentDate = new Date();

    // Format the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
   const formattedDate = currentDate.toLocaleDateString('en-US', options);


  return (
     <section className='banner'>
        <SectionTitle subTitle="check it out" title="from our menu"></SectionTitle>
        <div className="banner-container">
            <div className='banner-image'>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1720292840/Rectangle_14_y14tyw.png" alt="" />
            </div>
            <div className='banner-details'>
                <p>{formattedDate}</p>
                <p>where I can get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsam accusamus assumenda facilis at dolorem.</p>
                <button>Read More</button>
            </div>
        </div>
     </section>
  )
}

export default Banner
