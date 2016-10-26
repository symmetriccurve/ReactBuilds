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
var mode = 'Production'
var Config = require('./Config')(mode)

console.log('Configuaration', Config);

export default class Approach2 extends Component {

      constructor(props){
          super(props)
          this.state ={
            config: Config,
            mode: mode
         }
      }

  render() {
   return (
     <View style={{flex:1,backgroundColor:'peachpuff'}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
           <Text> You are on </Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.mode} Mode</Text>
            <Text>Using Local Config</Text>
        </View>
        <View style={{flex:5,alignItems:'center',justifyContent:'center'}}>
           <Text style={{fontSize:30}}>APIs</Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.config.Apis.API_1} </Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.config.Apis.API_2} </Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.config.Apis.API_3} </Text>

           <Text style={{fontSize:30,marginTop:50}}>Credentilas</Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.config.Credentials.userName} </Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.config.Credentials.passWord} </Text>

           <Text style={{fontSize:30,marginTop:50}}>Authentication Tokens</Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.config.authTokens.token_1} </Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.config.authTokens.token_2} </Text>

           <Text style={{fontSize:30,marginTop:50}}>Some Config Data</Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.config.testData.data_1} </Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.config.testData.data_2} </Text>
           <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',fontWeight:'600'}}> {this.state.config.testData.data_3} </Text>
        </View>
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

module.exports = Approach2
