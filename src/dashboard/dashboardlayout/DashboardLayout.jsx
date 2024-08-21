import React, { useContext } from 'react'

import './dashboardlayout.css'
import AdminSidebar from '../dashboardcomponents/adminsidebar/AdminSidebar'
import UserSidebar from '../dashboardcomponents/usersidebar/UserSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import useCart from '../../hooks/useCart'
import useMenu from '../../hooks/useMenu'
import useReview from '../../hooks/useReview'
import useUser from '../../hooks/useUser'

const DashboardLayout = () => {
  const [Admin] = useAdmin()
  const navigate = useNavigate()
  const {user, loading} = useContext(AuthContext)
  const [isCartLoading] = useCart()
  const [isMenuLoading] = useMenu()
  const [isReviewLoading] = useReview()
  const [isUserLoading] = useUser()
  
  if(!user && !loading && !isCartLoading && !isMenuLoading && !isReviewLoading && !isUserLoading){
    navigate("/")
  }

  return (
    <section className="dashboard-layout">
        <div className="dashboard-sidebar">          
            {Admin? <AdminSidebar></AdminSidebar> : <UserSidebar></UserSidebar>}          
        </div>
        <div className="dashboard-content">
            <Outlet></Outlet>
        </div>
     </section>
  )
}

export default DashboardLayout
