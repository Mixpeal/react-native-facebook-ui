import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Icon,Content} from 'native-base'
import Notification from '../Partials/Notification/Notification';

export class NotificationTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-megaphone-outline" style={{color:tintColor}} />
    )
 }
  render() {
    return (
      <Content>
        <View>
          <Notification />
        </View>
      </Content>
    )
  }
}

export default NotificationTab