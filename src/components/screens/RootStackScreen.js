import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import SplashScreen from './SplashScreen'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const RootStack = createNativeStackNavigator()

const RootStackScreen = ({navigation}) => {
    return (
        <RootStack.Navigator headerMode = 'none'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}}/>
            <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}/>
        </RootStack.Navigator>
    )
}

export default RootStackScreen
