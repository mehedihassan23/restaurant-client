import React from 'react'
import useMenu from '../../hooks/useMenu'
import CardBody from '../../components/CardBody/CardBody'

const FilterMenuCard = ({filtermenu}) => {
    const [menu, isLoading] = useMenu()
    const filter = menu.filter(filteredmenu => filteredmenu.category === filtermenu)

    
    return (
        <div className='card'>
        {isLoading && <p>loading...</p> }
        {
          filter.map((singlemenu) => {           
            return <CardBody singlemenu={singlemenu}></CardBody>
    
          })
        }
      </div>
    )
}

export default FilterMenuCard
