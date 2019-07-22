import {Platform, StyleSheet, Text, View, StatusBar, TouchableHighlight} from 'react-native';

import React, { Component } from 'react';

export default class Edit extends Component {
  static navigationOptions = {
    title: "Welcome"
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View >
        <TouchableHighlight
          onPress={() => navigate("ScreenTwo", {screen: "Screen Two"})}
        >
          <Text
           >Screen Two </Text>
        </TouchableHighlight>
      </View>
    );
  }
};