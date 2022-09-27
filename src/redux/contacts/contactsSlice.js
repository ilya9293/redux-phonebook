import { createSlice, nanoid } from '@reduxjs/toolkit';
import isContacts from './intialStateForItems';

const itemsReducer = createSlice({
  name: 'items',
  initialState: isContacts,
  reducers: {
    itemsAdd: {
      reducer: (state, action) => [...state, action.payload],
      prepare: (name, number) => {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    itemsRemove: (_, action) => action.payload,
  },
});
