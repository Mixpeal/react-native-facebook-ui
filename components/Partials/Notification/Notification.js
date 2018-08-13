import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NotificationEach from './NotificationEach';

class Notification extends Component {
  render() {
    return (
      <View>
        <NotificationEach name='Mark Zuckerberg and Tom Chandler' image={require('../../../assets/img/user1.jpg')} unread={true} />
        <NotificationEach name='Evelina Stoain' image={require('../../../assets/img/user3.jpg')} />
        <NotificationEach name='Ojo Kayode' image={require('../../../assets/img/user.jpg')} />
        <NotificationEach name='Tom Cruiz' image={require('../../../assets/img/user3.jpg')} unread={true}/>
        <NotificationEach name='Bjorn Lothbrok' image={require('../../../assets/img/user1.jpg')} />
        <NotificationEach name='Agartha Lee' image={require('../../../assets/img/user.jpg')} />
        <NotificationEach name='Social Stuffs' image={require('../../../assets/img/user1.jpg')} />
        <NotificationEach name='Olamide' image={require('../../../assets/img/user3.jpg')} />
      </View>
    )
  }
}

export default Notification