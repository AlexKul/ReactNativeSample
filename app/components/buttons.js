import React, {Component} from 'react';

import {TouchableOpacity, Alert, Platform, Button, StyleSheet, Text, View, Image} from 'react-native';


var s = require('../styles/global');


class SmartButton extends React.Component {

  constructor(props) {
    super(props);

    this.canProceed = this.canProceed.bind(this);
  }

  canProceed() {
    return !this.props.canProceed || this.props.canProceed();
  }

  render() {
    let canProceed = this.canProceed();

    let buttonStyle = s.btn;
    if (this.props.size  && this.props.size == 'small') {
      buttonStyle = s.smallBtn;
    }
    else if(this.props.size  && this.props.size == 'dynamic'){
      buttonStyle = s.dynamicBtn;
    }

    let inverseStyle = this.props.inverse ? s.btnInverse : null;

    let colorStyle =  this.props.color == 'yellow' ? s.btnYellow : s.btnWhite;
    let textColor  = (this.props.color == 'yellow' && !inverseStyle) || (this.props.color == 'white' && inverseStyle) ? "#fff" : "#fbbc05";
    let textFont   = (this.props.color == 'yellow' && !inverseStyle) || (this.props.color == 'white' && inverseStyle) ? s.whiteFont : s.yellowFont;

    let textColorStyle;
    let arrowColor;

    if (this.props.color == 'yellow') {
      colorStyle = canProceed ? colorStyle : [colorStyle, s.btnOpac];
      textColorStyle = canProceed ? textFont : s.whiteFont;
      arrowColor = canProceed ? textColor : "#fff";
    } else {
      colorStyle = canProceed ? colorStyle : [colorStyle, s.btnOpac];
      textColorStyle = textFont;
      arrowColor = textColor;
    }

    if (this.props.colorOverride) {
      colorStyle = { backgroundColor: this.props.colorOverride, borderColor: this.props.colorOverride,}
    }

    return (
      <TouchableOpacity disabled={!canProceed} onPress={this.props.clickFunction} style={[buttonStyle, colorStyle, inverseStyle]} activeOpacity={0.7}>
        <View>
          <Text style={[s.center, s.bold, s.textFonts, textColorStyle]}>
            {this.props.buttonText}
          </Text>
        </View>
        { this.props.nextArrow ? (
          <View>
            <Text>
              <Icon name="arrow-right" size={30} color={arrowColor}/>
            </Text>
          </View>
        ) : null }
      </TouchableOpacity>
    )
  }
}

export {SmartButton};