'use strict';

import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

var SignUpDetails = require('./SignUpDetails');


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9B51E0',
  },
  TopBar: {
    height: 50,
    width: 750,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SanFranciscoDisplay-Semibold',
    color: '#9B51E0',
  },
  plainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  signUpBox: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 175,
    height: 51,
    width: 280,
    backgroundColor: "#743BA8",
    borderRadius: 10,
  },
  loginBox: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 200,
    height: 51,
    width: 280,
    backgroundColor: "#AF7EDD",
    borderRadius: 10,
  },
  Rhythm: {
    color: '#FFFFFF',
    fontFamily: 'Blanch',
    fontSize: 123,
    top: 100,
    textAlign: 'center',
    margin: 10,
  },
  signUp: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'SanFranciscoText-Bold',
  },
});



class LoginPage extends Component {

	_handlePress() {
    	this.props.navigator.push({
	        title: 'Sign Up Details',
	        component: SignUpDetails,
	        tintColor: '#9B51E0',
          passProps: {data: this.props.data},
      });
  	}

	render() {
	    return (
	        <View style={styles.container}>

	          <Text style={styles.Rhythm}>
	            RHYTHM
	          </Text>

	          <Image
	            style={{width: 280, height: 51, top: 150, borderRadius: 10}}
	            source={require('./img/loginwithfb.png')}/>

	            <TouchableOpacity onPress={this._handlePress.bind(this)} style={styles.signUpBox}>
	            	<Text style={styles.signUp}> Sign Up </Text>
	            </TouchableOpacity>

	          <View style={styles.loginBox}>
	            <Text style={styles.signUp}>
	              Login with E-mail
	            </Text>
	          </View>

	        </View>
	    );
	  }
}

module.exports = LoginPage;