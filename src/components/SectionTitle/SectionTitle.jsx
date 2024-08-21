import React from 'react'

import "./sectiontitle.css"
const SectionTitle = ({subTitle, title}) => {
  return (
    <div className='sectionTitle'>
      <p>--- {subTitle} ---</p>     
      <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle
