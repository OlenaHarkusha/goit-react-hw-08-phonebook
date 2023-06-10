import { createSlice } from '@reduxjs/toolkit';

import { contactsInitialState } from './InitialState';
import {
  deleteContact,
  editContact,
  fetchContacts,
  postContact,
} from './Operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(postContact.pending, handlePending)
      .addCase(postContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
        state.error = null;
      })
      .addCase(postContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
        state.error = null;
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        const { name, number, id } = action.payload;
        state.isLoading = false;
        const index = state.contacts.findIndex(contact => id === contact.id);
        state.contacts[index] = { name, number, id };
        state.error = null;
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
