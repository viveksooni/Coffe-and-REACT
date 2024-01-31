import { createSlice } from "@reduxjs/toolkit";

const Counterslice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state, action) => {
      state.counterVal = state.counterVal + 1;
    },
    decrement: (state, action) => {
      state.counterVal = state.counterVal - 1;
    },
    add: (state, action) => {
      state.counterVal = state.counterVal + Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal = state.counterVal - Number(action.payload);
    },
  },
});

export const counterAction = Counterslice.actions;
export default Counterslice;