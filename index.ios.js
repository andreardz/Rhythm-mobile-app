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
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          navigationBarHidden: true,
          title: 'Login',
          component: LoginPage,
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('Rhythm', function() { return Rhytm });
