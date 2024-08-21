import React, { useContext }  from 'react'

import './card.css'
import useMenu from '../../hooks/useMenu'
import CardBody from '../CardBody/CardBody'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const Card = () => {
  const [menu, isLoading] = useMenu()
  const {currentpage} = useContext(AuthContext)

  const postperpage = 6
  const end = currentpage * postperpage
  const start = end - postperpage
  const pagemenu = menu.slice(start, end)

  return (   
    <div className='card'>
      {isLoading && <p>loading...</p> }
      {
        pagemenu.map((singlemenu, index) => {        
          return  <CardBody singlemenu={singlemenu} key={index}></CardBody> 
        })
      }

    </div>
  )
}

export default Card
