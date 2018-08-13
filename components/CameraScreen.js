import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
class CameraScreen extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#fff'}}>TODO: camera</Text>
      </View>
    )
  }
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center'
  },
});