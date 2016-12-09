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

import moment from 'moment/min/moment-with-locales.min';

var Messages = require('./Messages');

var styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    messageList: {
      height: Dimensions.get('window').height - 60,
    },
    box: {
      height: 85,
      width: Dimensions.get('window').width,
      borderBottomWidth: 0.3,
      flexDirection: 'row',
      paddingLeft: 7,
      paddingTop: 7,
    },

    icon: {
      width: 70,
      height: 70,
      borderRadius: 35,
      paddingLeft: 30,
      alignItems: 'center',
    },
    usernameText: {
      fontFamily: 'SanFranciscoText-Semibold',
      color:'#272727',
      textAlign:'left',
      paddingLeft: 10,
      flex:1 
    },
    messageText: {
      fontFamily: 'SanFranciscoText-Regular',
    },
    timestampText: {
      fontFamily: 'SanFranciscoText-Regular',
      color:'#ADADAD', 
      paddingRight: 7,
    },
        alignButtons:{
        textAlign:'center',
        paddingLeft: 10,
        paddingRight: 10,
        flex:1    
    },
    optionBar:{
        backgroundColor:'#ffffff',
        flexDirection:'row',
        paddingTop: 10,
        alignItems: 'center',
    },
    optionButton:{
        width: 65,
        height: 65
    },
    toolbar:{
          position: 'absolute',
          left: 0,
          right: 0,
          top: Dimensions.get('window').height - 50,
          backgroundColor:'#272727',
          flexDirection:'row',
          height:45,
          alignItems:'center',
    },
    toolbarButton:{
        width: 50,
        height: 50,   
        color:'#fff',
    },
});



class Matches extends React.Component {

  goHome() {
    console.log("Going Home...");
  }

  openMessage(key) {
    this.props.navigator.push({
            title: this.props.data.matches[key].username,
            component: Messages,
            tintColor: '#5f3986',
            titleTextColor: '#5f3986',
            passProps: {data: this.props.data, key: key},
    });
  }

  render () {
    return (
       <View> 
      <View style={styles.toolbar}>
                <Text style={styles.alignButtons}>
                      <Image
                          source={require('./img/home_button_grey.png')} style={styles.optionButton}
                      />
                </Text>
                <Text style={styles.alignButtons}>
                      <Image
                          source={require('./img/profile_button_grey.png')} style={styles.optionButton}
                      />
                </Text>
                <Text style={styles.alignButtons}>
                      <Image
                          source={require('./img/message_button_white.png')} style={styles.optionButton}
                      />
                </Text>
                <Text style={styles.alignButtons}>
                      <Image
                          source={require('./img/filter_button_grey.png')} style={styles.optionButton}
                      />
                </Text>
      </View>

      <View style={styles.messageList}>
      <ScrollView
        style={styles.container}>

          {Object.keys(this.props.data.matches).map(function(key) {
            return (
                <TouchableOpacity style={styles.box} key={key} onPress={() => this.openMessage(key)} >
                  <Image source={{uri: this.props.data.matches[key].avatar}} style={styles.icon}/>
                    <Text style={styles.usernameText}> @{this.props.data.matches[key].username} {"\n"}
                    <Text style={styles.messageText}> {this.props.data.matches[key].lastMessage} 
                    </Text> </Text>
                    <Text style={styles.timestampText}>  {moment(this.props.data.matches[key].date).format('LT')} </Text>
                </TouchableOpacity>

            );
          }.bind(this))}

      </ScrollView>
      </View>
      </View>

    );
  }
}


module.exports = Matches;