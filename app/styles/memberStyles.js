'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions
} = React;

var smallScreen = Dimensions.get('window').width <= 350 ? true : false;
var ipadScreen = Dimensions.get('window').width >= 600 ? true : false;

module.exports = StyleSheet.create({
  membersList:{
    paddingTop: ipadScreen? 40 : 20,
  },
  memberButton: {
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    height: ipadScreen ? 100 : Dimensions.get('window').height/15,
    width: ipadScreen ? Dimensions.get('window').width - 60 : smallScreen ? 300 : Dimensions.get('window').width - Dimensions.get('window').width  * 0.12,
    justifyContent: 'center',
    margin: 5,
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  arrowIcon: {
    position: 'absolute',
    right: 0,
  },
  loginBg: {
    paddingTop: 200,
    padding: 20,
    paddingBottom: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    width: 375,
    position: 'absolute',
    zIndex: 19,
  },
  backgroundImage: {
    padding: ipadScreen? 180 : 60,
    width: Dimensions.get('window').width,
    height: ipadScreen? 800 : 500,
    paddingTop: 0,
    resizeMode: 'stretch',
  },
  gradientBackground: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  bgBottomSlant: {
    padding: ipadScreen? Dimensions.get('window').width /2 +5 : 220,
    paddingBottom: 200,
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    marginLeft: ipadScreen? -3 : -5,
    flex: 1,
  },
  //edit modal styles
  linkButton:{
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    height: ipadScreen ? 100 : 50,
    width: ipadScreen ? Dimensions.get('window').width - 120 : smallScreen ? 270 : Dimensions.get('window').width - Dimensions.get('window').width  * 0.2,
    justifyContent: 'center',
    margin: 2,
    paddingLeft: 10,
  },
  deleteArea:{
    paddingTop: ipadScreen ? 30 : 15,
  },
  addmemberNameInput: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9"
  },
  addmemberEmailInput: {
    paddingTop: 20
  },
  languageSelectEN: {
    position: 'absolute',
    right: ipadScreen ? 70 : 35,
  },
  languageSelectFR: {
    position: 'absolute',
    right: -10,
  },
  editButtonAlign: {
    padding: 10,
    paddingRight: 18
  },
  memberNameSection:{
    paddingBottom: 30,
    paddingTop: 30,
  },
  memberNameSectionLongName:{
    marginTop: -15,
  },
  languageLabelMargin:{
    marginTop: ipadScreen ? 10 : 5
  },


  addmembersArea:{
    height: ipadScreen? 400 : smallScreen ? 180 : 300,
    paddingTop: ipadScreen? 80 : 50,
    marginTop: 100,
    alignItems: 'center',

  },
  inputBox:{
    padding: 10,
  }
});