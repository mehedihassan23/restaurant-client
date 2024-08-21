import React from 'react'

import { FaHome, FaUtensils, FaBook, FaUsers, FaBookOpen, FaBars} from "react-icons/fa";
import { FaBagShopping, FaMessage } from "react-icons/fa6";
import {NavLink} from "react-router-dom"

import "./adminsidebar.css"
const AdminSidebar = () => {
  return (
    <div className='admin-sidebar'>
    <ul>
       <li>restaurant</li>
       <li> <NavLink className="admin-sidebar-link" to="/dashboard"> <FaHome /> admin home</NavLink> </li>
       <li> <NavLink className="admin-sidebar-link" to="/dashboard/admin/additem"> <FaUtensils /> add items</NavLink> </li>
       <li> <NavLink className="admin-sidebar-link" to="/dashboard/admin/manageitem"> <FaBookOpen /> manage items</NavLink> </li>
       <li> <NavLink className="admin-sidebar-link" to="/dashboard/admin/manageallbooking"> <FaBook /> manage bookings</NavLink> </li>
       <li> <NavLink className="admin-sidebar-link" to="/dashboard/admin/alluser"> <FaUsers /> all users</NavLink> </li>
       <hr />
       <li> <NavLink className="admin-sidebar-link" to="/"> <FaHome /> home</NavLink> </li>
       <li> <NavLink className="admin-sidebar-link" to="/menu"> <FaBars />menu</NavLink> </li>
       <li> <NavLink className="admin-sidebar-link" to="/shop">  <FaBagShopping /> shop</NavLink> </li>
       <li> <NavLink className="admin-sidebar-link" to="/contact"> <FaMessage /> contacts</NavLink> </li>
    </ul>
  </div>
  )
}

export default AdminSidebar
