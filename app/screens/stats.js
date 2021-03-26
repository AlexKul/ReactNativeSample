import React from 'react';
import { Text, View, ScrollView, Dimensions, StatusBar} from 'react-native';
import memberService from '../services/memberService';

var s = require('../styles/global');
var ls = require('../styles/statsStyles');

class StatsScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      averageScore: 0,
      totalMembers: 0,
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
        marginTop: 20,
        marginLeft: 10,
      },
      headerTintColor: '#fbbc05',
    };
  };

  componentDidMount() {
    this.getStatsData();
  }

  getStatsData = () => {
    let members = memberService.getAllMembers();
    this.setState({averageScore: this.getAverageScore(members), totalMembers: members.length});
  }

  getAverageScore = (members) =>{
    let scoreTotal = 0;
    for (const iterator in members) {
      let currentScore = members[iterator]['score'];
      if(currentScore != null){
        scoreTotal+= currentScore;
      }
    }
    return scoreTotal/ members.length;
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff'}}>
        <StatusBar
          barStyle = "dark-content"
          backgroundColor = "#ffffff"
          animated={true}
        />
        <ScrollView
          contentContainerStyle={[s.whitePage]}
          bounces={false}
          keyboardShouldPersistTaps='always'
          keyboardDismissMode='on-drag'>
            <Text style={[s.mainTitle, s.blackFont, s.paddingBig]}>
              {"Members Stats"}
            </Text>
            <View style={[s.displayInlineCenter, {marginTop: 10, marginBottom: 25}]}>
              <View style={[ls.mainStatsForChart, ls.piechartOverlay]}>
                <Text style={[s.center, ls.mainStatChartValue, s.bold, s.yellowFont, s.tinyMarginBottom]}>{ this.state.averageScore + "%"}</Text>
                <Text style={[s.center, ls.mainStatDesc, s.bold, s.yellowFont]}>{"Average Score"}</Text>
              </View>
            </View>
            <View style={[s.displayInlineCenter, s.bigMarginBottom, s.smallMarginTop]}>
              { this.state.totalMembers != 0 ? (
                <View style={[ls.mainStatsArea]}>
                  <Text style={[s.center, ls.mainStatValue, s.bold, s.blackFont, s.tinyMarginBottom]}>{ this.state.totalMembers }</Text>
                  <Text style={[s.center, ls.mainStatDesc, s.bold, s.blackFont]}>{this.state.totalMembers == 1 ? "Member" : "Members"}</Text>
                </View>
              ) : null }
            </View>
        </ScrollView>
    </View>
    );
  }
}

export {StatsScreen};
