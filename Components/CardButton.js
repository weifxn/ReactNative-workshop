import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../Screens/Styles'

export default class CardButton extends React.Component {
  render() {
    return (
      <View style={this.props.style}>

          <TouchableOpacity 
            onPress={this.props.func}
          >
            <Text style={styles.button}>{this.props.name}</Text>
          </TouchableOpacity>

      </View>
    );
  }
}