import combineReducers from 'react';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'contacts/add':
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

const contactsReducer = () =>
  combineReducers({
    items: itemsReducer,
    filter: filterReducer,
  });

export default contactsReducer;
