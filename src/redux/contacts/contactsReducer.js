import { combineReducers } from 'redux';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'contacts/add':
      // console.log(state);
      // console.log(action);
      return [...state, action.payload];

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/set':
      return action.payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
