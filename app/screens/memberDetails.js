import React, {Component} from 'react';
import {TouchableOpacity, Text, View, TextInput, Image, ScrollView, ImageBackground, Alert,
 Keyboard, KeyboardAvoidingView, Dimensions, AppState, StatusBar, InputAccessoryView, Button, Modal, Platform, BackHandler} from 'react-native';

import {SmartButton} from '../components/buttons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';


var s = require('../styles/global');
var ls = require('../styles/memberStyles');

var ipadScreen = Dimensions.get('window').width > 600 ? true : false;

// CONTENTS
//
// MemberDetailsScreen


class MemberDetailsScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      score: null,
      color: 'black',
    };

  }

  static navigationOptions = ({ navigation }) => {


    return {
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
        marginTop: 20,
        marginLeft: 10,
      },
      headerTintColor: '#fbbc05',
    };
  };

  componentDidMount() {
    const {navigation} = this.props;
    this.setupPlayer();
  }

  setupPlayer = () => {
    let clickedMember = this.props.navigation.state.params;
    let color = this.setColorAccordingToScore(clickedMember['score']);
    this.setState({name: clickedMember['name'], email: clickedMember['email'], score: clickedMember['score'], color: color});
  }

  setColorAccordingToScore = (score) =>{
    if(score <= 60){
      return s.redFont;
    }
    else if(score > 60 && score <= 80 || score == null){
      return  s.grayFont;
    }
    else{
      return s.yellowFont;
    }
  }

  goBack = () => {
    this.props.navigation.navigate(this.props.navigation.state.params.previousScreen);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <StatusBar
          barStyle = "light-content"
          animated={true}
        />
          <View style={[s.paddingBig, s.bigMarginTop]}>
            <Text style={[s.bigFont, s.blackFont, s.bold, s.center, s.tinyMarginBottom]}>{this.state.name}</Text>
            <Text style={[s.blackFont, s.center, s.tinyMarginBottom]}>{this.state.email}</Text>
            <View style={[s.scoreArea]}>
    <Text style={[s.hugeFont, s.bold, s.center, s.marginTop, this.state.color]}>{this.state.score != null ? `${this.state.score}%` : '--'}</Text>
              <Text style={[s.bigFont, s.blackFont, s.center, s.tinyMarginBottom]}>{this.state.score != null ? "Current Score": "Score is not avaiable"}</Text>
            </View> 
          </View> 
      </View>
    );
  }
}

export {MemberDetailsScreen};
