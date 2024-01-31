import { createSlice } from "@reduxjs/toolkit";

const privateSlice = createSlice({
  name: "privateToggle",
  initialState: { privateButton: false },
  reducers: {
    toggle: (state) => {
      state.privateButton = !state.privateButton;
    },
  },
});

export const toggleAction = privateSlice.actions;
export default privateSlice;
