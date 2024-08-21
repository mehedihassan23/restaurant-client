import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import {Helmet} from "react-helmet"
import Swal from "sweetalert2"
import "./manageitem.css"
import useMenu from '../../../hooks/useMenu'
import useSecure from '../../../hooks/useSecure'

const ManageItem = () => {
      const [menu, isMenuLoading, refetch] = useMenu()
      const [AxiosSecure] = useSecure()

      const handleDeleteMenu = async (id) => {
        const result = await AxiosSecure.delete(`/menu/delete/${id}`)
        if(result.status == 200){
          Swal.fire("Deleted Successfully")  
          refetch()  
        }
         
      }
 
  return (
    <div className='manageitem'>
      <Helmet>
        <title>। Manage Item</title>
        <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1723965764/booking_c6dy5s.png" type="image/x-icon" />
      </Helmet>

      <SectionTitle subTitle="Hurry Up" title="manage all items"></SectionTitle>

      <div className="table">
        <h1>Total items: 
          { menu?.length<10 ? "0" + menu?.length : menu?.length}
        </h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Item image</th>
              <th>Item name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            
              {isMenuLoading && <p>menu loading...</p>}
              {
                menu?.map((singleMenu, index) => {
                  const { _id, image,category,price } = singleMenu
                  return <tr>
                    <td>{index+1}</td>
                    <td><img src={image} alt="menu image" width={40} /></td>
                    <td>{category}</td>
                    <td>${price}</td>
                    <td><button>Edit</button></td>
                    <td><button style={{cursor: "pointer"}} onClick={()=> handleDeleteMenu(_id)}>Delete</button></td>
                  </tr>
                })
              }
              
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default ManageItem
