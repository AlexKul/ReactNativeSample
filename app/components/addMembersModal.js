
import React from 'react';
import {TouchableOpacity, Modal, Text, View, TextInput, ScrollView} from 'react-native';
import {SmartButton} from '../components/smartButton';

var s = require('../styles/global');
var ls = require('../styles/memberStyles');


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
        // update member name
        newMembers[fieldIndex].email = memberEmail;
      } else {
        // make new member object
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
  
      let memberInputs = [...Array(this.state.numFields)].map((_, key) => {
        return (
          <View style={s.modalInputBox} key={key}>
            <TextInput
              name={"member-input-" + key}
              style={[s.blackFont, s.textFonts, s.regularFont, ls.inputBox]}
              placeholder={"Name"}
              onChangeText={(n) => this.updateMemberName(n, key)}
              value={this.state.newMembers[key] ? this.state.newMembers[key].name : null}
              maxLength={25}
            />
            <TextInput
              name={"member-input-" + key}
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
          visible={this.props.showAddMemberModal}>
          <ScrollView  style={[s.paddingBig, s.bigMarginBottom, s.bigMarginTop]} keyboardShouldPersistTaps='always'  keyboardDismissMode='on-drag'>
              <View style={[s.modalInside, s.modalCenterContent, {paddingBottom: 60}]}>
                <TouchableOpacity style={[s.moveToFront, s.paddingBig]} onPress={this.props.closeProp} activeOpacity={0.7}>
                  <View style={[s.displayInlineLeft]}>
                    <Text style={[s.yellowFont, s.regularFont, s.textFonts]}>{"Close"}</Text>
                  </View>
                </TouchableOpacity>
                <Text style={s.modalTitle}>{"Add new members"}</Text>
                <Text style={s.modalContent}>{"Type in the member's information"}</Text>
                {memberInputs}
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
  