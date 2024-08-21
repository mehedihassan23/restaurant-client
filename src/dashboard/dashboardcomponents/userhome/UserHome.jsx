import React, { useContext } from 'react'
import { FaHome, FaWallet } from "react-icons/fa";
import {Helmet} from "react-helmet"
import "./userhome.css"
import useCart from '../../../hooks/useCart';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const UserHome = () => {
    const [mycart, cartLoading] = useCart()
    const {user} = useContext(AuthContext)
    console.log(user)
    const totalcart = mycart.length
  return (
    <div className="userhome">
        <Helmet>
            <title>। User Home</title>
            <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1716610835/Resturant%20Project/home_icon_xh5cjh.jpg" type="image/x-icon" />
        </Helmet>
        {cartLoading && <p>loading...</p> }
        <h1 className='welcome-message'>hi, welcome back</h1>
        <div className="usercards">
            <div className="usercard">
                <div className='usercardicon'><FaWallet /> </div>
                <div>
                    <p>{totalcart < 10 ? "0" + totalcart : totalcart}</p>
                    <p>cart</p>
                </div>
            </div>
            <div className="usercard">
                <div className='usercardicon'><FaHome /></div>
                <div>
                    <p>05</p>
                    <p>shop</p>
                </div>
            </div>
            <div className="usercard">
                <div className='usercardicon'><FaWallet /></div>
                <div>
                    <p>03</p>
                    <p>contact</p>
                </div>
            </div>
        </div>
        <div className="user-home-content">
            <div className="user-profile-picture">
                <img src={ user?.photoURL ? user.photoURL :  "https://res.cloudinary.com/doolocyaf/image/upload/v1711422085/operator_tpqxux.jpg"} alt="profile picture" />
            </div>
            <div className="user-content">
                <h1>your activities</h1>
                <ul>
                    <li>Orders: 6</li>
                    <li>reviews: 2</li>
                    <li>bookings: 1</li>
                    <li>payments: 3</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default UserHome
