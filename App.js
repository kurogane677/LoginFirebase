// In App.js in a new project

import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import RootStackScreen from './src/components/screens/RootStackScreen';
import Routes from './src/components/Routes';


// const Drawer = createDrawerNavigator()

const App = () => {

  return (
    <Routes/>
  );
}

export default App;