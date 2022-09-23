import { nanoid } from 'nanoid';

const itemsAdd = (name, number) => ({
  type: 'contacts/add',
  payload: {
    name,
    number,
    id: nanoid(),
  },
});

const itemsRemove = contact => ({
  type: 'contacts/remove',
  payload: contact,
});

const filterSet = filter => ({
  type: 'filter/set',
  payload: filter,
});

export { itemsAdd, itemsRemove, filterSet };
