import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
  initialState: [],
  name: "messagesSlice",
  reducers: {
    send: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { send } = messagesSlice.actions;
export default messagesSlice.reducer;
