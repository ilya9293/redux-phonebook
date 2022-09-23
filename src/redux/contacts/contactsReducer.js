import { combineReducers } from 'redux';
import * as storage from '../../services/localStorage';

const CONTACTSLOCALE = 'contacts';

const startedContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const isContacts = !!storage.get(CONTACTSLOCALE).length
  ? storage.get(CONTACTSLOCALE)
  : startedContacts;

const itemsReducer = (state = isContacts, action) => {
  switch (action.type) {
    case 'contacts/add':
      return [...state, action.payload];
    case 'contacts/remove':
      return action.payload;

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
