import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import {Icon, Input} from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome5';


class FeedEach extends Component {
  render() {
    return (
      <View  style={{backgroundColor:'#fff', marginTop:10}}>
        <TouchableOpacity onPress={() => {this.props.openModal(true);}}
        activeOpacity={1}>

        <View>
            {/* Feed Top Area */}
            <View style={{flexDirection:'row', padding:10}}>
                <View  style={{height:40, width:40, borderRadius:50, position:'relative', overflow:'hidden', marginVertical:5}}><Image style={{height:40, width:40, position:'absolute'}} source={this.props.avatar} />
                </View>
                <View style={{ flexWrap:'wrap', flex:1, paddingLeft:10, paddingRight:20}}>
                    <Text style={{fontSize:13.5, lineHeight:17}}>
                        <Text style={{ color:'#000', fontWeight:'500'}}>{this.props.name}</Text> <Text style={{color:'#4d4d4d'}}>with </Text> 
                        <Text style={{ color:'#000'}}>Josephine Williams </Text> 
                        <Text style={{color:'#4d4d4d'}}>and </Text> 
                        <Text style={{ color:'#000'}}>2 others</Text> 
                    </Text> 
                    <Text style={{ color:'#808080', fontSize:11.5, marginTop:2 }}>Yesterday at 11:14 PM <FAIcon name="globe-americas"/> </Text> 
                </View>
                <View>
                    <Icon name="more" />
                </View>
            </View>

            {/* Post Text area */}
            <Text style={{marginTop:15, marginBottom:10, marginLeft:10,color:'#000'}}>{this.props.post}</Text> 

            {/* Post media area */}
            <View style={{position:'relative'}}>
                <Image source={this.props.image} 
                    resizeMode={'cover'}
                    style={{ width: '100%', height: 250 }}  />
            </View>

            {/* Post footer area */}
            <View style={{flexDirection:'row', padding:10, color:'#808080'}}>
                <Text style={{fontSize:12}}>Colby Harris and 23 others</Text>
                <View style={{alignItems:'flex-end', flex:1}}>
                    <Text style={{fontSize:12}}>{this.props.commentCount} Comments</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', paddingTop:10, borderTopWidth:0.4, borderTopColor:"#dcdcdc", borderBottomWidth:0.4, borderBottomColor:"#dcdcdc", paddingBottom:10, marginLeft:10, marginRight:10}}>
                <View style={{flex:1, alignItems:'center', }}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <FAIcon style={{fontSize:20, color:'#4d4d4d'}} name="thumbs-up"/>
                        <Text style={{marginLeft:5, color:'#4d4d4d'}}>Like</Text>
                    </View>

                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <FAIcon onPress={() => {this.props.openModal(true);}} style={{fontSize:20, color:'#4d4d4d'}} name="comment-alt"/>
                        <Text onPress={() => {this.props.openModal(true);}}  style={{marginLeft:5, color:'#4d4d4d'}}>Comment</Text>
                    </View>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <FAIcon style={{fontSize:20, color:'#4d4d4d'}} name="share-alt"/>
                        <Text style={{marginLeft:5, color:'#4d4d4d'}}>Share</Text>
                    </View>
                </View>
            </View>

            {this.props.comment? (
                <View>
                    <View style={{flexDirection:'row', padding:10}}>
                    <View  style={{height:40, width:40, borderRadius:50, position:'relative', overflow:'hidden', marginVertical:5}}><Image style={{height:40, width:40, position:'absolute'}} source={require('../../../assets/img/user3.jpg')} />
                        </View>
                    <View style={{backgroundColor:'#e6e6e6', borderRadius:20, padding:10, marginLeft:10}}>
                        <Text  style={{fontWeight:'500', color:'#000'}}>George Van de Vel</Text>
                        <Text style={{fontSize:14, color:'#000'}}>You guys are having nice time...</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', padding:10}}>
                    <View  style={{height:40, width:40, borderRadius:50, position:'relative', overflow:'hidden', marginVertical:5}}><Image style={{height:40, width:40, position:'absolute'}} source={require('../../../assets/img/user3.jpg')} />
                        </View>
                    <View style={{backgroundColor:'#e6e6e6', borderRadius:20, marginLeft:10, flex:1, flexDirection:'row'}}>
                    <Input style={{marginLeft:10}} placeholder="Write a Comment"/>
                        <View style={{flexDirection:'row', alignSelf:'center'}}>
                            <FAIcon  style={{fontSize:24, color:'#4d4d4d', marginRight:10}} name="camera"/>
                            <FAIcon  style={{fontSize:24, color:'#4d4d4d', marginRight:10}} name="smile"/>
                        </View>
                    </View>
                </View>
                </View>
            ): null}
            


        </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default FeedEach