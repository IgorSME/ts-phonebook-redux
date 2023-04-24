import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: initialContacts, filter: '' },
  reducers: {
    add(state, action) {
      return { ...state, items: [action.payload, ...state.items] };
    },
    delContact(state, action) {
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload),
      };
    },
    changeFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { add, delContact, changeFilter } = contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
