import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
// import the different screens
import Home from './views/Home'
import Camera from './views/Camera'
import SOS from './views/SOS'
import Caller from './views/Caller'
import Navigation from './views/Navigation'
import Guardian from './views/Guardian'
import Login from './views/Login'
import SignUp from './views/SignUp'
import Blind from './views/Blind'
import Indoor from './views/Indoor'
// create our app's navigation stack
const App = SwitchNavigator(
  {
    Home,
    Camera,
    SOS,
    Caller,
    Navigation,
    Guardian,
    Login,
    SignUp,
    Blind,
    Indoor

  },
  {
    initialRouteName: 'Home'
  }
)
export default App