import React from 'react'
import Featured from '../../shared/featured/Featured'
import ReactTabs from '../../components/reactTabs/ReactTabs'
import { Helmet } from 'react-helmet'


const Shop = () => {
  return (
     <>
     <Helmet>
      <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1716612425/Resturant%20Project/shopping-bag_ibv5en.png" type="image/x-icon" />
      <title>। Shop</title>
     </Helmet>
     <Featured
       heading="Our Shop"
       details="Would you like to try a dish?"    
       imageUrl="https://res.cloudinary.com/doolocyaf/image/upload/v1720338938/Rectangle_1_1_uhvvge.png"
      >
      </Featured>

      <section>
         <ReactTabs></ReactTabs>
      </section>
     </>
  )
}

export default Shop
