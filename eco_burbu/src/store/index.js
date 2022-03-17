import { configureStore } from "@reduxjs/toolkit";
import { reducerModal } from "./modalSlide";


export const store = configureStore ({
  reducer: {
    modal: reducerModal,
  }
});
