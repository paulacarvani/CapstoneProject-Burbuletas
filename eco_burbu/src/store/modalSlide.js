import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  render: false,
}

export const modalSlide = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state) => {
      return {...state, render: true}
      },
    close: (state) => {
      return {...state, render: false}
    },
  }
})

export const { show, close } = modalSlide.actions;
export const { reducer: reducerModal } = modalSlide;
