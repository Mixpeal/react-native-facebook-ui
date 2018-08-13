import React, { Component } from 'react'
import { Text, View, Platform, Image, Linking} from 'react-native'
import {Icon, Input, Badge} from 'native-base'
import {TabNavigator, NavigationActions} from 'react-navigation'
import { HomeTab } from './TabNavigators/HomeTab';
import { NotificationTab } from './TabNavigators/NotificationTab';
import { FriendTab } from './TabNavigators/FriendTab';
import { ProfileTab } from './TabNavigators/ProfileTab';
import { MenuTab } from './TabNavigators/MenuTab';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

const navigate = NavigationActions.navigate
class MainScreen extends Component {
    constructor(props){
        super(props);
    }
    navigateToAbout(){
        const { navigate } = this.props.navigation;
        navigate({ routeName: 'CameraScreen' })
      }
    static navigationOptions = {
        headerLeft: <Icon name="ios-camera" style={{paddingLeft:10, color:"#fff"}} />,
        title: "Facebook",
        ...Platform.select({
          android:{
              headerTitle:<View style={{borderBottomWidth:0.5, borderBottomColor:'#c8d3ea', flex:1, flexDirection:'row', }}>
              <Icon name="ios-search" style={{color:'white', fontSize:25}}/>
              <Input style={{flex:1, padding:0, margin:0, height:30, color: '#c8d3ea'}} placeholder="Search" placeholderTextColor="#c8d3ea" />
           </View>,
          },
          ios:{
                  headerTitle:<View style={{borderRadius:20, flex:1, flexDirection:'row', backgroundColor:"#2b406e", display:'flex', alignItems:'center'}}>
                      <Icon name="ios-search" style={{color:'white', fontSize:25, marginLeft:10, textAlign:'center'}}/>
                      <Input style={{padding:0, margin:0, height:30, color: '#f2f2f2'}} placeholder="Search" placeholderTextColor="#f2f2f2" />
                   </View>,
          }
        }),
        headerRight: <View>
              <FAIcon style={{paddingRight: 10, color:"#fff", fontSize:30}} name='facebook-messenger'/> 
              <Badge danger style={{ position: 'absolute', top:-6, right:2, borderRadius:100, height:20, width:20, alignItems:'center', backgroundColor:'red', ...Platform.select({ android:{height:18, width:18}})}}>
                  <Text style={{color:'#fff', fontWeight:'bold', textAlignVertical:'center', fontSize:11}}>8</Text>
              </Badge>
            </View>,
        headerStyle: {
          shadowOpacity: 0,
          elevation: 0,
          backgroundColor:"#3B5998",
          display:'flex'
        },
    
    }
  render() {
    return (
      <AppTabNavigator />
    )
  }
}

export default MainScreen; 

const AppTabNavigator = TabNavigator({
    HomeTab:{
        screen: HomeTab,
        navigationOptions: {
            gesturesEnabled: false
        },
    },
    NotificationTab: {
        screen: NotificationTab
    },
    FriendTab: {
        screen: FriendTab
    },
    ProfileTab: {
        screen: ProfileTab
    },
    MenuTab: {
        screen: MenuTab
    }
}, {
    animationEnabled:true,
    swipeEnabled:true,
    initialRouteName:'HomeTab',
    ...Platform.select({
        android:{
            tabBarPosition:'top',
            
        },
        ios:{
            tabBarPosition:'bottom',
        }
    }),
    tabBarOptions:{
        style:{
            ...Platform.select({
                android:{
                    backgroundColor:'white',
                    elevation: 0,
                    borderBottomWidth:0.5,
                    borderBottomColor:'#383838',
                },
            })
        },
        activeTintColor:'#3B5998',
        inactiveTintColor:'#383838',
        showLabel:false,
        showIcon:true,
        indicatorStyle: {
            backgroundColor: 'transparent',
        },
    },
})
