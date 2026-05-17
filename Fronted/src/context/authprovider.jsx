import React, { createContext, useContext, useState } from 'react';
// Remove the import of useAuth from react-router-dom if not needed
import { json } from 'react-router-dom';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("Users");
    const [authuser, setauthuser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    return (
        <AuthContext.Provider value={[authuser, setauthuser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
