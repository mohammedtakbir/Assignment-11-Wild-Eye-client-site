import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //* create an user
    const userSignup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //* login an user
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    //* sign in with google
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    //* sign out
    const userSignOut = () => {
        localStorage.removeItem('wildEye-token');
        return signOut(auth);
    }
    

    //* Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const getAuth = {
        user,
        loading,
        userLogin,
        userSignup,
        userSignOut,
        googleSignIn,
    };
    return (
        <AuthContext.Provider value={getAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;