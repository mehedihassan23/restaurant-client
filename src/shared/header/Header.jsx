import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import "./header.css"
import { FaBars } from 'react-icons/fa'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import useCart from '../../hooks/useCart';

const Header = () => {
    const [hideSideBar, setHideSideBar] = useState(true)
    const {logOut, user} = useContext(AuthContext)
    const navigate = useNavigate()
    const [mycart] = useCart()
    
     const buttonStyle = {padding: "0 0.5rem", border: "none", cursor: "pointer", borderRadius: "0.5rem"}

    const handleLogOut = () => {
      logOut()
      .then(()=>{
        navigate("/login", {replace})
      })
    }
     
  return (
   <nav className='navBar'>
    <ul className='sideBar' style={hideSideBar ? {display: "none"} : {display: "flex"}}>
        <li onClick={() => setHideSideBar(true)}>X</li>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/menu">menu</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
        <li><NavLink to="/shop">shop</NavLink></li>
        <li><NavLink to="/dashboard/user/mycart">
        <FaShoppingCart /> <span>{mycart?.length}</span>
        </NavLink></li> 
        <li><NavLink to="/dashboard">dashboard</NavLink></li> 
        
        {user ? <li><button className={buttonStyle}>Sign Out</button></li> :
         <li><NavLink to="/login">login</NavLink></li> }

      </ul>

      <ul>
        <li>restaurant</li>
        <li className='mobileHide'><NavLink to="/">home</NavLink></li>
        <li className='mobileHide'><NavLink to="/menu">menu</NavLink></li>
        <li className='mobileHide'><NavLink to="/contact">contact</NavLink></li>
        <li className='mobileHide'><NavLink to="/shop">shop</NavLink></li>
        <li className='mobileHide'><NavLink to="/dashboard/user/mycart"><FaShoppingCart /> <span>{mycart?.length}</span></NavLink></li> 
        <li className='mobileHide'><NavLink to="/dashboard">dashboard</NavLink></li> 
        { user ?  <li className='mobileHide'> 
          <button onClick={handleLogOut} style={buttonStyle}> Sign Out</button> 
          </li> : <li className='mobileHide'><NavLink to="/login">login</NavLink></li> }

        <li className='hideDeskTop' onClick={() => setHideSideBar(false)}>
          <FaBars />
        </li>        
      </ul>
   </nav>
  )
}

export default Header
