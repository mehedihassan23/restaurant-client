import React from 'react'
import UserHome from "../userhome/UserHome"
import AdminHome from '../adminhome/AdminHome'
import useAdmin from '../../../hooks/useAdmin'

const DashboardHome = () => {
    const [Admin, AdminLoading] = useAdmin()
  return (
    <>
      {AdminLoading && <p>loading...</p>}
      {Admin?  <AdminHome></AdminHome> : <UserHome></UserHome> }
    </>
  )
}

export default DashboardHome

