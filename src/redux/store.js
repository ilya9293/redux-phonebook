import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import contactsReducer from './contacts/contactsReducer';

const store = createStore(
  combineReducers({
    contacts: contactsReducer,
  }),
  devToolsEnhancer(),
);

export default store;
