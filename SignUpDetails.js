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
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

var UploadPage = require('./Upload');

var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');

var options = {
  mediaType: 'photo',
  allowsEditing: true,
  takePhotoButtonTitle: 'Take picture',
  title: 'Upload Profile Picture',
  storageOptions: {
    cameraRoll: true,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9B51E0',
  },
  Rhythm: {
    color: '#FFFFFF',
    fontFamily: 'Blanch',
    fontSize: 123,
    top: 50,
    textAlign: 'center',
    margin: 10,
  },
  TextInputBox: {
    alignSelf: 'center',
    height: 35,
    width: 280,
    fontSize: 16,
    borderRadius: 5,
    padding: 10,
    fontFamily: 'SanFranciscoText-Regular',
    backgroundColor: '#a563e3',
    marginBottom: 20,
    color: "#FFFFFF",
  },

  SignUpBox: {
    alignSelf: 'center',
    height: 35,
    width: 280,
    borderRadius: 5,
    height: 35,
    width: 280,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    justifyContent: 'center',  },

  SignUpBoxGrayed: {
    alignSelf: 'center',
    height: 35,
    width: 280,
    borderRadius: 5,
    height: 35,
    width: 280,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    justifyContent: 'center',
    opacity: 0.5,
  },

  SignUpText: {
    color: '#9B51E0',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SanFranciscoText-Semibold',
  },

  tryAgainText: {
    color: '#FFFFFF',
    fontFamily: 'SanFranciscoText-Regular',
    fontSize: 14,
    marginBottom: 10,
  },

  picture: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#a563e3',
    top: -35,
    justifyContent: 'center',
  },

  pictureText: {
    fontSize: 16,
    fontFamily: 'SanFranciscoText-Regular',
    color: '#DFBCFF',
    textAlign: 'center',
  }

});



class SignUpDetails extends Component {

  constructor(props) {
      super(props);
      this.state = {
        confirmPassword: '',
        ready: false,
        tryAgain: false,
        pictureUploaded: false,
      };
    }

    onFirstNameChanged(event) {
      this.props.data.firstName = event.nativeEvent.text;
      this.checkFields();
    }

    onLastNameChanged(event) {
      this.props.data.lastName = event.nativeEvent.text;
      this.checkFields();
    }

    onUserNameChanged(event) {
      this.props.data.username = event.nativeEvent.text;
      this.checkFields();
    }

    onPasswordChanged(event) {
      this.props.data.password = event.nativeEvent.text;
      this.checkFields();
    }

    onConfirmPasswordChanged(event) {
      this.setState({confirmPassword: event.nativeEvent.text}, this.checkFields);
    }

    checkFields() {
      var isReady = true;
      if (this.props.data.firstName === '') isReady = false;
      else if (this.state.lastName === '') isReady = false;
      else if (this.state.username === '') isReady = false;
      else if (this.state.password === '') isReady = false;
      else if (this.state.confirmPassword === '') isReady = false;
      else if (this.props.data.avatarURI === '') isReady = false;
      this.setState({ready: isReady});
    }

    _handlePress() {
      // if (this.state.ready === false) return;

      if (this.props.data.password !== this.state.confirmPassword) {
        this.setState({tryAgain: true});
        return;
      }

      this.props.navigator.push({
          title: 'Upload a Video',
          component: UploadPage,
          tintColor: '#9B51E0',
          navigationBarHidden: false,
          passProps: {data: this.props.data},
      });
    }

  renderIf (condition, content) {
    if (condition) return content;
    else return null;
  }

  uploadPicture() {
      ImagePicker.showImagePicker(options, (response) => {

        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        if (response.uri !== undefined) {
          
          this.props.data.avatarURI = response.uri;
          this.setState({pictureUploaded: true});

        }
      });
  }

	render() {

	    return (
	        <View style={styles.container}>

	          <Text style={styles.Rhythm}>
	            RHYTHM
	          </Text>

            <ScrollView>

            {this.renderIf(this.props.data.avatarURI === '', <TouchableOpacity onPress={this.uploadPicture.bind(this)} style={styles.picture}>
                <Text style={styles.pictureText}> Add picture</Text>
              </TouchableOpacity>)}

            {this.renderIf(this.props.data.avatarURI !== '', <Image style={styles.picture} source = {{uri: this.props.data.avatarURI}} />)}

            {this.renderIf(this.state.tryAgain, <Text style={this.state.tryAgain? styles.tryAgainText: {height: 0}}>
              Passwords do not match. Please try again.
              </Text>)}

            <TextInput
              style={styles.TextInputBox}
              onChange={this.onFirstNameChanged.bind(this)}
              placeholder='First Name'
              autoCapitalize='words'
              autoCorrect={false}
              returnKeyType = {"next"}
              onSubmitEditing={(event) => { 
                this.refs.LastNameInput.focus(); 
              }}
              placeholderTextColor='#DFBCFF'/>

            <TextInput
              style={styles.TextInputBox}
              ref='LastNameInput'
              onChange={this.onLastNameChanged.bind(this)}
              placeholder='Last Name'
              autoCapitalize='words'
              autoCorrect={false}
              returnKeyType = {"next"}
              onSubmitEditing={(event) => { 
                this.refs.UsernameInput.focus(); 
              }}
              placeholderTextColor='#DFBCFF'/>

            <TextInput
              style={styles.TextInputBox}
              ref='UsernameInput'
              autoCorrect={false}
              onChange={this.onUserNameChanged.bind(this)}
              placeholder='Username'
              autoCapitalize='none'
              returnKeyType = {"next"}
              onSubmitEditing={(event) => { 
                this.refs.PasswordInput.focus(); 
              }}
              placeholderTextColor='#DFBCFF'/>

              <TextInput
              style={styles.TextInputBox}
              ref='PasswordInput'
              onChange={this.onPasswordChanged.bind(this)}
              onSubmitEditing={(event) => { 
                this.refs.ConfirmPasswordInput.focus(); 
              }}
              secureTextEntry={true}
              placeholder='Password'
              returnKeyType = {"next"}
              placeholderTextColor='#DFBCFF'/>

              <TextInput
              style={styles.TextInputBox}
              ref='ConfirmPasswordInput'
              onChange={this.onConfirmPasswordChanged.bind(this)}
              secureTextEntry={true}
              placeholder='Confirm Password'
              returnKeyType = {"done"}
              onSubmitEditing={Keyboard.dismiss}
              placeholderTextColor='#DFBCFF'/>

              <TouchableHighlight onPress={this._handlePress.bind(this)}
              style={this.state.ready ? styles.SignUpBox : styles.SignUpBoxGrayed}>
                <Text style={styles.SignUpText}> Sign Up </Text>
              </TouchableHighlight>

            </ScrollView>

	        </View>
	    );
	  }
}

module.exports = SignUpDetails;