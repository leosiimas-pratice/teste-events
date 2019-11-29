import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Participants from '../screens/Participants';
import Chat from '../screens/Chat';
import Presents from '../screens/Presents';

const Tab = createMaterialTopTabNavigator(
  {
    Participants: {screen: Participants, tabBarOptions: {swipeEnabled: true}},
    Presents: {screen: Presents},
    Chat: {screen: Chat},
  },
  {
    tabBarPosition: 'top',
  },
);

const TabNavigator = createAppContainer(Tab);

export default TabNavigator;
