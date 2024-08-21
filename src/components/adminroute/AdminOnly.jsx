import React from 'react'
import {useNavigate} from "react-router-dom"
import useAdmin from '../../hooks/useAdmin'
const AdminOnly = ({children}) => {
    const [Admin, AdminLoading] = useAdmin()
    const navigate = useNavigate()
   if(AdminLoading){
    return <p>loading...</p>
   }
   if(Admin){
    return children;
   }else{
          navigate("/")
   }
}

export default AdminOnly
