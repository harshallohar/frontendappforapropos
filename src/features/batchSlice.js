import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  batch: null,
  status: "idle",
};

export const batchSlice = createSlice({
  name: "batch",
  initialState,
  reducers: {
    setBatch: (state, action) => {
      state.batch = action.payload;
    },
    relBatch: (state) => {
      state.batch = null;
    },
  },
});


export const {setBatch, relBatch} = batchSlice.actions;

export const selectBatch = (state)=> state.batch.batch;

export default batchSlice.reducer;