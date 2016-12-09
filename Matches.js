'use strict';

import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  ScrollView,
  Dimensions,
  ListView,
} from 'react-native';


var styles = StyleSheet.create({
    container: {
        flex: 1,        
    },

    box: {
      height: 85,
      width: Dimensions.get('window').width,
      borderBottomWidth: 0.3,
    },

    icon: {
      flexDirection: 'row',
      width: 70,
      height: 70,
      borderRadius: 35,
      paddingLeft: 30,
      alignItems: 'center',
    }


});



class Matches extends React.Component {

  render () {
    return (

      <ScrollView
        style={styles.container}>

          {Object.keys(this.props.data.matches).map(function(key) {

            return (
              <View style={styles.box} key={this.props.data.matches[key].username}> 

                  <Image source={{uri: this.props.data.matches[key].avatar}} style={styles.icon}/>
                    <Text> @ {this.props.data.matches[key].username} </Text>
                    <Text> {this.props.data.matches[key].lastMessage} </Text>

              </View>

            );
          }.bind(this))}

      </ScrollView>

    );
  }
}


module.exports = Matches;