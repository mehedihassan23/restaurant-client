import React, { useState } from 'react'
import Swal from "sweetalert2"
import {Helmet} from 'react-helmet'

import "./reservation.css"
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

const Reservation = () => {
    const [reservation ,setReservation] = useState({date: "", time: "", guest: "", name: "", email: "", phone: ""})
    const {date, time, guest, name, email, phone} = reservation;
    const handleReservationChange = (event) => {
         setReservation({...reservation, [event.target.name]: event.target.value})
    }
    const handleReservation = (event) => {
          event.preventDefault()
          if(name && email && phone ){
            Swal.fire("Thank you for your Reservation")
          }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please input Name, Email and Phone!",
                 
              })
          }
          
    }
  return (
    <div className="reservation">
        <Helmet>
            <title>। Reservation</title>
            <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1723965764/booking_c6dy5s.png" type="image/x-icon" />
        </Helmet>
         <SectionTitle subTitle="Reservation" title="Book A Table"></SectionTitle>
         <div className="reservation-table">
            <form onSubmit={handleReservation}>
               <div className="form">
               <div className="input-table">
                    <label htmlFor="date">Date</label>
                    <input type="date" value={date} name="date" onChange={handleReservationChange}/>
                </div>
                <div className="input-table">
                    <label htmlFor="time">Time</label>
                     <input type="time" value={time} name="time"  onChange={handleReservationChange}/>
                </div>
                <div className="input-table">
                    <label htmlFor="guest">Guest</label>
                    <select name='guest' value={guest} onChange={handleReservationChange}>
                        <option value="">Select Guest</option>
                        <option value="1">One Person</option>
                        <option value="2">Two Person</option>
                        <option value="3">Three Person</option>
                        <option value="4">Four Person</option>
                        <option value="3">Five Person</option>
                    </select>
                </div>
                <div className="input-table">
                    <label htmlFor="name">Name</label>
                     <input type="text" value={name} name="name"  onChange={handleReservationChange}/>
                </div>
                <div className="input-table">
                    <label htmlFor="email">Email</label>
                     <input type="email" value={email} name="email"  onChange={handleReservationChange}/>
                </div>
                <div className="input-table">
                    <label htmlFor="phone">Phone</label>
                    <input type="number" value={phone} name="phone"   onChange={handleReservationChange}/>
                </div>

               </div>
               <input type="submit" value="Book A Table" />
            </form>
         </div>
        
    </div>
  )
}

export default Reservation
