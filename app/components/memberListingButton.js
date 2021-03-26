import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
var s = require('../styles/global');
var ls = require('../styles/memberStyles');

class MemberListingButton extends React.Component {
    render() {
      return (
        <TouchableOpacity onPress={(e) => this.props.clickProp(e, this.props.datakey)} datakey={this.props.datakey} activeOpacity={0.7} disabled={this.props.disable}>
          <View style={[ls.memberButton]} >
            <Text style={[s.blackFont, s.textFonts, s.regularFont]}>{this.props.name}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  
export {MemberListingButton};
  