import React from 'react';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabBar } from "../components";

import {
  HomeScreen,
  PicsScreen,
  ProfileScreen
} from "../screens";

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="md-flask" size={30} color={tintColor} />,
      },
    },
    PicsScreen: {
      screen: PicsScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="md-planet" size={30} color={tintColor} />
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="ios-person" size={30} color={tintColor} />
      }
    }
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: "#ffffff",
      inactiveTintColor: "#c7d1d8"
    }
  }
);

export default createAppContainer(TabNavigator);