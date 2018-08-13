import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation'
import MainScreen from './MainScreen';


 class MainScreenHolder extends Component {
  render() { 
    return ( 
      <AppStackNavigator />
    );
  }
}
export default MainScreenHolder;
const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
})
