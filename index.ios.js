/**
 * Sample React Native App - Hello World!
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

var React = require('react');
var ReactNative = require('react-native');

import LoginPage from './LoginPage';

var styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class Rhythm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        profileVideoURI: '',
        avatarURI: '',
        AboutMe: '',
        maxDistance: 10,
        talents: [],
        matches: [],
        usersSeen: [],
      },
    };
  }
  
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          navigationBarHidden: true,
          title: 'Login',
          component: LoginPage,
          passProps: {data: this.state.data},
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('Rhythm', function() { return Rhythm });
