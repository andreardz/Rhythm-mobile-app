//IMPORTANT!!! DOWNLOAD THIS NODE MODULE 
//npm install https://github.com/g6ling/react-native-dropdown --save
//THE OTHER ONE DOESNT WORK

'use strict';

import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

var talentMsg = "Filter by talent";

var genreMsg = "Filter by genre";

const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

var videoSize = Dimensions.get('window').width; //full width

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  showtimeContainer: {
   borderTopColor: '#ededed', 
    borderTopWidth:1
  },
  showtime: {
   padding:20, 
    textAlign: 'center'
  },
  button: {
   marginTop:25, 
    marginBottom:25
  },
  closeButtonContainer: {
   flexDirection: 'row', 
    justifyContent: 'flex-end', 
    borderTopColor: '#e2e2e2', 
    borderTopWidth: 1, 
    borderBottomColor: '#e2e2e2', 
    borderBottomWidth:1
  },
  closeButton: {
   paddingRight:10, 
    paddingTop:10, 
    paddingBottom:10
  },
  buttonText: {
   textAlign: 'center'
  },
  closeButtonText: {
   color: '#027afe'
  },
    mainContainer:{
        paddingTop:70,
        height: Dimensions.get('window').width - 50,
        flex:1            
    },
      box: {
      height: 200,
      width: Dimensions.get('window').width,
      borderBottomWidth: 0.3,
      flexDirection: 'row',
      paddingLeft: 7,
      paddingTop: 7,
    },
    alignSelectors:{
        paddingTop: 2,
        paddingLeft: 10,
        flexDirection: 'column',
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

class FilterSettings extends Component {

    constructor(props) {
    super(props);

    this.state = {
      canada: ''
    };
  }

  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['SELECT2']);
    updatePosition(this.refs['SELECT3']);

    updatePosition(this.refs['SELECT4']);
    updatePosition(this.refs['SELECT5']);
    updatePosition(this.refs['SELECT6']);

    updatePosition(this.refs['SELECT7']);

    updatePosition(this.refs['OPTIONLIST']);
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }


  _talent1(atalent1) {

    this.setState({
      ...this.state,
      talent1: atalent1
    });
  }

    _talent2(atalent2) {

    this.setState({
      ...this.state,
      talent2: atalent2
    });
  }

    _talent3(atalent3) {

    this.setState({
      ...this.state,
      talent1: atalent3
    });
  }

    _genre1(agenre1) {

    this.setState({
      ...this.state,
      genre1: agenre1
    });
  }

    _genre2(agenre2) {

    this.setState({
      ...this.state,
      genre2: agenre2
    });
  }

      _genre3(agenre2) {

    this.setState({
      ...this.state,
      genre2: agenre2
    });
  }

    _canada(province) {

    this.setState({
      ...this.state,
      canada: province
    });
  }

    render() {

        return (
    <View style={styles.mainContainer}>
        <View style={styles.box}>
                <Text> Talent </Text>
        <View style={styles.alignSelectors}>       
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue={talentMsg}
            onSelect={this._talent1.bind(this)}>
            <Option>Accordion</Option>
            <Option>Arranging</Option>
            <Option>Banjo</Option>
            <Option>Bass</Option>
            <Option>Bass (Acoustic)</Option>
            <Option>Bassoon</Option>
            <Option>Cello</Option>
            <Option>Clarinet</Option>
            <Option>Composition/Songwriting</Option>
            <Option>Conductor</Option>
            <Option>Drums</Option>
            <Option>Flute</Option>
            <Option>French Horn</Option>
            <Option>Guitar</Option>
            <Option>Hand Percussion</Option>
            <Option>Harp</Option>
            <Option>Knobs and Dials</Option>
            <Option>Mandolin</Option>
            <Option>Marimba</Option>
            <Option>Oboe</Option>
            <Option>Penny Whistle</Option>
            <Option>Piano/Keyboards</Option>
            <Option>Saxophone</Option>
            <Option>Synthesizers</Option>
            <Option>Trombone</Option>
            <Option>Trumpet</Option>
            <Option>Turntables</Option>
            <Option>Ukulele</Option>
            <Option>Viola</Option>
            <Option>Violin</Option>
            <Option>Vocals</Option>
            <Option>Vocals (Rap/Hip-Hop)</Option>
          </Select>
          <OptionList ref="OPTIONLIST"/>
      </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT2"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue={talentMsg}
            onSelect={this._talent2.bind(this)}>
            <Option>Accordion</Option>
            <Option>Arranging</Option>
            <Option>Banjo</Option>
            <Option>Bass</Option>
            <Option>Bass (Acoustic)</Option>
            <Option>Bassoon</Option>
            <Option>Cello</Option>
            <Option>Clarinet</Option>
            <Option>Composition/Songwriting</Option>
            <Option>Conductor</Option>
            <Option>Drums</Option>
            <Option>Flute</Option>
            <Option>French Horn</Option>
            <Option>Guitar</Option>
            <Option>Hand Percussion</Option>
            <Option>Harp</Option>
            <Option>Knobs and Dials</Option>
            <Option>Mandolin</Option>
            <Option>Marimba</Option>
            <Option>Oboe</Option>
            <Option>Penny Whistle</Option>
            <Option>Piano/Keyboards</Option>
            <Option>Saxophone</Option>
            <Option>Synthesizers</Option>
            <Option>Trombone</Option>
            <Option>Trumpet</Option>
            <Option>Turntables</Option>
            <Option>Ukulele</Option>
            <Option>Viola</Option>
            <Option>Violin</Option>
            <Option>Vocals</Option>
            <Option>Vocals (Rap/Hip-Hop)</Option>
          </Select>
          <OptionList ref="OPTIONLIST"/>
      </View>


              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT3"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue={talentMsg}
            onSelect={this._talent3.bind(this)}>
            <Option>Accordion</Option>
            <Option>Arranging</Option>
            <Option>Banjo</Option>
            <Option>Bass</Option>
            <Option>Bass (Acoustic)</Option>
            <Option>Bassoon</Option>
            <Option>Cello</Option>
            <Option>Clarinet</Option>
            <Option>Composition/Songwriting</Option>
            <Option>Conductor</Option>
            <Option>Drums</Option>
            <Option>Flute</Option>
            <Option>French Horn</Option>
            <Option>Guitar</Option>
            <Option>Hand Percussion</Option>
            <Option>Harp</Option>
            <Option>Knobs and Dials</Option>
            <Option>Mandolin</Option>
            <Option>Marimba</Option>
            <Option>Oboe</Option>
            <Option>Penny Whistle</Option>
            <Option>Piano/Keyboards</Option>
            <Option>Saxophone</Option>
            <Option>Synthesizers</Option>
            <Option>Trombone</Option>
            <Option>Trumpet</Option>
            <Option>Turntables</Option>
            <Option>Ukulele</Option>
            <Option>Viola</Option>
            <Option>Violin</Option>
            <Option>Vocals</Option>
            <Option>Vocals (Rap/Hip-Hop)</Option>
          </Select>
          <OptionList ref="OPTIONLIST"/>
      </View>

       </View>
    </View>

                <View style={styles.box}>
                <Text> Genre </Text>
                <View style={styles.alignSelectors}>       
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT4"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue={genreMsg}
            onSelect={this._genre1.bind(this)}>
            <Option>A Capella</Option>
            <Option>Acid</Option>
            <Option>Alternative</Option>
            <Option>Alternative Rock</Option>
            <Option>Ambient</Option>
            <Option>Bluegrass</Option>
            <Option>Blues</Option>
            <Option>Cabaret</Option>
            <Option>Classic Rock</Option>
            <Option>Classical</Option>
            <Option>Country</Option>
            <Option>Dance</Option>
            <Option>Darkwave</Option>
            <Option>Death Metal</Option>
            <Option>Disco</Option>
            <Option>Dreampop</Option>
            <Option>Electronic</Option>
            <Option>Folk</Option>
            <Option>Funk</Option>
            <Option>Gospel</Option>
            <Option>Gothic</Option>
            <Option>Grunge</Option>
            <Option>Hard Rock</Option>
            <Option>Hip-Hop</Option>
            <Option>Holiday</Option>
            <Option>House</Option>
            <Option>Industrial</Option>
            <Option>Instrumental</Option>
            <Option>Jazz</Option>
            <Option>Latin</Option>
            <Option>Metal</Option>
            <Option>New Age</Option>
            <Option>New Wave</Option>
            <Option>Noise</Option>
            <Option>Oldies</Option>
            <Option>Opera</Option>
            <Option>Other</Option>
            <Option>Pop</Option>
            <Option>Progressive Rock</Option>
            <Option>Psychedelic</Option>
            <Option>Punk</Option>
            <Option>R&B</Option>
            <Option>Rap</Option>
            <Option>Rave</Option>
            <Option>Reggae</Option>
            <Option>Reggae</Option>
            <Option>Rock</Option>
            <Option>Rock & Roll</Option>
            <Option>Ska</Option>
            <Option>Soul</Option>
            <Option>Southern Rock</Option>
            <Option>Techno</Option>
            <Option>Trance</Option>
            <Option>Trip-Hop</Option>
            <Option>Vocal</Option>
            <Option>World Music</Option>
          </Select>
          <OptionList ref="OPTIONLIST"/>
      </View>


            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT5"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue={genreMsg}
            onSelect={this._genre2.bind(this)}>
            <Option>A Capella</Option>
            <Option>Acid</Option>
            <Option>Alternative</Option>
            <Option>Alternative Rock</Option>
            <Option>Ambient</Option>
            <Option>Bluegrass</Option>
            <Option>Blues</Option>
            <Option>Cabaret</Option>
            <Option>Classic Rock</Option>
            <Option>Classical</Option>
            <Option>Country</Option>
            <Option>Dance</Option>
            <Option>Darkwave</Option>
            <Option>Death Metal</Option>
            <Option>Disco</Option>
            <Option>Dreampop</Option>
            <Option>Electronic</Option>
            <Option>Folk</Option>
            <Option>Funk</Option>
            <Option>Gospel</Option>
            <Option>Gothic</Option>
            <Option>Grunge</Option>
            <Option>Hard Rock</Option>
            <Option>Hip-Hop</Option>
            <Option>Holiday</Option>
            <Option>House</Option>
            <Option>Industrial</Option>
            <Option>Instrumental</Option>
            <Option>Jazz</Option>
            <Option>Latin</Option>
            <Option>Metal</Option>
            <Option>New Age</Option>
            <Option>New Wave</Option>
            <Option>Noise</Option>
            <Option>Oldies</Option>
            <Option>Opera</Option>
            <Option>Other</Option>
            <Option>Pop</Option>
            <Option>Progressive Rock</Option>
            <Option>Psychedelic</Option>
            <Option>Punk</Option>
            <Option>R&B</Option>
            <Option>Rap</Option>
            <Option>Rave</Option>
            <Option>Reggae</Option>
            <Option>Reggae</Option>
            <Option>Rock</Option>
            <Option>Rock & Roll</Option>
            <Option>Ska</Option>
            <Option>Soul</Option>
            <Option>Southern Rock</Option>
            <Option>Techno</Option>
            <Option>Trance</Option>
            <Option>Trip-Hop</Option>
            <Option>Vocal</Option>
            <Option>World Music</Option>
          </Select>
          <OptionList ref="OPTIONLIST"/>
      </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT6"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue={genreMsg}
            onSelect={this._genre3.bind(this)}>
            <Option>A Capella</Option>
            <Option>Acid</Option>
            <Option>Alternative</Option>
            <Option>Alternative Rock</Option>
            <Option>Ambient</Option>
            <Option>Bluegrass</Option>
            <Option>Blues</Option>
            <Option>Cabaret</Option>
            <Option>Classic Rock</Option>
            <Option>Classical</Option>
            <Option>Country</Option>
            <Option>Dance</Option>
            <Option>Darkwave</Option>
            <Option>Death Metal</Option>
            <Option>Disco</Option>
            <Option>Dreampop</Option>
            <Option>Electronic</Option>
            <Option>Folk</Option>
            <Option>Funk</Option>
            <Option>Gospel</Option>
            <Option>Gothic</Option>
            <Option>Grunge</Option>
            <Option>Hard Rock</Option>
            <Option>Hip-Hop</Option>
            <Option>Holiday</Option>
            <Option>House</Option>
            <Option>Industrial</Option>
            <Option>Instrumental</Option>
            <Option>Jazz</Option>
            <Option>Latin</Option>
            <Option>Metal</Option>
            <Option>New Age</Option>
            <Option>New Wave</Option>
            <Option>Noise</Option>
            <Option>Oldies</Option>
            <Option>Opera</Option>
            <Option>Other</Option>
            <Option>Pop</Option>
            <Option>Progressive Rock</Option>
            <Option>Psychedelic</Option>
            <Option>Punk</Option>
            <Option>R&B</Option>
            <Option>Rap</Option>
            <Option>Rave</Option>
            <Option>Reggae</Option>
            <Option>Reggae</Option>
            <Option>Rock</Option>
            <Option>Rock & Roll</Option>
            <Option>Ska</Option>
            <Option>Soul</Option>
            <Option>Southern Rock</Option>
            <Option>Techno</Option>
            <Option>Trance</Option>
            <Option>Trip-Hop</Option>
            <Option>Vocal</Option>
            <Option>World Music</Option>
          </Select>
          <OptionList ref="OPTIONLIST"/>
      </View>
      </View>        
                </View>

                <View style={styles.box}>
                <Text> Distance </Text>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 70, paddingBottom: 110}}>
          <Select
            width={250}
            ref="SELECT7"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Filter by distance"
            onSelect={this._canada.bind(this)}>
            <Option>within 5 mi</Option>
            <Option>within 10 mi</Option>
            <Option>within 20 mi</Option>
            <Option>within 50 mi</Option>
            <Option>over 100 mi</Option>
          </Select>
          <OptionList ref="OPTIONLIST"/>
      </View>


                </View>

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
                          source={require('./img/message_button_grey.png')} style={styles.optionButton}
                      />
                </Text>
                <Text style={styles.alignButtons}>
                      <Image
                          source={require('./img/filter_button_white.png')} style={styles.optionButton}
                      />
                </Text>
                </View>
          </View>
        );
    }
}

AppRegistry.registerComponent('LocationDropDown', () => LocationDropDown);

module.exports = FilterSettings;