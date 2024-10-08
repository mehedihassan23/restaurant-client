import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, {  useEffect, useState } from "react";
import "./checkoutform.css"

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);  
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        if (!stripe) {
            return;
        }
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );
        if (!clientSecret) {
            return;
        }
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
              case "succeeded":               
                setMessage("success");
                break;
              case "processing":
                setMessage("Your payment is processing.");
                break;
              case "requires_payment_method":
                setMessage("Your payment was not successful, please try again.");
                break;
              default:
                setMessage("Something went wrong.");
                break;
            }
          });
    }, [stripe])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) { 
            return 
        }
        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
              return_url: "https://restaurant-client-pink-eight.vercel.app/payment/success",
            }
          });

          if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
          } else {
            setMessage("An unexpected error occurred.");
          }
      
          setIsLoading(false);
      
    }

    const paymentElementOptions = { layout: "tabs" }
 
  return (
     <form id="payment-form" onSubmit={handleSubmit}>

      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="payNowButton">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
         
    </form>
  )
}

export default CheckOutForm
