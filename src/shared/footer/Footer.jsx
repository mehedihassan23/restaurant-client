import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <section className='footer-section'>
            <footer className='footer'>
                    <ul>
                        <li>contact us</li>
                        <li>Miami, Florida, United States</li>
                        <li> <a className='telephone' href="tel:  +1-305-389-6091"> +1-305-389-6091</a></li>
                        <li>Sat - Sun: 10:00 - 4:00</li>
                        <li>Mon - Fri: 10:00 - 6:00</li>
                    </ul>
                    <ul>
                        <li>follow us</li>
                        <li>
                        <FaFacebook className='social-icon'/>
                        <FaInstagram className='social-icon'/>
                        <FaTwitter className='social-icon'/>
                        </li>
                    </ul>
            </footer>
            <p>Copyright  &#169; Restaurant. All rights reserved</p>
        </section>
    )
}

export default Footer
