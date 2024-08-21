import React, { useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import {Helmet} from "react-helmet"
import Swal from "sweetalert2"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./mycart.css"
import useCart from '../../../hooks/useCart'
import useSecure from '../../../hooks/useSecure'
import usePublic from '../../../hooks/usePublic'
import CheckOutForm from '../../../components/CheckOutForm/CheckOutForm';


const MyCart = () => {
    const [mycart, cartLoading, refetch] = useCart()
    const [AxiosSecure] = useSecure()
    const [AxiosPublic] = usePublic()
    const [clientSecret, setClientSecret] = useState("");
    
    const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Publishable_Key)
    const totalcartprice = mycart.reduce((total, cart)=> total + cart.price,0)
    
    const handleDeleteCart = async (id) => {     
          const result = await AxiosSecure.delete(`/cart/${id}`)
          if(result.data.deletedCount > 0){
            Swal.fire("Your cart Deleted successfully!");
            refetch()
          }  
    }

    const handlePayment = async () => {
       const paymentResult = await AxiosPublic.post("/payment", {price: totalcartprice})
       setClientSecret(paymentResult.data.clientSecret)
        
    }
    const appearance = {theme: 'stripe'};
    const options = {clientSecret, appearance};

  return (
    <div className='managebooking'>
        <Helmet>
            <title>। My Cart</title>
            <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1716612538/Resturant%20Project/cart_bsinws.png" type="image/x-icon" />
        </Helmet>
    <SectionTitle subTitle="At A Glance" title="Payment History">
    </SectionTitle>
    <div className="booking-table">
            {cartLoading && <p>loading...</p>}
            <ul className='mycartContent'>
                <li>total carts: { mycart.length<10 ? "0" + mycart.length : mycart.length} </li>
                <li>total price: $ {totalcartprice.toFixed(2)} </li>
                <li> <button onClick={handlePayment}>Pay</button> </li>
            </ul>

            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckOutForm />
                </Elements>
             )}
 
     <table>
         <thead>
             <tr>
                 <th></th>
                 <th> Item Image</th>
                 <th>Item Name</th>
                 <td> Price</td>
                 <td>Action</td>
             </tr>
         </thead>

         <tbody>
            { mycart.map((cart, index) => {
                return <tr key={index}>
                    <td>{index+1}</td>
                    <td><img src={cart.image} alt="cart image" width={30} /></td>
                    <td>{cart.name}</td>
                    <td>${cart.price}</td>
                    <td><button style={{cursor: "pointer"}} onClick={()=>handleDeleteCart(cart._id)}>Delete</button></td>
                </tr>
            })
            }
 
         </tbody>

     </table>
    </div>
 </div>
  )
}

export default MyCart
