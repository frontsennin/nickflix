"use client";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: null,
};

export const showContentSlice = createSlice({
  name: "showContent",
  initialState,
  reducers: {
    updateShowCOntent: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateShowCOntent } = showContentSlice.actions;

export default showContentSlice.reducer;
