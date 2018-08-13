import React, { Component } from 'react'
import { Text, View, Image  } from 'react-native'
import {Right, Left, Input} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

class PostBox extends Component {
  render() {
    return (
      <View style={{display:'flex', flexDirection:'row', backgroundColor:'#fff', padding: 15, }}>
            <View  style={{height:40, width:40, borderRadius:50, position:'relative', overflow:'hidden'}}><Image style={{height:40, width:40, position:'absolute'}} source={require('../../assets/img/user.jpg')} /></View>
            
        <View style={{ flex:1, marginLeft:10, marginRight:10}}><Input placeholder="What's on your mind?" style={{ fontSize:14, color:'#383838', borderRadius:20, borderWidth:1, borderColor:'#dcdcdc',marginTop:0, height:30, paddingLeft:5}}/></View>
        <View style={{display:'flex', flexDirection:'column'}}>
            <FAIcon name="images" style={{ fontSize:25, marginLeft:5, color:'#383838'}}/> 
            <Text style={{ fontSize:14, color:'#383838'}}>Photo</Text>
        </View>
      </View>
    )
  }
}

export default PostBox