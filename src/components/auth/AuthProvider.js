import React, { createContext, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const AuthContext = createContext()

export const AuthProvider = ({childern}) => {
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email,password) => {
                    try {
                        await auth().signInWithEmPass(email,password)
                    } catch (error) {
                        console.log(error);
                    }
                },
                register: async (email,password) => {
                    try {
                        await auth().signUpWithEmPass(email,password)
                    } catch (error) {
                        console.log(error);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut()
                    } catch (error) {
                        console.log(error);
                    }
                }
            }}
        >
            
        </AuthContext.Provider>
    )
}
