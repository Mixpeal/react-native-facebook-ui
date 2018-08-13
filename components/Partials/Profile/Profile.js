import React, { Component } from 'react'
import { Text, View, Image,  } from 'react-native'
import {Icon, Input} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import FeedArea from '../Feeds/FeedArea';

export class Profile extends Component {
  render() {
    return (
      <View>
        <View>
            <View style={{ backgroundColor:'#fff'}}>
                <Image source={ require('../../../assets/img/family2.jpg')} resizeMode={'cover'}
                style={{ width: '100%', height: 200 }} />

                <View style={{marginTop:-75, alignSelf:'center'}}>
                    <View  style={{height:150, width:150, borderRadius:75, position:'relative', overflow:'hidden', marginVertical:5, borderWidth:4, borderColor:'#fff'}}>
                        <Image style={{height:150, width:150, position:'absolute'}} source={require('../../../assets/img/user3.jpg')} />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor:'#fff'}}>
                <Text style={{textAlign:'center', fontSize:22, color:'#000'}}>Ojo Kayode Emmanuel</Text>
                <Text style={{textAlign:'center', marginBottom:10, fontSize:16, color:'#000'}}>(Mixpeal)</Text>
                <Text style={{textAlign:'center', color:'#3B5998', fontSize:12, }}>Add a temporary bio</Text>
            </View>
            <View style={{ }}>
                <View style={{backgroundColor:'#fff', alignItem:'center',flexDirection:'row', flex:1, padding:10, borderBottomWidth:0.5, borderColor:'#dcdcdc', marginBottom:1}}>
                    <View style={{flex:1}}>
                        <Icon style={{textAlign:'center'}} name="add-circle"/>
                        <Text style={{textAlign:'center',color:'#000'}}>Add to Story</Text>
                    </View>
                    <View style={{flex:1}}>
                        <FAIcon style={{textAlign:'center', fontSize:22, marginBottom:7,color:'#000'}} name="eye"/>
                        <Text style={{textAlign:'center',color:'#000'}}>View As</Text>
                    </View>
                    <View style={{flex:1}}>
                        <FAIcon style={{textAlign:'center', fontSize:22, marginBottom:7,color:'#000'}} name="user-edit"/>
                        <Text style={{textAlign:'center',color:'#000'}}>Edit Profile</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon style={{textAlign:'center'}} name="more"/>
                        <Text style={{textAlign:'center',color:'#000'}}>More</Text>
                    </View>
                </View>


                <View style={{padding:10, backgroundColor:'#fff'}}>
                    <View  style={{flexDirection:'row', marginBottom:10}}>
                        <FAIcon style={{marginRight:10,color:'#000'}} name="briefcase"/>
                        <Text style={{color:'#000'}}>Software Engineer at </Text>
                        <Text style={{fontWeight:'bold',color:'#000'}}>Durabyte Studio</Text>
                    </View>
                    <View  style={{flexDirection:'row', marginBottom:10}}>
                        <FAIcon style={{marginRight:10,color:'#000'}} name="graduation-cap"/>
                        <Text style={{color:'#000'}}>Went to </Text>
                        <Text style={{fontWeight:'bold',color:'#000'}}>MIT</Text>
                    </View>
                    <View  style={{flexDirection:'row', marginBottom:10,color:'#000'}}>
                        <FAIcon style={{marginRight:10,color:'#000'}} name="home"/>
                        <Text style={{color:'#000'}}>Lives in </Text>
                        <Text style={{fontWeight:'bold',color:'#000'}}>Las Vegas</Text>
                    </View>
                    <View  style={{flexDirection:'row', marginBottom:10,color:'#000'}}>
                        <FAIcon  style={{marginRight:10,color:'#000'}} name="map-marker-alt"/>
                        <Text style={{color:'#000'}}>From </Text>
                        <Text style={{fontWeight:'bold',color:'#000'}}>Oke Ayepe, Osogbo</Text>
                    </View>
                    <View  style={{flexDirection:'row', marginBottom:10,color:'#000'}}>
                        <FAIcon style={{marginRight:10,color:'#000'}} name="clock"/>
                        <Text style={{color:'#000'}}>Joined </Text>
                        <Text style={{fontWeight:'bold',color:'#000'}}>April 1632</Text>
                    </View>
                </View>


                <View style={{flexDirection:'row', padding:20, backgroundColor:'#f2f2f2', alignItem:'center', marginBottom:10}}>
                    <Text style={{color:'#000', textAlign:'center', flex:1}}>ABOUT</Text>
                    <Text style={{color:'#000', textAlign:'center', flex:1}}>PHOTOS</Text>
                    <Text style={{color:'#000', textAlign:'center', flex:1}}>FRIENDS</Text>
                </View>

                <View style={{flexDirection:'row', padding:10, backgroundColor:'#fff', alignItem:'center'}}>
                <View  style={{height:40, width:40, borderRadius:50, position:'relative', overflow:'hidden', marginVertical:5}}><Image style={{height:40, width:40, position:'absolute'}} source={require('../../../assets/img/user3.jpg')} />
                        </View>
                    <Input placeholde="What's on your mind" style={{}}/>
                </View>
                <View style={{borderTopWidth:0.4, borderTopColor:"#dcdcdc",flexDirection:'row', padding:10, backgroundColor:'#fff', alignItem:'center'}}>
                    <Text style={{color:'#000', textAlign:'center', flex:1}}>Live</Text>
                    <Text style={{color:'#000', textAlign:'center', flex:1}}>Photo</Text>
                    <Text style={{color:'#000', textAlign:'center', flex:1}}>Life Event</Text>
                </View>

                  <FeedArea />  


            </View>
        </View>
      </View>
    )
  }
}

export default Profile