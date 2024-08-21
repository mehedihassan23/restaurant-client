import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import { app } from '../config/firebase.config';
import usePublic from '../hooks/usePublic';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [AxiosPublic] = usePublic()
    const [currentpage, setCurrentPage] = useState(1)    

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const createUserWithEmailandPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinWithEmailandPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
     
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
            AxiosPublic.post("/user", {email: currentUser?.email, name: currentUser?.displayName || "Annonymous"})

              if(currentUser){
                AxiosPublic.post("/jwt", {email: currentUser?.email})
                .then(res => {
                    const token = res.data
                    localStorage.setItem("access-token", token)
                })
                .catch(error => {
                    console.log(error.message)
                })
                setLoading(false)
              }else{
                localStorage.removeItem("access-token")
                setLoading(false)
              }
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authValue = {
        user,
        loading,
        currentpage,
        googleSignIn,
        createUserWithEmailandPass,
        signinWithEmailandPass,
        logOut,
        setCurrentPage
    }
  return (
    <AuthContext.Provider value={authValue}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
