import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Index from './src/routes';
import reduxStore from './src/redux/store';
import {Provider} from 'react-redux';
import Loader from './src/components/Loader';
export class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Loader/>
      <Index />
      </Provider>

    );
  }
}

export default App;
