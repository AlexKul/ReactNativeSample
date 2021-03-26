'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions,
  Platform
} = React;


var ipadScreen = Dimensions.get('window').width >= 600 ? true : false;
var smallScreen = Dimensions.get('window').width <= 350 ? true : false;

module.exports = StyleSheet.create({
  // page layouts
  page: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whitePage: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  backgroundImage: {
   flex: 1,
   resizeMode: 'stretch',
   height: ipadScreen? 311 : 300,
  },
  linearGradient: {
    flex: 1,
  },
  devideWidth: {
    width: Dimensions.get('window').width - 6.8
  },

  italic: {
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: 'bold',
  },
  whiteFont: {
    color: '#fff'
  },
  yellowFont: {
    color: '#fbbc05'
  },
  redFont: {
    color: 'red'
  },
  blackFont: {
    color: '#4c4c4c'
  },
  grayFont: {
    color: '#b3b3b3'
  },
  transFont:{
    color: '#4c4c4c52'
  },
  bigFont: {
    paddingTop:ipadScreen? 15 : 0,
    fontSize: ipadScreen? 38 : 22
  },
  hugeFont:{
    fontSize: 40
  },
  textFonts: {
    fontSize: ipadScreen? 28 : smallScreen? 16 : 18
  },
  textSmallFonts: {
    fontSize: ipadScreen? 28 : smallScreen? 14 : 16
  },
  textFooterFonts: {
    fontSize: ipadScreen? 22 : smallScreen? 12 : 14
  },
  textExtraSmallFonts: {
    fontSize: ipadScreen? 18 : 12
  },
  smallFontForDates: {
    fontSize: ipadScreen? 18 : 14
  },
  superScriptFont: {
    lineHeight: ipadScreen? 20 : 12,
    fontSize: ipadScreen? 16 : 10
  },
  biggerLineHeight: {
    lineHeight: ipadScreen? 40 : 20,
  },
  // alignment, padding & margins
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  centerItem:{
    alignSelf: 'center',
  },
  footerTabPadding: {
    paddingBottom:  ipadScreen ? -10 : 5,
    paddingLeft: ipadScreen? 22 : 0
  },
  paddingBig: {
    padding: ipadScreen? 40 : smallScreen ? 10 : 20,
    paddingTop: ipadScreen? 30 : smallScreen ? 10 : 15,
    paddingBottom: ipadScreen? 30 : smallScreen ? 10 : 15,
  },
  paddingSmall: {
    padding: 7,
    paddingTop: 5,
    paddingBottom: 5,
  },
  marginBig: {
    margin: ipadScreen? 50: 25
  },
  tinyMarginTop: {
    marginTop: 5
  },
  smallMarginTop: {
    marginTop: ipadScreen? 16 : 10
  },
  bigMarginTop: {
    marginTop: smallScreen ? 25 : 35
  },
  tinyMarginBottom: {
    marginBottom: ipadScreen? 12 : 8
  },
  smallMarginBottom: {
    marginBottom: 15
  },
  bigMarginBottom: {
    marginBottom: smallScreen ? 20 : 30
  },
  hugeMarginBottom: {
    marginBottom:  ipadScreen? 120 : 60
  },
  smallMarginLeft: {
    marginLeft: ipadScreen? 20 : 10
  },
  tinyMarginLeft: {
    marginLeft: ipadScreen? 6 : 3
  },
  bigMarginLeft: {
    marginLeft: ipadScreen? 40 : 20
  },
  smallMarginRight: {
    marginRight: ipadScreen? 30 : 10
  },
  mediumMarginRight: {
    marginRight: ipadScreen? 30 : 15
  },
  bigMarginRight: {
    marginRight: ipadScreen? 100 : 50
  },
  negativeMarginLeft:{
    marginLeft: ipadScreen? -6 : -3,
  },
  negativeMarginTop:{
    marginTop: ipadScreen? -6 : -3,
  },
  moveToFront: {
    zIndex: 22,
  },
  displayGames: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  displayInlineCenter: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    justifyContent: 'center',
  },
  displayInlineLeft: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection:'row',
  },

  // buttons
  btn: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 40,
    width: ipadScreen? 300 : 200,
    marginTop: 10,
    paddingTop: ipadScreen? 18 : 12,
    paddingBottom: ipadScreen? 18 : 12
  },
  smallBtn: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 40,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    width: ipadScreen? 200 : 130,
    marginTop: 10,
    paddingTop: ipadScreen? 10 : 6,
    paddingBottom: ipadScreen? 10 : 6
  },
  dynamicBtn: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 40,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    paddingTop: ipadScreen? 18 : 12,
    paddingBottom: ipadScreen? 18 : 12,
    paddingLeft: ipadScreen? 20 : 20,
    paddingRight: ipadScreen? 20 : 20,
  },
  btnWhite: {
    backgroundColor: 'white',
    borderColor: 'white',
  },

  btnYellow: {
    backgroundColor: '#fbbc05',
    borderColor: '#fbbc05',
  },

  btnOpac: {
    opacity: 0.4
  },

  btnInverse: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    shadowOpacity: 0.1,
  },

  bigButton: {
    margin: 4,
    width: ipadScreen? 660 : smallScreen? 300:  Dimensions.get('window').width - Dimensions.get('window').width  * 0.12,
    height: ipadScreen? 325 : smallScreen? 170: 180,
  },
  modalInputBox:{
    padding: 10
  },
  modalTitle:{
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 20
  },
  modalContent:{
    paddingLeft: 20
  },
  scoreArea:{
    backgroundColor: '#fafafa',
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 20,
    margin: 20,
    height: ipadScreen? 180 : 150,
    justifyContent: 'center',
  },
  
});
