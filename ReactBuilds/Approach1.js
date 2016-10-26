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

//https://www.mockable.io/a/#/space/demo6128070/rest/UcXegAAAA
// Change to Development , Production , Staging
export default class Approach1 extends Component {

   constructor(props){
       super(props)
       this.state ={
         configLoaded: false,
         mode: '',
         config: 'nil'
      }
   }

   componentDidMount(){


      var baseApi   = 'https://demo6128070.mockable.io/config'//'https://randomfacts-62bc6.firebaseio.com/facts.json'
      var configAPI =  'https://demo6128070.mockable.io/' //'https://reactconfig.firebaseio.com/Production.json' +

        fetch(baseApi)
            .then((response) => { return response.json()})
            .then((json) =>{
               console.log('Mode Detected',json.mode);
               this.setState({
                  mode: json.mode
               })

               console.log('Fetching Config from ',configAPI + this.state.mode)
                fetch(configAPI + this.state.mode)
                    .then((response) => { return response.json()})
                    .then((json) =>{
                        this.setState({
                          configLoaded: true,
                          config: json
                       })
                    })
                    .catch((e) => {
                       console.log(e)
                    })
            })
            .catch((e) => {
               console.log(e)
            })
   }

   _renderLoading(){
      return (
      <View style={styles.container}>
            <ActivityIndicator
           animating={this.state.animating}
           style={[styles.centering, {height: 80}]}
           size="large"
         />
       </View>
      );
   }

  render() {
     if(!this.state.configLoaded)
      return this._renderLoading()
      console.log(this.state.config);
    return (
      <View style={{flex:1}}>
         <View style={{flex:1,backgroundColor:'coral',alignItems:'center',justifyContent:'center'}}>
            <Text> You are on </Text>
            <Text style={{fontSize:20}}> {this.state.mode} Mode</Text>
         </View>
         <View style={{flex:5,backgroundColor:'tan',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:30}}>APIs</Text>
            <Text style={{fontSize:20}}> {this.state.config.Apis.API_1} </Text>
            <Text style={{fontSize:20}}> {this.state.config.Apis.API_2} </Text>
            <Text style={{fontSize:20}}> {this.state.config.Apis.API_3} </Text>

            <Text style={{fontSize:30,marginTop:50}}>Credentilas</Text>
            <Text style={{fontSize:20}}> {this.state.config.Credentials.userName} </Text>
            <Text style={{fontSize:20}}> {this.state.config.Credentials.passWord} </Text>

            <Text style={{fontSize:30,marginTop:50}}>Authentication Tokens</Text>
            <Text style={{fontSize:20}}> {this.state.config.authTokens.token_1} </Text>
            <Text style={{fontSize:20}}> {this.state.config.authTokens.token_2} </Text>

            <Text style={{fontSize:30,marginTop:50}}>Some Config Data</Text>
            <Text style={{fontSize:20}}> {this.state.config.testData.data_1} </Text>
            <Text style={{fontSize:20}}> {this.state.config.testData.data_2} </Text>
            <Text style={{fontSize:20}}> {this.state.config.testData.data_3} </Text>
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

module.exports = Approach1
