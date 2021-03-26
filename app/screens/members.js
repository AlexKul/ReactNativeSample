import React from 'react';
import {TouchableOpacity, Text, View, ScrollView, Dimensions, StatusBar} from 'react-native';

import memberService from '../services/memberService';
import {SmartButton} from '../components/smartButton';
import {MemberListingButton} from '../components/memberListingButton';
import {AddMembersModal} from '../components/addMembersModal'; 
var s = require('../styles/global');
var ls = require('../styles/memberStyles');

class MembersScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAddMemberModal: false,
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
    this.setState({showAddMemberModal: true});
  }

  closeAddMember = () => {
    this.setState({showAddMemberModal: false});
  }

  addMembersToState = (newMembers) =>{
    
    this.setState({members: this.state.members.concat(newMembers)})
  }

  handleClick = (e, id) => {
    this.setState({disable: true});
    let clickedMember = this.state.members.filter(item => item.id == id)[0];
    clickedMember.previousScreen = "members";
    this.props.navigation.push('memberDetails', clickedMember);
  }

  formatMemberButtons(){
    let members = [];
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
    return members;
  }

  render() {
    const {navigate} = this.props.navigation;
    const { width, height } = Dimensions.get('window');

    return (
      <View>
        <StatusBar
          barStyle = "dark-content"
          backgroundColor = "#ffffff"
          animated={true}
        />
        {this.state.showAddMemberModal ? <AddMembersModal navigation={this.props.navigation} updateProp={this.addMembersToState} closeProp={this.closeAddMember}/> : null}
        <ScrollView contentContainerStyle={[s.whitePage]} bounces={false} keyboardShouldPersistTaps='always'  keyboardDismissMode='on-drag'>
          <Text style={[s.mainTitle, s.blackFont, s.paddingBig]}>
            {"Members"}
          </Text>

          <View style={ls.membersList}>
            {this.formatMemberButtons()}
          </View>
          <View style={s.paddingBig}>
            <SmartButton buttonText={"Add Member"} color={'yellow'} nextArrow={false} clickFunction={this.openAddMember} canProceed={() => true} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export {MembersScreen};