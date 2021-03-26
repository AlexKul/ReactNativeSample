import React from 'react';
import {Text, View, ScrollView, Dimensions, StatusBar} from 'react-native';
import {MoreButton} from '../components/moreButton';

var s = require('../styles/global');
var ls = require('../styles/moreStyles');

class MoreScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
      },
      headerTintColor: '#0090db',
    };
  };

  componentDidMount(){
  }

  render() {
    const {navigate} = this.props.navigation;
    const { width, height } = Dimensions.get('window')

    return (
      <View>
        <StatusBar
          barStyle = "dark-content"
          backgroundColor = "#ffffff"
          animated={true}
        />
        <ScrollView contentContainerStyle={[s.whitePage]} bounces={false} keyboardShouldPersistTaps='always'  keyboardDismissMode='on-drag'>
          <View style={ls.moreTitle}>
            <Text style={[s.bold, s.bigFont, s.blackFont, s.paddingBig, s.center]}>
              {"More"}
            </Text>
          </View>
          <View style={ls.linksList}>
            <MoreButton
              name={"Members Stats"}
              clickProp={() => this.props.navigation.navigate('stats')}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export {MoreScreen};
