import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Icon} from 'native-base'

export class MenuTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) =>(
      <Icon name="menu" style={{color:tintColor}} />
    )
 }
  render() {
    return (
      <View style={{backgroundColor:'#fff', flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>TODO: MenuTab </Text>
      </View>
    )
  }
}

export default MenuTab