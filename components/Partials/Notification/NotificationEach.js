import React, { Component } from 'react'
import { Text, View,Image, TouchableOpacity } from 'react-native'
import {Icon} from 'native-base'

class NotificationEach extends Component {
  render() {
    return (
      <View>
          <TouchableOpacity>
            <View>
                {this.props.unread?(
                    <View style={{flexDirection:'row', padding:10, backgroundColor:'#f2f2f2', alignItem:'center'}}>
                    <View  style={{height:80, width:80, borderRadius:40, position:'relative', overflow:'hidden'}}>
                        <Image style={{height:80, width:80, position:'absolute'}} source={this.props.image} />
                    </View>
                    <View style={{flex:1, padding:5,marginRight:5}}>
                        <Text style={{color:'#000', fontWeight:'bold'}}>{this.props.name}</Text>
                        <Text style={{color:'#000'}}>like your post in</Text>
                        <Text style={{color:'#000', fontWeight:'bold'}}> Native App Developer Community</Text>
                        <Text style={{color:'#000', fontSize:11}}>1 hour ago</Text>
                    </View>
                    <Icon name="more" style={{marginVertical:20}}/>
                </View>
                ): (
                <View style={{flexDirection:'row', padding:10, backgroundColor:'#fff', alignItem:'center'}}>
                    <View  style={{height:80, width:80, borderRadius:40, position:'relative', overflow:'hidden'}}>
                        <Image style={{height:80, width:80, position:'absolute'}} source={this.props.image} />
                    </View>
                    <View style={{flex:1, padding:5,marginRight:5}}>
                        <Text style={{color:'#000', fontWeight:'bold'}}>{this.props.name}</Text>
                        <Text style={{color:'#000'}}>like your post in</Text>
                        <Text style={{color:'#000', fontWeight:'bold'}}> Native App Developer Community</Text>
                        <Text style={{color:'#000', fontSize:11}}>1 hour ago</Text>
                    </View>
                    <Icon name="more" style={{marginVertical:20}}/>
                </View>
                )}
                
            </View>
          </TouchableOpacity>
        
      </View>
    )
  }
}

export default NotificationEach