import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  manu: null,
  status: "idle",
};

export const valSlice = createSlice({
  name: "manu",
  initialState,
  reducers: {
    getValue: (state, action) => {
      state.manu = action.payload;
    },
    relValue: (state) => {
      state.manu = null;
    },
  },
});

export const { getValue, relValue } = valSlice.actions;

export const selectValue = (state) => state.manu.manu;

export default valSlice.reducer;
