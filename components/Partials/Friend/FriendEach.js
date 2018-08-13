import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import {Button} from 'native-base'

class FriendEach extends Component {
  render() {
    return (
      
    <View>
        <View style={{flexDirection:'row',backgroundColor:'#fff', alignItem:'center', marginBottom:5}}>
            <View  style={{height:100, width:100,position:'relative', overflow:'hidden', marginRight:10}}><Image style={{height:100, width:100, position:'absolute'}} source={this.props.image} />
                    </View>
                  <View style={{flex:1}}>
                    <View style={{ margin:5}}>
                      <Text style={{fontSize:14, color:'#000'}}>{this.props.name}</Text>
                      <Text style={{fontSize:12}}>12M mutual friends</Text>
                    </View>
                    
                    <View style={{flex:1,flexDirection:'row'}}>
                      <Button  block primary style={{backgroundColor:'#5a7abf', flex:1, margin:5, height:38}}>
                        <Text style={{color:'#fff', fontSize:13}}>ADD FRIEND</Text>
                      </Button>
                      <Button  block primary style={{backgroundColor:'#fff', borderColor:'#777', borderWidth:0.5, flex:1, margin:5, height:38, elevate:0, boxShadow:0}}>
                        <Text style={{color:'#000', fontSize:13}}>REMOVE</Text>
                      </Button>
                    </View>
                  </View>
                
            </View>
    </View>
    )
  }
}

export default FriendEach