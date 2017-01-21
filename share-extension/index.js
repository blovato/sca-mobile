/* global fetch = true */
import React, { Component } from 'react';
import Meteor from 'react-native-meteor';
import Modal from 'react-native-modalbox';
import ShareExtension from 'react-native-share-extension';

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Share extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: true,
      type: '',
      url: '',
      userId: Meteor.userId(),
    };
  }

  async componentWillMount() {
    // if not logged in tell the user to log in
    try {
      const { type, value } = await ShareExtension.data();
      this.setState({
        type,
        url: value,
      });
      this.addItemToCart(value);
    } catch (e) {
      console.log('errrr', e);
    }
  }

  addItemToCart(url) {
    fetch('http://192.168.38.235:3000/add-item-to-cart/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
        userId: this.state.userId || 'LxDkuKLotpG7SCsRh', // remove after testing
      }),
    })
  }

  onClose = () => ShareExtension.close();
  closing = () => this.setState({ isOpen: false });

  render() {
    return (
      <Modal
        backdrop={false}
        style={{ backgroundColor: 'transparent' }}
        position="center"
        isOpen={this.state.isOpen}
        onClosed={this.onClose}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <View style={{ borderColor: 'green', borderWidth: 1, backgroundColor: 'white', height: 200, width: 300 }}>
            <TouchableOpacity onPress={this.closing}>
              <Text>type: { this.state.type }</Text>
              <Text>value: { this.state.url }</Text>
              <Text>id: { this.state.userId }</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
