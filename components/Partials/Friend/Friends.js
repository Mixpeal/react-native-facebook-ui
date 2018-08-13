import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import {Button, Content} from 'native-base'
import FriendEach from './FriendEach';
class Friends extends Component {
  render() {
    return (
      <Content>
        <View>

        <View>
        <Text style={{backgroundColor:'#fff', padding:15}}>People You May Know</Text>
        </View>
        <View>
            <FriendEach name='Mark Zuckerberg' image={require('../../../assets/img/user1.jpg')}  />
            <FriendEach name='Aliko Dangote' image={require('../../../assets/img/user3.jpg')}  />
            <FriendEach name='Bill Gate' image={require('../../../assets/img/user.jpg')}  />
            <FriendEach name='Mark Zuckerberg' image={require('../../../assets/img/user1.jpg')}  />
            <FriendEach name='Aliko Dangote' image={require('../../../assets/img/user3.jpg')}  />
            <FriendEach name='Bill Gate' image={require('../../../assets/img/user.jpg')}  />
            <FriendEach name='Mark Zuckerberg' image={require('../../../assets/img/user1.jpg')}  />
            <FriendEach name='Aliko Dangote' image={require('../../../assets/img/user3.jpg')}  />
            <FriendEach name='Bill Gate' image={require('../../../assets/img/user.jpg')}  />
            <FriendEach name='Mark Zuckerberg' image={require('../../../assets/img/user1.jpg')}  />
            <FriendEach name='Aliko Dangote' image={require('../../../assets/img/user3.jpg')}  />
            <FriendEach name='Bill Gate' image={require('../../../assets/img/user.jpg')}  />
        </View>
        </View>
      </Content>
    )
  }
}

export default Friends