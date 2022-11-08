import React from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //* create an user
    const userSignup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //* login an user
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const getAuth = {
        user,
        loading,
        userSignup,
        userLogin
    };
    return (
        <AuthContext.Provider value={getAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;