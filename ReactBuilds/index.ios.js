/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

var Approach1 = require('./Approach1')
var Approach2 = require('./Approach2/Approach2')
var Approach3 = require('./Approach3/Approach3')
var Approach4 = require('./Approach4/Approach4')

export default class ReactBuilds extends Component {
  render() {
    return <Approach4/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'tan'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactBuilds', () => ReactBuilds);
