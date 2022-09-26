import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { itemsReducer, filterReducer, contactsReducer } from './contacts/contactsReducer';

const reducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer,
});

export default store;

// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';

// Old redux

// const store = createStore(
//   combineReducers({
//     contacts: contactsReducer,
//   }),
//   devToolsEnhancer(),
// );
