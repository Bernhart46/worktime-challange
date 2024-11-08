import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    description:
      "Időnyilvántartó app készítése (kattints ide a szerkesztéshez)",
    date: "2024-11-08",
    startingTime: "11:53",
    endingTime: "19:53",
    tags: ["project", "default"],
  },
  {
    id: 1,
    description: "Tailwind CSS tényleges kitanulása, VueJS kurzus keresése",
    date: "2024-11-09",
    startingTime: "08:00",
    endingTime: "16:00",
    tags: ["tanulás", "új dolgok"],
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
