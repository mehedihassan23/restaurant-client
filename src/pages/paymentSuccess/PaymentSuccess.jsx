import React from 'react'

const PaymentSuccess = () => {
  return (
    <div style={{height: "100vh",width: "100%",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h1 style={{color: "green"}}>Your Payment was Successfull !</h1>
       
      <a href="https://restaurant-client-pink-eight.vercel.app/" style={{fontSize: "2rem", textDecoration: "none"} }>Back to home</a>
    </div>
  )
}

export default PaymentSuccess
