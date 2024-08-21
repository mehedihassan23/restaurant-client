import React from 'react'

import { FaHome, FaBars, FaShoppingCart, FaRegBookmark} from "react-icons/fa";
import { FaBagShopping, FaMessage, FaWallet } from "react-icons/fa6";
import {NavLink} from "react-router-dom"

import "./usersidebar.css"
const UserSidebar = () => {
  return (
    <div className='user-sidebar'>
       <ul>
       <li>restaurant</li>
       <li> <NavLink className="user-sidebar-link" to="/dashboard"> <FaHome /> user home</NavLink> </li>
       <li> <NavLink className="user-sidebar-link" to="/dashboard/user/reservation"> <FaHome /> reservation </NavLink> </li>
       <li> <NavLink className="user-sidebar-link" to="/dashboard/user/paymenthistory"> <FaWallet /> payment history </NavLink> </li>
       <li> <NavLink className="user-sidebar-link" to="/dashboard/user/mycart"> <FaShoppingCart /> my cart </NavLink> </li>
       <li> <NavLink className="user-sidebar-link" to="/dashboard/user/review"> <FaRegBookmark /> add review </NavLink> </li>
       <hr />
        <li> <NavLink className="user-sidebar-link" to="/"> <FaHome /> home</NavLink> </li>
         <li> <NavLink className="user-sidebar-link" to="/menu"> <FaBars />menu</NavLink> </li>
         <li> <NavLink className="user-sidebar-link" to="/shop">  <FaBagShopping /> shop</NavLink> </li>
         <li> <NavLink className="user-sidebar-link" to="/contact"> <FaMessage /> contact</NavLink> </li>
       </ul>
    </div>
  )
}

export default UserSidebar
