import React, { Component } from 'react'
import { Text, View , StatusBar} from 'react-native'
import {Icon, Content} from 'native-base'
import { Profile } from '../Partials/Profile/Profile';

export class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-contact-outline" style={{color:tintColor}} />
    )
 }
  render() {
    return (


    <Content>
      <View>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#2b406e"
            />
            <Profile />
      </View>
    </Content>
    )
  }
}

export default ProfileTab