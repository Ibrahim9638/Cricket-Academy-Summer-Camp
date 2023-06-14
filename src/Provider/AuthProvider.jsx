import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);

    // Create User
    const createUser = (email, password, confirmPassword)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, confirmPassword)
    }
    // Register SignUp
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Google SignIn
    const googleSignIn =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //Update User
    const updateUserProfile =(name, photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    } 
    // Logout
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    // UseEffect uses
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);

            // get and set item 
            if(currentUser){
                axios.post('https://assignment-server-site-phi.vercel.app/jwt', {email: currentUser.email})
            .then(data =>{
               
                localStorage.setItem('access-token', data.data.token);
                setLoading(false);
            })

            }
            else{
                localStorage.removeItem('access-token');
            }

            setLoading(false);
        });
        return () =>{
            return unsubscribe;
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;