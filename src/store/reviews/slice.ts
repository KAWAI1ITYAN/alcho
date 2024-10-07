import { createSlice } from '@reduxjs/toolkit';
import { ReviewI } from 'shared/types/types';

interface Props {
  isOpen: boolean;
  reviews: ReviewI[];
}

const initialState: Props = {
  reviews: [],
  isOpen: false
};

export const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
      openForm(state) {
        state.isOpen = true;
      },
      closeForm(state) {
        state.isOpen = false;
      }
    }
  })
;

export const { openForm, closeForm } = modalsSlice.actions;
