/**
 * Sample React Native App - Hello World!
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

var React = require('react');
var ReactNative = require('react-native');

var LoginPage = require('./LoginPage');

var styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

class Rhytm extends React.Component {

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

ReactNative.AppRegistry.registerComponent('Rhythm', function() { return Rhytm });
