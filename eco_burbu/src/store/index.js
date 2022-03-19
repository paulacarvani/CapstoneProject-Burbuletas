import { configureStore } from "@reduxjs/toolkit";
import { reducerModal } from "./modalSlide";
import favoriteReducer from "./Favorite";

export const store = configureStore ({
  reducer: {
    modal: reducerModal,
    favorite: favoriteReducer,
  }
});
