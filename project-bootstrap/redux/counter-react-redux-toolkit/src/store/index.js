import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./counter";
import privateSlice from "./privacy";

//1 - create store
const store = configureStore({
  reducer: {
    counter: Counterslice.reducer,
    privateToggle: privateSlice.reducer,
  },
});

export default store;
