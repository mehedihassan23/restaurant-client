import React from 'react'

import './featured.css'

const Featured = ({heading, details, imageUrl}) => {
 
  return (
    <section className='featured' style={ { backgroundImage: `url(${imageUrl})` }} >
         <div>
            <h1>{heading}</h1>
            <p>{details}</p>
         </div>
    </section>
  )
}

export default Featured
