'use strict';

import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Button,
  TextInput,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Rhythm: {
    color: '#9B51E0',
    fontFamily: 'Blanch',
    fontSize: 123,
    top: 50,
    textAlign: 'center',
    margin: 10,
  },
  firstNameInput: {
    alignSelf: 'center',
    height: 35,
    width: 280,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#9B51E0',
    borderRadius: 5,
    color: '#000000',
    top: 80,
    fontFamily: 'SanFranciscoText-Semibold',
  },
  lastNameInput: {
    alignSelf: 'center',
    height: 35,
    width: 280,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#9B51E0',
    borderRadius: 5,
    color: '#000000',
    top: 100,
    fontFamily: 'SanFranciscoText-Semibold',
  },
  userNameInput: {
    alignSelf: 'center',
    height: 35,
    width: 280,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#9B51E0',
    borderRadius: 5,
    color: '#000000',
    top: 120,
    fontFamily: 'SanFranciscoText-Semibold',
  },

  PasswordInput: {
    alignSelf: 'center',
    height: 35,
    width: 280,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#9B51E0',
    borderRadius: 5,
    color: '#000000',
    top: 140,
    fontFamily: 'SanFranciscoText-Semibold',
  },

  confirmPasswordInput: {
    alignSelf: 'center',
    height: 35,
    width: 280,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#9B51E0',
    borderRadius: 5,
    color: '#000000',
    top: 160,
    fontFamily: 'SanFranciscoText-Semibold',
  },

  SignUpBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 35,
    width: 280,
    borderRadius: 5,
    top: 180,
    borderWidth: 1,
    backgroundColor: '#9B51E0',
  },

  SignUpBoxGrayed: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 35,
    width: 280,
    borderRadius: 5,
    top: 180,
    borderWidth: 1,
    backgroundColor: '#9B51E0',
    opacity: 0.5,
  },

  SignUpText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SanFranciscoText-Semibold',
  },

  tryAgainText: {
    color: '#9B51E0',
    fontFamily: 'SanFranciscoText-Regular',
    fontSize: 14,
    top: 60,
    textAlign: 'center',
  }

});



class SignUpDetails extends Component {

  constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        ready: false,
        tryAgain: false,
      };
    }

    onFirstNameChanged(event) {
      this.setState({firstName: event.nativeEvent.text}, this.checkFields);
    }

    onLastNameChanged(event) {
      this.setState({lastName: event.nativeEvent.text}, this.checkFields);
    }

    onUserNameChanged(event) {
      this.setState({username: event.nativeEvent.text}, this.checkFields);
    }

    onPasswordChanged(event) {
      this.setState({password: event.nativeEvent.text}, this.checkFields);
    }

    onConfirmPasswordChanged(event) {
      this.setState({confirmPassword: event.nativeEvent.text}, this.checkFields);
    }

    checkFields() {
      var isReady = true;
      if (this.state.firstName === '') isReady = false;
      else if (this.state.lastName === '') isReady = false;
      else if (this.state.username === '') isReady = false;
      else if (this.state.password === '') isReady = false;
      else if (this.state.confirmPassword === '') isReady = false;
      this.setState({ready: isReady});
    }

    _handlePress() {
      if (this.state.ready === false) return;

      if (this.state.password != this.state.confirmPassword) {
        this.setState({tryAgain: true});
        return;
      }
    }

	render() {
	    return (
	        <View style={styles.container}>

	          <Text style={styles.Rhythm}>
	            RHYTHM
	          </Text>

            <Text style={this.state.tryAgain? styles.tryAgainText: {height: 0}}>
              Passwords do not match. Pleast try again.
              </Text>

            <TextInput
              style={styles.firstNameInput}
              onChange={this.onFirstNameChanged.bind(this)}
              placeholder='First Name'/>

            <TextInput
              style={styles.lastNameInput}
              onChange={this.onLastNameChanged.bind(this)}
              placeholder='Last Name'/>

            <TextInput
              style={styles.userNameInput}
              onChange={this.onUserNameChanged.bind(this)}
              placeholder='Username'/>

              <TextInput
              style={styles.PasswordInput}
              onChange={this.onPasswordChanged.bind(this)}
              secureTextEntry={true}
              placeholder='Password'/>

              <TextInput
              style={styles.confirmPasswordInput}
              onChange={this.onConfirmPasswordChanged.bind(this)}
              secureTextEntry={true}
              placeholder='Confirm Password'/>

              <TouchableHighlight onPress={this._handlePress.bind(this)}
              style={this.state.ready ? styles.SignUpBox : styles.SignUpBoxGrayed}>
                <Text style={styles.SignUpText}> Sign Up </Text>
              </TouchableHighlight>

	        </View>
	    );
	  }
}

module.exports = SignUpDetails;