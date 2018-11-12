import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
// import the different screens
import Home from './views/Home'
import Camera from './views/Camera'
import SOS from './views/SOS'
import Caller from './views/Caller'
import Navigation from './views/Navigation'
// create our app's navigation stack
const App = SwitchNavigator(
  {
    Home,
    Camera,
    SOS,
    Caller,
    Navigation

  },
  {
    initialRouteName: 'Home'
  }
)
export default App