import React from 'react'

import "./manageallbooking.css"
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
const ManageALlBooking = () => {
  return (
    <div className='managebooking'>
       <SectionTitle subTitle="At A Glance" title="Manage Bookings">
       </SectionTitle>
       <div className="booking-table">
        <table>
            <thead>
                <tr> <th></th>
                    <th>User Email</th>
                    <th>Phone</th>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>user010@gmail.com</td>
                    <td>0123540210</td>
                    <td>pending</td>
                    <td><button className='booking-button'>delete</button></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>user020@gmail.com</td>
                    <td>0123540210</td>
                    <td>done</td>
                    <td><button className='booking-button'>delete</button></td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>user020@gmail.com</td>
                    <td>0123540210</td>
                    <td>pending</td>
                    <td><button className='booking-button'>delete</button></td>
                </tr>

            </tbody>

        </table>
       </div>
    </div>
  )
}

export default ManageALlBooking
