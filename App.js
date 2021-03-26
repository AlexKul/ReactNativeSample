import React, {Component} from 'react';

import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import {View, Dimensions, } from 'react-native';

import {MembersScreen} from './app/screens/members';
import {MemberDetailsScreen} from './app/screens/memberDetails';
import {MoreScreen} from './app/screens/more';
import {StatsScreen} from './app/screens/stats';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

var s = require('./app/styles/global');

var ipadScreen = Dimensions.get('window').width >= 600 ? true : false;


const MembersStack = createStackNavigator(
  {
    members:    {screen: MembersScreen},
    memberDetails:{screen: MemberDetailsScreen},
  },{
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#33b1e2',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        borderBottomWidth: 0,
        elevation: 0
      },

    },
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <View style={{width: 50}}>
          <Icon name="users" size={ipadScreen? 35 : 25} color={focused ? "#fbbc05" : "#b4b4b4"}/>
        </View>
      ),
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
          height: 70,
          paddingTop: 2,
          paddingBottom: 15,
        }
      }
    },

  }
);

const MoreStack = createStackNavigator(
  {
    more:  {screen: MoreScreen},
    stats: {screen: StatsScreen},
  },{
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#33b1e2',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0
      },

    },
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <View style={{width: 50}}>
          <Icon name="bars" size={ipadScreen? 35 : 25} color={focused ? "#fbbc05" : "#b4b4b4"}/>
        </View>
      ),
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
          height: 70,
          paddingTop: 2,
          paddingBottom: 15,
          elevation: 0
        }
      },
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
);

const NavigatorFooter = createBottomTabNavigator(
  {
    MembersStack: MembersStack,
    MoreStack: MoreStack
  },{
    resetOnBlur: true,
  }
);

const AppNavigator = createStackNavigator({
  NavigatorFooter: NavigatorFooter
},{headerMode: 'none', defaultNavigationOptions: { gesturesEnabled: false,}}
);
const AppContainer = createAppContainer(AppNavigator);

class ManageApp extends React.Component {
  render() {
    return(
      <AppContainer />
    );
  }
}
export default ManageApp;
