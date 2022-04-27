import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};
// reducer 와 다르게 mutable 하게 처리 가능
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    input: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { increment, decrement, input } = counterSlice.actions;
export default counterSlice.reducer;
