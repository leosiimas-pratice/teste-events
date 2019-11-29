//import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Event from './screens/Event';
import Login from './screens/Login';
import Register from './screens/Register';
import AddEvent from './screens/AddEvent';

const AuthRoutes = createSwitchNavigator(
  {
    Home: {
      name: 'Home',
      screen: Home,
      navigationOptions: {title: 'Eventos'},
    },
    Login: {
      screen: Login,
      navigationOptions: {title: 'Login'},
    },
    Register: {
      screen: Register,
      navigationOptions: {title: 'Registrar'},
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const MainRoutes = createStackNavigator(
  {
    Event: {
      name: 'Event',
      screen: Event,
      navigationOptions: {title: 'Evento'},
    },
    AuthRoutes: {
      screen: AuthRoutes,
      navigationOptions: {title: 'Home'},
    },
    AddEvent: {
      screen: AddEvent,
      navigationOptions: {title: 'Adicionar Evento'},
    },
  },
  {
    initialRouteName: 'AuthRoutes',
  },
);

const MainNavigator = createAppContainer(MainRoutes);

export default MainNavigator;
