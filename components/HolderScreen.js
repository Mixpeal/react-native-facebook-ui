import React, { Component } from 'react'
import { Text, View, Platform, Image} from 'react-native'
import {Icon, Input, Badge} from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {TabNavigator} from 'react-navigation'
import CameraScreen from './CameraScreen';
import MainScreenHolder from './MainScreenHolder';
import MainScreen from './MainScreen';

class HolderScreen extends Component {
  render() {
    return (
      <AppTabNavigator />
    )
  }
}

export default HolderScreen; 

const AppTabNavigator = TabNavigator({
    CameraScreen:{
        screen: CameraScreen,
    },
    MainScreenHolder: {
        screen: MainScreenHolder,
    },
}, {
    animationEnabled:true,
    swipeEnabled:true,
    initialRouteName:'MainScreenHolder',
    navigationOptions: {
        tabBarVisible: false,
    },
})

