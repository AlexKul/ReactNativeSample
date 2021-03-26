import React, {Component} from 'react';
import {TouchableOpacity, Modal, Text, View, TextInput, Image, ScrollView, Dimensions, StatusBar, Alert, AppState, Platform, PermissionsAndroid, BackHandler} from 'react-native';

import {SmartButton} from '../components/buttons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import memberService from '../services/memberService';

var s = require('../styles/global');
var ls = require('../styles/memberStyles');

var ipadScreen = Dimensions.get('window').width > 600 ? true : false;

// CONTENTS
//
// MembersScreen
// MemberListingButton
// AddMembersModal

class MembersScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAddMember: false,
      members: [],
      loaded: false,
      disable: false,
    };

  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
        marginTop: 20,
        marginRight: 15,
        elevation: 0
      },
      headerRight: (
        <TouchableOpacity style={s.topEditMenu} onPress={navigation.getParam('addMember')} activeOpacity={0.7}>
          <Text style={[s.yellowFont, s.textFonts, s.topEditText]}>
            <Text style={[s.smallMarginRight, s.tinyMarginTop]}></Text>
            <Text style={[s.smallMarginLeft, s.regularFont]}>{"Add +"}</Text>
          </Text>
        </TouchableOpacity>
      ),
      gesturesEnabled: false,
    };
  };

  componentDidMount() {
    const {navigation} = this.props;
    this.props.navigation.setParams({ addMember: this.openAddMember});
    this.retrieveMembersFromDB();

    navigation.addListener ('didFocus', () => {
      this.setState({disable: false});
    });
  }

  retrieveMembersFromDB = () =>{
    this.setState({members: memberService.getAllMembers()});
  }

  openAddMember = () => {
    this.setState({showAddMember: true});
  }

  closeAddPlayer = () => {
    this.setState({showAddMember: false});
  }

  addMembersToState = (newMembers) =>{
    
    this.setState({members: this.state.members.concat(newMembers)})
  }

  handleClick = (e, id) => {
    this.setState({disable: true});
    let clickedPlayer = this.state.members.filter(item => item.id == id)[0];
    clickedPlayer.previousScreen = "members";
    this.props.navigation.push('memberDetails', clickedPlayer);
  }

  render() {
    const {navigate} = this.props.navigation;
    const { width, height } = Dimensions.get('window');
    let members = [];

    //show upcoming
    for (var i = 0; i < this.state.members.length; i++) {
      let id = this.state.members[i].id;
      members.push (
        <MemberListingButton key={id}
        datakey={id}
        name={this.state.members[i].name}
        clickProp={this.handleClick}
        disable={this.state.disable}/>
      )
    }

    return (
      <View>
        <StatusBar
          barStyle = "dark-content"
          backgroundColor = "#ffffff"
          animated={true}
        />
        {this.state.showAddMember ? <AddMembersModal navigation={this.props.navigation} oldPlayers={this.state.members} updateProp={this.addMembersToState} closeProp={this.closeAddPlayer}/> : null}
        <ScrollView contentContainerStyle={[s.whitePage]} bounces={false} keyboardShouldPersistTaps='always'  keyboardDismissMode='on-drag'>
          <Text style={[s.mainTitle, s.blackFont, s.paddingBig]}>
            {"Members"}
          </Text>

          <View style={ls.membersList}>
            {members}
          </View>
            <View style={ls.addPlayersArea}>
              <View style={s.paddingBig}>
                <SmartButton buttonText={"Add Member"} color={'yellow'} nextArrow={false} clickFunction={this.openAddMember} canProceed={() => true} />
              </View>
            </View>
          

        </ScrollView>
      </View>
    );
  }
}

export {MembersScreen};




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




class AddMembersModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newMembers: [],
      numFields: 1
    };

    this.insertNewMembers = this.insertNewMembers.bind(this);
  }

  componentDidMount() {
    const {navigation} = this.props;
  }

  insertNewMembers = () => {
    let namesToInsert = [];
    this.state.newMembers.forEach((member) => {
      namesToInsert.push( {name: member.name.trim(), email: member.email !== null ? member.email.trim().toLowerCase() : null, id: this.generateNewId(24)});
    });

    if(namesToInsert.length > 0){
      this.props.updateProp(namesToInsert);
      this.props.closeProp();
      console.log('adding new members!');
    }
  }

  generateNewId = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  updateMemberName = (memberName, fieldIndex) => {
    let {numFields, newMembers} = this.state;

    if (newMembers[fieldIndex]) {
      // update member name
      newMembers[fieldIndex].name = memberName;
    } else {
      // make new member object
      newMembers.push({name: memberName, email: null});
    }

    this.setState({
      newMembers: newMembers,
      numFields: newMembers.length + 1
    });
  }

  updateMemberEmail = (memberEmail, fieldIndex) => {
    let {numFields, newMembers} = this.state;

    if (newMembers[fieldIndex]) {
      // update player name
      newMembers[fieldIndex].email = memberEmail;
    } else {
      // make new player object
      newMembers.push({name: null, email: memberEmail});
    }

    this.setState({
      newMembers: newMembers,
      numFields: newMembers.length + 1
    });
  }

  hasAtLeastOneMember = () => {
    let nMembers = 0;
    this.state.newMembers.forEach((member) => {
      if (member && member.name) {
        nMembers += 1;
      }
    });
    return nMembers > 0;
  }

  render() {
    const {navigate} = this.props.navigation;

    let playerInputs = [...Array(this.state.numFields)].map((_, key) => {
      return (
        <View style={s.modalInputBox} key={key}>
          <TextInput
            name={"player-input-" + key}
            style={[s.blackFont, s.textFonts, s.regularFont, ls.inputBox]}
            placeholder={"Name"}
            onChangeText={(n) => this.updateMemberName(n, key)}
            value={this.state.newMembers[key] ? this.state.newMembers[key].name : null}
            maxLength={25}
          />
          <TextInput
            name={"player-input-" + key}
            style={[s.blackFont, s.textFonts, s.regularFont, ls.inputBox]}
            placeholder={"Email"}
            onChangeText={(n) => this.updateMemberEmail(n, key)}
            value={this.state.newMembers[key] ? this.state.newMembers[key].email : null}
            maxLength={50}
            autoCapitalize="none"
            keyboardType={'email-address'}

          />
        </View>
      );
    })

    return (
      <Modal animationType="slide"
        transparent={false}
        visible={this.props.showAddMember}>
        <ScrollView  style={[s.paddingBig, s.bigMarginBottom, s.bigMarginTop]} keyboardShouldPersistTaps='always'  keyboardDismissMode='on-drag'>
            <View style={[s.modalInside, s.modalCenterContent, {paddingBottom: 60}]}>
              <TouchableOpacity style={[s.moveToFront, s.paddingBig]} onPress={this.props.closeProp} activeOpacity={0.7}>
                <View style={[s.displayInlineLeft]}>
                  <Text style={[s.yellowFont, s.regularFont, s.textFonts]}>{"Close"}</Text>
                </View>
              </TouchableOpacity>
              <Text style={s.modalTitle}>{"Add new members"}</Text>
              <Text style={s.modalContent}>{"Type in the member's information"}</Text>
              {playerInputs}
              <View style={s.paddingBig}>
                <SmartButton buttonText={"Add Members"} color={'yellow'} nextArrow={false} clickFunction={this.insertNewMembers} canProceed={this.hasAtLeastOneMember} />
              </View>
            </View>

        </ScrollView>

      </Modal>
    );
  }
}

export {AddMembersModal};
