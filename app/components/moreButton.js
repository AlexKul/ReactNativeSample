import React from 'react';
import {TouchableOpacity, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

var s = require('../styles/global');
var ls = require('../styles/moreStyles');
var ipadScreen = Dimensions.get('window').width >= 600 ? true : false;

class MoreButton extends React.Component {
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
  
  export {MoreButton};
  