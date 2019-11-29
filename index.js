import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import Navigator from './src/Navigator';
import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig';

import axios from 'axios';

//TODO NÃO subir repositorio
axios.defaults.baseURL = 'https://events-a1740.firebaseio.com/';

const store = storeConfig();
const Redux = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
