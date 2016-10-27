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
  ActivityIndicator,
  NativeModules
} from 'react-native'
var configFromNative = NativeModules.BuildMode
export default class Approach4 extends Component {

  render() {
     console.log(configFromNative);
   return (
     <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
         <Text> Reading Configuration From</Text>
         <Text style={{fontSize:20, fontFamily:'AvenirNext-Bold'}}> Native Land</Text>
         <Text> This Implementation uses the  Xcode Build Schemes </Text>
         <Text> so is Confined to " iOS " </Text>
         <Text> Picked the BuildMode from Xcode</Text>
         <Text style={{fontSize:15, fontFamily:'AvenirNext-Bold',marginTop:20}}> {configFromNative.Mode}</Text>
         <Text> and Pointing To</Text>
         <Text style={{fontSize:20, fontFamily:'AvenirNext-Bold'}}> {configFromNative.EndPoint}</Text>
     </View>
   );
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

module.exports = Approach4
