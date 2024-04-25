import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type regisSlice = {
  username: string;
  password: string;
  email: string;
};

const initialState: regisSlice = {
  username: "",
  password: "",
  email: "",
};

export const regisSlice = createSlice({
  name: "regis",
  initialState: { value: initialState },
  reducers: {
    updateFormRegis: (state, action: PayloadAction<regisSlice>) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { updateFormRegis } = regisSlice.actions;
export default regisSlice.reducer;
