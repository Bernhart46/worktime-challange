import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    description: "Időnyilvántartó app készítése",
    date: "2024-11-08",
    startingTime: "10:30",
    endingTime: "18:20",
    tags: ["project", "default"],
  },
];

export const timeLogsSlice = createSlice({
  name: "timelog",
  initialState: initialState,
  reducers: {
    createTimeLog: (state, action) => {
      const { timelog } = action.payload;

      state.push(timelog);
    },
    deleteTimeLog: (state, action) => {
      const { id } = action.payload;

      let index = state.findIndex((element) => element.id === id);

      if (index !== -1) {
        return state.filter((timelog) => timelog.id !== id);
      }
      //else there is nothing to remve aka error
    },
    editTimeLog: (state, action) => {
      const { id, newData } = action.payload;

      let index = state.findIndex((element) => element.id === id);

      if (index !== -1) {
        state[index] = { ...state[index], ...newData };
      }
    },
  },
});

export const { createTimeLog, deleteTimeLog, editTimeLog } =
  timeLogsSlice.actions;
export default timeLogsSlice.reducer;
