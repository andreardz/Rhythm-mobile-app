/**
 * Sample React Native App - Hello World!
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Button,
} from 'react-native';


const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};


export default class Rhythm extends Component {

  onPressed() {
    return (
      <Image
          style={{width: 280, height: 51, top: 25, borderRadius: 10}}
          source={require('./img/loginwithfb2.png')}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.Rhythm}>
          RHYTHM
        </Text>

        <Image
          style={{width: 280, height: 51, top: 180, borderRadius: 10}}
          source={require('./img/loginwithfb2.png')}/>

        <View style={styles.signUpBox}>
          <Button onPress={this.onPressed} style={styles.signUp} title="Sign Up">
          </Button>
        </View>

        <View style={styles.loginBox}>
          <Text style={styles.signUp}>
            Login with E-mail
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9B51E0',
  },
  signUpBox: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 205,
    height: 51,
    width: 280,
    backgroundColor: "#743BA8",
    borderRadius: 10,
  },
  loginBox: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 230,
    height: 51,
    width: 280,
    backgroundColor: "#AF7EDD",
    borderRadius: 10,
  },
  Rhythm: {
    color: '#FFFFFF',
    fontFamily: 'Blanch',
    fontSize: 123,
    top: 150,
    textAlign: 'center',
    margin: 10,
  },
  signUp: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'SanFranciscoDisplay-Bold',
  },
});

AppRegistry.registerComponent('Rhythm', () => Rhythm);
