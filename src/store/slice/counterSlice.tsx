import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type counterSlice = {
  value: number;
};

const initialState: counterSlice = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state ) => {
      state.value -= 1;
    },
    //  payload: number; type: string
    incrementByAmount: (state, action:PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
