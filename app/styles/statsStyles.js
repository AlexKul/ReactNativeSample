'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions,
  NativeModules,
  Platform
} = React;

var smallScreen = Dimensions.get('window').width <= 350 ? true : false;
var ipadScreen = Dimensions.get('window').width >= 600 ? true : false;

module.exports = StyleSheet.create({
  mainStatsArea:{
    backgroundColor: '#fafafa',
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 20,
    margin: 12,
    width: Dimensions.get('window').width / 2.2 - 20,
    height: ipadScreen? 160 : 120,
    justifyContent: 'center',
  },
  mainStatChartValue:{
    fontSize: ipadScreen? 35 : 27,
  },
  mainStatValue:{
    fontSize: ipadScreen? 45 : 40,
  },
  mainStatDesc:{
    fontSize: ipadScreen? 20 : 14,
  },
});