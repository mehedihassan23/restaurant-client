import React from 'react'

import './menucard.css'
import useMenu from '../../hooks/useMenu'

const MenuCard = () => {
    const [menu, isLoading] = useMenu()

    return (
        <div className="menu-card">
            {isLoading && <p>loading...</p>}
            {
                menu.map((drink, index) => {
                    return <div className="menu-cards" key={index}>
                        <ul className='menu-card-image'>
                            <li>
                                <img src={drink.image} />
                            </li>
                        </ul>
                        <ul className='menu-card-description'>
                            <li>{drink.name} </li>
                            <li>{drink.recipe}</li>
                        </ul>
                        <ul className='menu-card-price'>
                            <li>${drink.price}</li>
                        </ul>
                    </div>
                })
            }

        </div>
    )
}

export default MenuCard
