'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions
} = React;


var smallScreen = Dimensions.get('window').width <= 350 ? true : false;
var ipadScreen = Dimensions.get('window').width >= 600 ? true : false;

module.exports = StyleSheet.create({
  linkButton:{
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    height: ipadScreen ? 100 : Dimensions.get('window').height/14,
    width: ipadScreen ? Dimensions.get('window').width - 60 : smallScreen ? 300 : Dimensions.get('window').width - Dimensions.get('window').width  * 0.12,
    justifyContent: 'center',
    margin: 2,
    paddingLeft: 10,
  },
  arrowIcon: {
    position: 'absolute',
    right: 0,
  },
  moreTitle:{
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    paddingBottom: 15,
    width: ipadScreen ? Dimensions.get('window').width - 60 : smallScreen ? 300 : Dimensions.get('window').width - Dimensions.get('window').width  * 0.12,
    alignSelf: 'center',
  },
});