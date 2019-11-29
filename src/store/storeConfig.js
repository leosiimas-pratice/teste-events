import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/user';
import eventsReducer from './reducers/events';
import presentsReducer from './reducers/presents';
import messagesReducer from './reducers/messages';

const reducers = combineReducers({
  user: userReducer,
  events: eventsReducer,
  presents: presentsReducer,
  messages: messagesReducer,
});

const storeConfig = () => {
  return createStore(reducers, compose(applyMiddleware(thunk)));
};

export default storeConfig;
