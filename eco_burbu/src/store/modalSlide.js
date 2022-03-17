import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: false,
  signIn: false
}

export const modalSlide = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    set: (state, { payload: {key, value} }) => {
      return {...state, [key]: value}
    },
  }
})
export const { set } = modalSlide.actions;
export const { reducer: reducerModal } = modalSlide;
