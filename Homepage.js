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
  AlertIOS,
  Dimensions,
} from 'react-native';

var Video = require('react-native-video').default;

var videoSize = Dimensions.get('window').width; //full width

import Matches from './Matches';

import MyProfile from './MyProfile';

import FilterSettings from './FilterSettings';

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
    distance:{
        fontFamily: 'SanFranciscoText-Regular',
        color:'#ADADAD', 
        textAlign:'left',
        paddingLeft: 10
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

export default class HomePage extends Component {

  constructor(props) {
      super(props);

      this.state = {
        videoURL: '',
        records: [],
        count: 0,
        index: 0,
        nextPage: 1,
        aboutMe: '',
        avatar: '',
        username: '',
        distance: 0,
        loaded: false,
        talents: ['', 'Singer', 'Rapper', 'Drummer', 'Guitarist', 'Pianist', 'Choreographer', 'Dancer', 'DJ', 'Violnist', 'Flute', 'Saxophone', 'Trumpet', 'Clarinet', 'Viola', 'Cello', 'Bass', 'Tuba', 'Horn', 'Harmonica'],
        talentIndex: 0,
      };

      this.getNextPage();
  }

  getNextPage() {
      fetch("https://vine.co/api/timelines/channels/11/popular?page=" + this.state.nextPage, {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {return responseData})
        .then ((data) => {
          this.setState({loaded: false});
          this.setState({records: data.data.records});
          this.setState({count: data.data.count});
          this.setState({index: 1});
          this.setState({nextPage: this.state.nextPage + 1});
          this.setState({aboutMe: data.data.records[0].description});
          this.setState({username: data.data.records[0].username});

          var avatarIndex = data.data.records[0].avatarUrl.search("jpg");
          var avatarUrl = data.data.records[0].avatarUrl
          if (avatarIndex > -1) {
            avatarUrl = avatarUrl.substring(0, avatarIndex+3);
          }
          if (avatarUrl.indexOf("https") <= -1) {
            avatarUrl = avatarUrl.replace('http', 'https');
          }
          this.setState({avatar: avatarUrl});

          var videoUrl = data.data.records[0].videoUrl;
          if (videoUrl.indexOf("https") <= -1) {
            videoUrl = videoUrl.replace('http', 'https');
          }
          this.setState({videoURL: videoUrl});

          this.props.data.usersSeen.push(data.data.records[0].username);

          var talentProb = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

          if (talentProb === 1) {
            this.setState({talentIndex: Math.floor(Math.random() * (20 - 1 + 1)) + 1});
          } else {
            this.setState({talentIndex: 1});
          }

          var distance = Math.floor(Math.random() * (this.props.data.maxDistance - 0 + 1)) + 0;

          this.setState({distance: distance});
          AlertIOS.alert('Welcome to Rhythm!', 'Browse through profiles and like the ones that grab your attention. If the other user likes your video, you\'ll get matched!');
          this.setState({loaded: true});
        })
        .done();
  }

  moveToNextUser() {
    if (this.checkArrayPosition()) {

      if (this.props.data.usersSeen.indexOf(this.state.records[this.state.index].username) > -1) {
        this.setState({index: this.state.index + 1}, function () {this.moveToNextUser(); return;});
      }

      console.log("INDEX!: " + this.state.index);
      console.log("COUNT: " + this.state.count);

      this.setState({loaded: false});
      var videoUrl = this.state.records[this.state.index].videoUrl;
      if (videoUrl.indexOf("https") <= -1) {
        videoUrl = videoUrl.replace('http', 'https');
      }
      this.setState({videoURL: videoUrl});
      this.setState({aboutMe: this.state.records[this.state.index].description});
      this.setState({username: this.state.records[this.state.index].username});

      var avatarIndex = this.state.records[this.state.index].avatarUrl.search("jpg");
      var avatarUrl = this.state.records[this.state.index].avatarUrl;
      if (avatarIndex > -1) {
        avatarUrl = avatarUrl.substring(0, avatarIndex+3);
      }
      if (avatarUrl.indexOf("https") <= -1) {
        avatarUrl = avatarUrl.replace('http', 'https');
      }

      console.log("FIRST: " + this.state.records[this.state.index].avatarUrl);

      console.log("AVATAR!: " + avatarUrl);
      this.setState({avatar: avatarUrl});

      var talentProb = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

      if (talentProb === 1) {
        this.setState({talentIndex: Math.floor(Math.random() * (20 - 1 + 1)) + 1});
      } else {
        this.setState({talentIndex: 1});
      }

      var distance = Math.floor(Math.random() * (this.props.data.maxDistance - 0 + 1)) + 0;

      this.setState({distance: distance});

      this.props.data.usersSeen.push(this.state.records[this.state.index].username);

      this.setState({index: this.state.index + 1});
      this.setState({loaded: true});

    } else {
      this.getNextPage();
    }
  }

  goToMessages() {
    if (!this.state.loaded) return;
    this.player.setNativeProps({muted: true});
    this.props.navigator.push({
            title: 'Matches',
            component: Matches,
            tintColor: '#5f3986',
            titleTextColor: '#5f3986',
            passProps: {data: this.props.data},
    });
  }

  goToProfile() {
    if (!this.state.loaded) return;
    this.player.setNativeProps({muted: true});
    this.props.navigator.push({
            title: 'Your Profile',
            component: MyProfile,
            tintColor: '#5f3986',
            titleTextColor: '#5f3986',
            passProps: {data: this.props.data},
    });
  }

  goToFilterSettings() {
    if (!this.state.loaded) return;
    this.player.setNativeProps({muted: true});
    this.props.navigator.push({
            title: 'Filter Settings',
            component: FilterSettings,
            tintColor: '#5f3986',
            titleTextColor: '#5f3986',
            passProps: {data: this.props.data},
    });
  }

  checkArrayPosition() {
    if (this.state.count <= this.state.index) return false; // send a request for the next page
    return true;
  }

  sortMatches(a, b) {
    if (a.date < b.date) {
      return -1;
    } else if (a.date > b.date) {
      return 1;
    }
    return 0;
  }

  likeUser() {
    if (!this.state.loaded) return;

    var RandomDecision = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    if (RandomDecision === 1) {

      var match = {
        username: this.state.username,
        lastMessage: 'You are now connected on Rhythm',
        avatar: this.state.avatar,
        date: new Date(),
        messages: [],
      }

      this.props.data.matches.unshift(match);

      Alert.alert('New match!', 'You\'ve just been matched with @' + this.state.username + '!', 
        [
          {text: 'Keep browsing', onPress: () => this.moveToNextUser()},
          {text: 'Go to matches page', onPress: () => this.advanceToMessages()}
        ]);
    } else {
      this.moveToNextUser();
    }

  }

  advanceToMessages() {
    this.player.setNativeProps({muted: true});
    this.props.navigator.push({
            title: 'Matches',
            component: Matches,
            tintColor: '#5f3986',
            titleTextColor: '#5f3986',
            passProps: {data: this.props.data},
    }, this.moveToNextUser());
  }

  disLikeUser() {
    if (!this.state.loaded) return;
    this.moveToNextUser();
  }

  checkLoadStatus() {
    if (this.state.records === undefined) return false;
    return true;
  }

  renderIf (condition, content) {
    if (condition) return content;
    else return null;
  }

	render() {
	    return (
          <View style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.card}>
                        {this.renderIf(this.state.avatar !== '', <Image
                              source={{uri: this.state.avatar}} style={styles.cardButton}/>)}
                        <Text style={styles.username}>@{this.state.username}
                        </Text>
                        <Text style={styles.distance}>{this.state.distance} mi away.
                        </Text>
                    </View>
                    <View style={styles.videoContent}>
                      {this.renderIf(this.state.videoURL !== '', <Video source={{uri: this.state.videoURL}}
                        ref={(ref) => {
                          this.player = ref
                        }}
                        repeat={true}
                        muted={false}
                        style={styles.videoContent} />)}
                    </View>
                    <View style={styles.talentContent}>
                          <Text style={styles.talentText}>{this.state.talents[this.state.talentIndex]}
                          </Text>
                    </View>
                    <View style={styles.aboutContent}>
                          <Text style={styles.aboutText}>{this.state.aboutMe}</Text>
                    </View>
                </ScrollView>
                <View style={styles.optionBar}>
                <Text style={styles.alignButtons}>
                    <TouchableOpacity onPress={this.disLikeUser.bind(this)} style={{width: 65,
        height: 65}}>
                      <Image
                          source={require('./img/dislike_button1.png')} style={styles.optionButton}/>
                    </TouchableOpacity>
                </Text>
                <Text style={styles.alignButtons}>
                  <TouchableOpacity onPress={this.likeUser.bind(this)} style={{width: 65,
        height: 65}}>
                      <Image
                          source={require('./img/like_button.png')} style={styles.optionButton}/>
                  </TouchableOpacity>
                </Text>
                </View>
                <View style={styles.toolbar}>
                <Text style={styles.alignButtons}>
                      <Image
                          source={require('./img/home_button_white.png')} style={styles.optionButton}/>
                </Text>
                <Text style={styles.alignButtons}>
                  <TouchableOpacity onPress={this.goToProfile.bind(this)} style={styles.optionButton}>
                      <Image
                          source={require('./img/profile_button_grey.png')} style={styles.optionButton}/>
                  </TouchableOpacity>
                </Text>
                <Text style={styles.alignButtons}>
                  <TouchableOpacity onPress={this.goToMessages.bind(this)} style={styles.optionButton}>
                      <Image
                          source={require('./img/message_button_grey.png')} style={styles.optionButton}/>
                  </TouchableOpacity>
                </Text>
                <Text style={styles.alignButtons}>
                  <TouchableOpacity onPress={this.goToFilterSettings.bind(this)} style={styles.optionButton}>
                      <Image
                          source={require('./img/filter_button_grey.png')} style={styles.optionButton}/>
                  </TouchableOpacity>
                </Text>
                </View>
          </View>
	    );
	}
}

module.exports = HomePage;