import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  NativeModules,
  Navigator,
  Text,
} from 'react-native';

var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');
var HomePage = require('./Homepage');

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
    backgroundColor: '#9B51E0',
  },
  msg: {
    fontSize: 16,
    fontFamily: 'SanFranciscoText-Regular',
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  ContinueBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 35,
    width: 280,
    top: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  ButtonText: {
    color: '#9B51E0',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SanFranciscoText-Semibold',
  },
  Rhythm: {
    color: '#FFFFFF',
    fontFamily: 'Blanch',
    fontSize: 123,
    textAlign: 'center',
    margin: 10,
  },

});


export default class UploadPage extends React.Component {


  _processVideo() {
      ImagePicker.showImagePicker(options, (response) => {

        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        if (response.uri !== undefined) {
          console.log("uri: " + response.uri);
          const source = {uri: response.uri.replace('file://', '')};
          
          this.props.data.profileVideoURI = response.uri;

          this.props.navigator.resetTo({
            title: 'Home',
            component: HomePage,
            tintColor: '#5f3986',
            titleTextColor: '#5f3986',
            passProps: {data: this.props.data},
          });
        }
      });

  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.Rhythm}>
              RHYTHM
        </Text>

        <Text style = {styles.msg}> 
          In order to use Rhythm, you must upload or record a short (16 second) performance to share with other users! 
        </Text>

        <TouchableOpacity onPress={this._processVideo.bind(this)} style={styles.ContinueBox}>
          <Text style={styles.ButtonText}> Continue </Text>
        </TouchableOpacity>

      </View>
      
    );
  }


}

module.exports = UploadPage;