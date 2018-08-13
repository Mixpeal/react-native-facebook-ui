import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

import FAIcon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';

export class Stories extends Component {
  render() {
    return (
      <View style={{ backgroundColor:'#fff', marginTop:10}}>
        <View style={{display:'flex',flexDirection:'row', position:'relative', padding:10}}>
            <Text>Stories</Text>
            <Text style={{position:'absolute', right:10, top:10}}>Your Archive</Text>
        </View>
        <View>
        <ScrollView  horizontal={true} style={{}} showsHorizontalScrollIndicator={false}>
                <View style={{position:'relative'}}>
                    <View  style={{ height:70, width:70, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5}}>
                        <Image style={{height:70, width:70, position:'absolute'}} source={require('../../assets/img/user.jpg')} />
                    </View>
                    <View style={{position:'absolute', right:0, backgroundColor:'#fff', borderRadius:30}}>
                        <FAIcon name="plus-circle" style={{ right:0, fontSize:25, color:'#3B5998'}}/>
                    </View>
                    
                    <Text style={{textAlign:'center', marginBottom:10, fontSize:12}}>Add</Text>
                </View>
                <View style={{position:'relative'}}>
                    <View  style={{ height:70, width:70, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#3B5998'}}>
                        <Image style={{height:70, width:70, position:'absolute'}} source={require('../../assets/img/user1.jpg')} />
                    </View>
                    <View style={{position:'absolute', bottom:20, right:0}}>
                        <View  style={{ height:27, width:27, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#fff'}}> 
                            <Image style={{height:27, width:27, position:'absolute'}} source={require('../../assets/img/user1.jpg')} />
                        </View>
                    </View>
                    <Text style={{textAlign:'center', marginBottom:10, fontSize:12}}>James</Text>
                </View>


                <View style={{position:'relative'}}>
                    <View  style={{ height:70, width:70, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#3B5998'}}>
                        <Image style={{height:70, width:70, position:'absolute'}} source={require('../../assets/img/user1.jpg')} />
                    </View>
                    <View style={{position:'absolute', bottom:20, right:0}}>
                        <View  style={{ height:27, width:27, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#fff'}}> 
                            <Image style={{height:27, width:27, position:'absolute'}} source={require('../../assets/img/user2.png')} />
                        </View>
                    </View>
                    <Text style={{textAlign:'center', marginBottom:10, fontSize:12}}>Bukky</Text>
                </View>


                <View style={{position:'relative'}}>
                    <View  style={{ height:70, width:70, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#3B5998'}}>
                        <Image style={{height:70, width:70, position:'absolute'}} source={require('../../assets/img/user3.jpg')} />
                    </View>
                    <View style={{position:'absolute', bottom:20, right:0}}>
                        <View  style={{ height:27, width:27, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#fff'}}> 
                            <Image style={{height:27, width:27, position:'absolute'}} source={require('../../assets/img/user.jpg')} />
                        </View>
                    </View>
                    <Text style={{textAlign:'center', marginBottom:10, fontSize:12}}>Antionette</Text>
                </View>


                <View style={{position:'relative'}}>
                    <View  style={{ height:70, width:70, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#3B5998'}}>
                        <Image style={{height:70, width:70, position:'absolute'}} source={require('../../assets/img/user1.jpg')} />
                    </View>
                    <View style={{position:'absolute', bottom:20, right:0}}>
                        <View  style={{ height:27, width:27, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#fff'}}> 
                            <Image style={{height:27, width:27, position:'absolute'}} source={require('../../assets/img/user3.jpg')} />
                        </View>
                    </View>
                    <Text style={{textAlign:'center', marginBottom:10, fontSize:12}}>Johanna</Text>
                </View>


                <View style={{position:'relative'}}>
                    <View  style={{ height:70, width:70, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#3B5998'}}>
                        <Image style={{height:70, width:70, position:'absolute'}} source={require('../../assets/img/user.jpg')} />
                    </View>
                    <View style={{position:'absolute', bottom:20, right:0}}>
                        <View  style={{ height:27, width:27, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#fff'}}> 
                            <Image style={{height:27, width:27, position:'absolute'}} source={require('../../assets/img/user1.jpg')} />
                        </View>
                    </View>
                    <Text style={{textAlign:'center', marginBottom:10, fontSize:12}}>Eve</Text>
                </View>


                <View style={{position:'relative'}}>
                    <View  style={{ height:70, width:70, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#3B5998'}}>
                        <Image style={{height:70, width:70, position:'absolute'}} source={require('../../assets/img/user3.jpg')} />
                    </View>
                    <View style={{position:'absolute', bottom:20, right:0}}>
                        <View  style={{ height:27, width:27, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#fff'}}> 
                            <Image style={{height:27, width:27, position:'absolute'}} source={require('../../assets/img/user.jpg')} />
                        </View>
                    </View>
                    <Text style={{textAlign:'center', marginBottom:10, fontSize:12}}>Adam</Text>
                </View>


                <View style={{position:'relative'}}>
                    <View  style={{ height:70, width:70, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#3B5998'}}>
                        <Image style={{height:70, width:70, position:'absolute'}} source={require('../../assets/img/user1.jpg')} />
                    </View>
                    <View style={{position:'absolute', bottom:20, right:0}}>
                        <View  style={{ height:27, width:27, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#fff'}}> 
                            <Image style={{height:27, width:27, position:'absolute'}} source={require('../../assets/img/user3.jpg')} />
                        </View>
                    </View>
                    <Text style={{textAlign:'center', marginBottom:10, fontSize:12}}>Joseph</Text>
                </View>


                <View style={{position:'relative'}}>
                    <View  style={{ height:70, width:70, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#3B5998'}}>
                        <Image style={{height:70, width:70, position:'absolute'}} source={require('../../assets/img/user.jpg')} />
                    </View>
                    <View style={{position:'absolute', bottom:20, right:0}}>
                        <View  style={{ height:27, width:27, borderRadius:50, position:'relative', overflow:'hidden', marginRight:5, marginLeft:5, marginBottom:5, borderWidth:2, borderColor:'#fff'}}> 
                            <Image style={{height:27, width:27, position:'absolute'}} source={require('../../assets/img/user1.jpg')} />
                        </View>
                    </View>
                    <Text style={{textAlign:'center', marginBottom:10, fontSize:12}}>Hanna</Text>
                </View>

                
            </ScrollView>
        
        </View>
      </View>
    )
  }
}

export default Stories