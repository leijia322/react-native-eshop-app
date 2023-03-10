import React, {Component} from 'react';
import {Platform, TouchableOpacity, View, Image} from 'react-native';
import {textHeader} from './styles';
export default class HeaderBackLeft extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigationProps.goBack();
        }}
        style={textHeader.leftIcon}>
        <Image
          source={require('./../assets/images/arrow-left_3x.png')}
          style={{ width: 11, height: 20, tintColor: '#000' }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }
}
