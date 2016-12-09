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
  TextInput,
} from 'react-native';

var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');
var Video = require('react-native-video').default;

var videoSize = Dimensions.get('window').width; //full width

var options = {
  mediaType: 'video',
  allowsEditing: true,
  takePhotoButtonTitle: 'Record performance',
  title: 'Select performance from camera roll or record',
  durationLimit: 16,
  storageOptions: {
    cameraRoll: true,
  },
};

var styles = StyleSheet.create({
    mainContainer:{
        height: Dimensions.get('window').height - 130,            
    },
    content:{
        backgroundColor:'#ebeef0', //remove this later
        flex: 1   
    },
    card:{
        backgroundColor:'#ffffff',
        paddingTop:10, //offset top navigation
        paddingBottom:10,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection:'row' 
    },
    cardButton:{
        width: 30,
        height: 30,
        borderRadius: 30/2
    },
    username:{
        fontFamily: 'SanFranciscoText-Semibold',
        color:'#272727',
        textAlign:'left',
        paddingLeft: 10,
        flex:1    
    },
    videoContent:{
        width: videoSize*.9,
        height: videoSize*.9,
        alignSelf: 'center',
    },
    talentContent:{
        backgroundColor:'#ffffff',
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 0,
        flexDirection:'row',
    },
    talentText:{
        color:'#5f3986',
        textAlign:'left',
        fontFamily: 'SanFranciscoText-Semibold',
        flex: 1    
    },
    aboutContent:{
        backgroundColor:'#ffffff',
        paddingLeft: 10,
        paddingBottom: 5,
        flexDirection:'row',
    },
    aboutText:{
        color:'#000000',
        textAlign:'left',
        fontFamily: 'SanFranciscoText-Regular',
        flex: 1    
    },
    alignButtons:{
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        textAlign: 'center',   
    },
    optionBar:{
        backgroundColor:'#ffffff',
        position: 'absolute',
        left: 0,
        right: 0,
        top: Dimensions.get('window').height - 110,
        bottom: -63,
        flexDirection:'row',
        height:45,
        alignItems:'center',
    },
    optionButton:{
        width: 60,
        height: 60,
    },
    toolbar:{
          position: 'absolute',
          left: 0,
          right: 0,
          top: Dimensions.get('window').height - 50,
          bottom: -63,
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

class MyProfile extends Component {


  onUserNameChanged(event) {
    this.props.data.username = event;
  }

  onAboutMeChanged(event) {
    this.props.data.AboutMe = event;
  }

   _processVideo() {
      ImagePicker.showImagePicker(options, (response) => {

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        if (response.uri !== undefined) {
          console.log("uri: " + response.uri);
          const source = {uri: response.uri.replace('file://', '')};
          
          this.props.data.profileVideoURI = source;
        }
      });

  }

  goToMessages() {
    this.player.muted = true;
    this.props.navigator.push({
            title: 'Matches',
            component: Matches,
            tintColor: '#5f3986',
            titleTextColor: '#5f3986',
            passProps: {data: this.props.data},
    });
  }

	render() {
	    return (
          <View style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.card}>
                        <Image
                              source={{uri: this.props.data.avatarURI}} style={styles.cardButton}/>
                        <TextInput style={styles.username}
                        ref='UsernameInput'
                        autoCorrect={false}
                        onChangeText={this.onUserNameChanged.bind(this)}
                        value={this.props.data.username}
                        autoCapitalize='none'
                        placeholderTextColor='#DFBCFF'/>
                    </View>
                    <View style={styles.videoContent}>
                      <TouchableOpacity onPress={this._processVideo.bind(this)}>
                        <Video source={{uri: this.props.data.profileVideoURI}}
                          ref={(ref) => {
                            this.player = ref
                          }}  
                          repeat={true}
                          style={styles.videoContent} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.aboutContent}>
                        <TextInput style={styles.aboutText}
                        ref='AboutMeInput'
                        autoCorrect={true}
                        onChangeText={this.onAboutMeChanged.bind(this)}
                        value={this.props.data.AboutMe === '' ? '': this.props.data.AboutMe}
                        placeholder='About Me (100 characters)'
                        maxLength={100}
                        autoCapitalize='none'
                        placeholderTextColor='#DFBCFF'/>
                          <Text style={styles.aboutText}>{this.props.data.aboutMe}</Text>
                    </View>
                </ScrollView>

                <View style={styles.toolbar}>
                <Text style={styles.alignButtons}>
                      <Image
                          source={require('./img/home_button_grey.png')} style={styles.optionButton}/>
                </Text>
                <Text style={styles.alignButtons}>
                      <Image
                          source={require('./img/profile_button_white.png')} style={styles.optionButton}/>
                </Text>
                <Text style={styles.alignButtons}>
                  <TouchableOpacity onPress={this.goToMessages.bind(this)} style={styles.optionButton}>
                      <Image
                          source={require('./img/message_button_grey.png')} style={styles.optionButton}/>
                  </TouchableOpacity>
                </Text>
                <Text style={styles.alignButtons}>
                      <Image
                          source={require('./img/filter_button_grey.png')} style={styles.optionButton}/>
                </Text>
                </View>
          </View>
	    );
	}
}

module.exports = MyProfile;