import React from 'react'
import Featured from '../../shared/featured/Featured'
import Location from '../../components/location/Location'
import ContactForms from '../../components/contactform/ContactForms'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
     <>
     <Helmet>
      <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1716611653/Resturant%20Project/dots_xv2ztg.png" type="image/x-icon" />
      <title>। Contact</title>
     </Helmet>
     <Featured 
     heading="contact us"
     details="have any query? contact us."
     imageUrl="https://res.cloudinary.com/doolocyaf/image/upload/v1720349283/Rectangle_1_2_qtmb4n.png"
    >
    </Featured>
    <Location></Location>
    <ContactForms></ContactForms>
     </>
  )
}

export default Contact
