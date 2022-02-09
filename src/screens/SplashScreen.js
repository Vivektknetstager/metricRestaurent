import { Text, View } from 'react-native';
import React, { Component } from 'react';

export class SplashScreen extends Component {
    async componentDidMount() {
       
        setTimeout(() => {
            this.props.navigation.replace('HomeScreen');
        }, 2000);
    }
  render() {
    return (
      <View>
      </View>
    );
  }
}

export default SplashScreen;
