import React, { useState } from 'react'
import Swal from "sweetalert2"
import {Helmet} from "react-helmet"

import "./userreview.css"
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { FaStar } from "react-icons/fa6";

const UserReview = () => {
     const [userReview, setUserReview] = useState({recipe:"", suggestion: "", message: ""})
     const {recipe, suggestion, message} = userReview;
    
     const handleReviewChange = (event) => {
        setUserReview({...userReview, [event.target.name]: event.target.value})
     }
    const handleUserReview = (event) => {
        event.preventDefault() 
        setUserReview({recipe:"", suggestion:"",message:""}) 
        if(recipe && suggestion && message){
            Swal.fire("Thank your for your Review") 
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill up Review Form!",
                
              });
        }
    }
  return (
     <div className="user-review">
        <Helmet>
            <title>। Review page</title>
            <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1723986217/Resturant%20Project/12444631_ccce8r.png" type="image/x-icon" />
        </Helmet>
         <SectionTitle subTitle="Sharing is Caring" title="GIVE A REVIEW...">  
         </SectionTitle>
         <div className="review-form">
            <ul>
                <li>Rate us</li>
                <li> <FaStar /> <FaStar /> <FaStar /> <FaStar />  </li>
            </ul>
            <form onSubmit={handleUserReview}>
                <div className="inputDiv">
                    <label htmlFor="recipe">
                        What recipe you liked most?
                    </label>
                    <input type="text" name='recipe'  onChange={handleReviewChange} value={recipe}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="suggestion">
                        Do you have any suggestion for us?
                    </label>
                    <input type="text" name='suggestion'  onChange={handleReviewChange} value={suggestion}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="message">
                        Kindly express your care in a short way?
                    </label>
                    <textarea name="message" onChange={handleReviewChange} value={message}></textarea>
                </div>
                 <input type="submit" value="Send Review" />
            </form>
         </div>
     </div>
  )
}

export default UserReview
