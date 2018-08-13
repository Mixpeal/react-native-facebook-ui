import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import {Icon, Content,Input, } from 'native-base'
import PostBox from '../Partials/PostBox';
import { Stories } from '../Partials/Stories';
import FeedArea from '../Partials/Feeds/FeedArea';

export class HomeTab extends Component {
  static navigationOptions = {
     tabBarIcon: ({tintColor}) =>(

       <Icon name="ios-paper-outline" style={{color:tintColor}} />
     ),
  }
  static tabBarOptions = {
     showIcon:false
  }
  
  render() {
    return (

      <Content>

      <View>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#2b406e"
            />
        <PostBox />
        <Stories />
        <FeedArea />
      </View>
      </Content>
    )
  }
}

export default HomeTab