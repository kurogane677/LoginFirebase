import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from './auth/AuthProvider'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import RootStackScreen from './screens/RootStackScreen'



const Routes = () => {
    return (
        <NavigationContainer>
            <RootStackScreen/>
        </NavigationContainer>
    )
}

export default Routes