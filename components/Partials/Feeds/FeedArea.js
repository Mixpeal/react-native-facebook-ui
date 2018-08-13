import React, { Component } from 'react'
import { Text, View, Modal, TouchableHighlight, Touchable } from 'react-native'
import FeedEach from './FeedEach';

class FeedArea extends Component {
  state = {
    modalVisible: false,
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
          isVisible={this.state.modalVisible}
          swipeDirection='down'
          onSwipeThreshold={200}
          onSwipe={() => this.setState({ isModalOpen: false })}
          >
          <View style={{marginTop: 22, flex:1, justifyContent:'center', alignItems:'center'}}>
            <View>
              <Text>TODO: Comment Box</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{fontSize:30, textAlign:'center'}}>Hide Comment</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <FeedEach openModal={this.setModalVisible.bind(this)} comment={true} image={ require('../../../assets/img/family1.jpg')} avatar={require('../../../assets/img/user.jpg')} name="Guillermo Moreno" post="Good friends, good food and a lot of laughs" commentCount="12"/>
        <FeedEach openModal={this.setModalVisible.bind(this)} comment={false} image={ require('../../../assets/img/family2.jpg')} avatar={require('../../../assets/img/user1.jpg')} name="Ojo Kayode Emmanuel"  post="All about saturday picnic" commentCount="20"/>
        <FeedEach openModal={this.setModalVisible.bind(this)} comment={false}  image={ require('../../../assets/img/family3.jpg')} avatar={require('../../../assets/img/user3.jpg')} name="Earl Ragnar" post="Having a nice with friend and family" commentCount="2"/>
      </View>
    )
  }
}

export default FeedArea