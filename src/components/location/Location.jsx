import React from 'react'

import { FaPhone } from 'react-icons/fa'
import { FaLocationDot, FaStopwatch } from "react-icons/fa6";
import SectionTitle from '../SectionTitle/SectionTitle'

import './location.css'

const Location = () => {
  return (
     <section className="location">
        <SectionTitle subTitle="visit us" title="our location">
        </SectionTitle>
        <div className="locations">          
            <div>
                 <ul>
                    <li><FaPhone></FaPhone></li>
                    <li>phone</li>
                    <li>+01236548520</li>
                 </ul>
            </div>

            <div>
                 <ul>
                    <li> <FaLocationDot /> </li>
                    <li>address</li>
                    <li>miami, florida, united states</li>
                 </ul>
            </div>

            <div>
                 <ul>
                    <li> <FaStopwatch /> </li>
                    <li>working hours</li>
                    <li>sat-sunday: 10:00am - 4:00pm</li>
                    <li>mon-thursday: 9:00am - 4:30pm</li>
                 </ul>
            </div>

        </div>
     </section>
  )
}

export default Location
