const itemsAdd = (...items) => ({
  type: 'contacts/add',
  payload: {
    name: items[0],
    number: items[1],
  },
});

const filterSet = filter => ({
  type: 'filter/set',
  payload: filter,
});

export { itemsAdd, filterSet };
