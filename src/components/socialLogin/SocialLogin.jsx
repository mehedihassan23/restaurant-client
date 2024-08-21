import React, { useContext } from 'react'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import './socialLogin.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {  useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log("User", user)
      if(user){
        navigate("/")
      }
       
    })
  }
  return (
    <div className='social-link'>
      <h2>Or Sign up with</h2>
      <FaGoogle className='social-login-link' onClick={handleGoogleLogin}></FaGoogle>
      <FaFacebook className='social-login-link'></FaFacebook>
      <FaGithub className='social-login-link'></FaGithub>
      
    </div>
  )
}

export default SocialLogin
