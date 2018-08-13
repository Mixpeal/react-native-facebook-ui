import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Icon, Content} from 'native-base'
import Friends from '../Partials/Friend/Friends';

export class FriendTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-contacts" style={{color:tintColor}} />
    )
 }
  render() {
    return (
      <Content>
        <View>
          <Friends />
        </View>
      </Content>
    )
  }
}

export default FriendTab