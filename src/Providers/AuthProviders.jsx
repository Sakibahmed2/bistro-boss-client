import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase';
import axios from 'axios';


export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const googleSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, currentUser => {
            console.log('Current user', currentUser);
            setUser(currentUser)

            // get and set token
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data =>{
                    console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false)

                })
            }
            else{
                localStorage.removeItem('access-token')
            }

        })
        return () => {
            return unSub();
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        updateUser,
        googleSingIn
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;