import React, {Component} from 'react';
import {TouchableOpacity, Alert, Text, View, TextInput, ScrollView, Dimensions, Linking, StatusBar, InputAccessoryView, Button, AppState, Image, Platform, BackHandler} from 'react-native';

import {SmartButton} from '../components/buttons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

var s = require('../styles/global');
var ls = require('../styles/moreStyles');

var ipadScreen = Dimensions.get('window').width >= 600 ? true : false;

// CONTENTS
//
// MoreScreen
// OptionButton

class MoreScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tips: false,
      online: true
    };

  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
      },
      headerTintColor: '#0090db',
    };
  };

  manualDataSync = () => {

  }



  componentDidMount(){

  }

  render() {
    const {navigate} = this.props.navigation;
    const { width, height } = Dimensions.get('window')

    const link1 = "https://atlanticlottery.typeform.com/to/Zl01nM";


    return (
      <View>
        <StatusBar
          barStyle = "dark-content"
          backgroundColor = "#ffffff"
          animated={true}
        />
        <ScrollView contentContainerStyle={[s.whitePage]} bounces={false} keyboardShouldPersistTaps='always'  keyboardDismissMode='on-drag'>
          <View style={ls.moreTitle}>
            <Text style={[s.bold, s.bigFont, s.blackFont, s.paddingBig, s.center]}>
              {"More"}
            </Text>
          </View>
          <View style={ls.linksList}>
            <OptionButton
              name={"Members Stats"}
              clickProp={() => this.props.navigation.navigate('stats')}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export {MoreScreen};



class OptionButton extends React.Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.clickProp} datakey={this.props.datakey} activeOpacity={0.7}>
        <View style={ls.linkButton}>
          <Text style={[s.blackFont, s.textFonts, s.regularFont, s.bigMarginRight]}>{this.props.name}</Text>
          <View style={ls.arrowIcon}>
            <Icon name={'chevron-right'} size={ipadScreen? 35 : 25} color={'#fbbc05'} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export {OptionButton};

