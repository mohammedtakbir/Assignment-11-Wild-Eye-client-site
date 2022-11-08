import React from 'react';
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';
import app from '../firebase/friebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const getAuth = {
        user
    };
    return (
        <AuthContext.Provider value={getAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;