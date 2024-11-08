import { configureStore } from "@reduxjs/toolkit";
import timeLogReducer from "./slices/timeLogs";

export const store = configureStore({
  reducer: {
    timelogs: timeLogReducer,
  },
});
