import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import './login.css'
import SocialLogin from '../../components/socialLogin/SocialLogin';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {signinWithEmailandPass} = useContext(AuthContext)
    const [loginData, setLoginData] = useState({password:"", email:""})
    const [passwordType, setPasswordType]= useState(true)
    const navigate = useNavigate()

    const {password, email} = loginData;

    const handleLoginChange = (event) => {
        setLoginData({...loginData, [event.target.name]: event.target.value})
    }
    const changePasswordType = () => {
         setPasswordType(!passwordType)
    }
    const submitLoginForm = (event) =>{
        event.preventDefault()
        signinWithEmailandPass(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            if(user){
                 navigate("/")
            }
        })
        setLoginData({ password:"", email:""})
        console.log(loginData)
    }


    return (
        <section className="login">
            <Helmet>
               <title>। login</title>
               <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1716623177/Resturant%20Project/profile_dyu4nl.png" type="image/x-icon" />
            </Helmet>  
           <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716614115/Resturant%20Project/login-page_nbjuik.png" alt="login image" />

            <div className="login-box">
                <h1>Login</h1>
                <form className='login-form' onSubmit={submitLoginForm}>
                    <div className="inputDiv">
                        <label htmlFor="email" style={{marginTop: "1rem"}}>Email</label>
                        <input type="email" name="email" value={email} onChange={handleLoginChange}/>

                    </div>                   

                    <div className="inputDiv">
                        <label htmlFor="name">Password</label>
                        <input type= {passwordType? "password" : "text" }name="password" value={password} onChange={handleLoginChange}/>
                        <div className="passwordIcon">
                         {passwordType? <FaEye onClick={changePasswordType} /> : <FaEyeSlash onClick={changePasswordType} />}      
                        </div>
                    </div>

                    <input type="submit" value="Login" />
                </form>

                 <div className="social-media">
                    <NavLink to="/signup" className="signup-link"> New here? <span>Create a New Account </span> </NavLink>
                    <SocialLogin></SocialLogin>
                 </div>
            </div>
 
        </section>
    )
}

export default Login
