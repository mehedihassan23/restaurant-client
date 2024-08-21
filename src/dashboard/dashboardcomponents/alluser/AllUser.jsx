import React from 'react'
import Swal from "sweetalert2"
import { Helmet } from 'react-helmet'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import useUser from '../../../hooks/useUser'
import useSecure from '../../../hooks/useSecure'

const AllUser = () => {
    const [alluser, isUserLoading, refetch] = useUser()
    const [AxiosSecure] = useSecure()

    const handleDeleteUser = async (email) => {
      const deleteResult = await AxiosSecure.delete(`/user/delete/${email}`)
      if(deleteResult.data.deletedCount>0){
        Swal.fire("User deleted successfully")
        refetch()
      }  
    }
    const handleMakeAdmin = async (email) => {
        const makeadminresult = await AxiosSecure.patch(`/user/update/${email}`)
         if(makeadminresult.data.modifiedCount>0){
            Swal.fire("User Updated successfully")     
          }  
    }

  return (
     <div className="managebooking">
        <Helmet>
            <title>। All User</title>
            <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1716623177/Resturant%20Project/profile_dyu4nl.png" type="image/x-icon" />
        </Helmet>
        <SectionTitle subTitle="How many?" title="Manage All User">
       </SectionTitle>
       <div className="booking-table">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <td>Role</td>
                    <td>Action</td>
                </tr>
            </thead>

            <tbody>
                {isUserLoading && <p>loading...</p> }
                {
                    alluser?.map((user, index) => {
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td style={{textTransform: "capitalize"}}>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button style={{marginRight: "1rem", cursor:"pointer"}} onClick={()=> handleMakeAdmin(user.email)}>Make Admin</button>

                                <button style={{cursor:"pointer"}} onClick={()=>handleDeleteUser(user.email)}>Delete</button>

                                </td>
                        </tr>
                    })
                }
                

            </tbody>

        </table>
       </div>

     </div>
  )
}

export default AllUser
