import React from 'react'

import "./paymenthistory.css"
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

const PaymentHistory = () => {
  return (
    <div className='managebooking'>
    <SectionTitle subTitle="At A Glance" title="Payment History">
    </SectionTitle>
    <div className="booking-table">
     <table>
         <thead>
             <tr>
                 <th></th>
                 <th> Email</th>
                 <th>Category</th>
                 <td>Total Price</td>
                 <td>Payment Date</td>
             </tr>
         </thead>

         <tbody>
             <tr>
                 <td>1</td>
                 <td>user010@gmail.com</td>
                 <td>salad</td>
                 <td>$12</td>
                 <td>10/08/24</td>
             </tr>

             <tr>
                 <td>2</td>
                 <td>user020@gmail.com</td>
                 <td>tomato</td>
                 <td>$10</td>
                 <td>10/08/24</td>
             </tr>

             <tr>
                 <td>3</td>
                 <td>user030@gmail.com</td>
                 <td>salad</td>
                 <td>$8</td>
                 <td>11/08/24</td>
             </tr>

             <tr>
                 <td>4</td>
                 <td>user010@gmail.com</td>
                 <td>tomato</td>
                 <td>$5</td>
                 <td>10/08/24</td>
             </tr>

         </tbody>

     </table>
    </div>
 </div>
  )
}

export default PaymentHistory
