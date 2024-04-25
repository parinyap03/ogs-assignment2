import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@store/slice/counterSlice";
import regisSlice from "@store/slice/regisSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    regis: regisSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
