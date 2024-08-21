import React, { useContext, useState } from 'react'
import {NavLink} from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2'
import "./signup.css"
import SocialLogin from '../../components/socialLogin/SocialLogin'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
   const {createUserWithEmailandPass} = useContext(AuthContext)
   const [signUpData, setSignUpData] = useState({name:"", email:"", password:""})
   const [passwordType, setPasswordType]= useState(true)
   const {name, email, password} = signUpData;
  
   const changeSignUpForm = (event) => {
    setSignUpData({...signUpData, [event.target.name]: event.target.value})
 
   }
   const changePasswordType = () => {
    setPasswordType(!passwordType)
  }
   const submitSignUpForm = (event) => {
     event.preventDefault()
     createUserWithEmailandPass(email, password)
     .then(userCredential => {
        const user = userCredential.user
        if(user){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
     })
    
   }

  return (
    <section className="signup">

          <div className="signup-box">
               <h1>sign up</h1>
               <form onSubmit={submitSignUpForm}>
                 <div className="input-div">
                   <label htmlFor="name">Name</label>
                   <input type="text" name='name' value={name} onChange={changeSignUpForm} />
                 </div>
                 <div className="input-div">
                   <label htmlFor="email">Email</label>
                   <input type="email" name='email' value={email} onChange={changeSignUpForm} />
                 </div>
                 <div className="input-div">
                   <label htmlFor="password">Password</label>
                   <input type= {passwordType? "password" : "text" } name='password' value={password}
                    onChange={changeSignUpForm} />
                    <div className="passwordIcon">
                         {passwordType? <FaEye onClick={changePasswordType} /> : <FaEyeSlash onClick={changePasswordType} />}      
                     </div>
                 </div>
                 <input type="submit" value="Sign Up" />
               </form>

               <div className="signUp-with-social">
               <NavLink to="/login" className="signup-link"> Already registered? <span> Go to log in </span> </NavLink>
                 <SocialLogin></SocialLogin>
               </div>
          </div>
          <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716614115/Resturant%20Project/login-page_nbjuik.png" alt='login image'/>

    </section>
  )
}

export default SignUp

