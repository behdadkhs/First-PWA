import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../Fire'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}




const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logOut() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])



    const value = {
        currentUser,
        signUp,
        login,
        logOut

    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
