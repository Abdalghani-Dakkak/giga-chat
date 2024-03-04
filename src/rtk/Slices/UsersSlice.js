import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "usersSlice/fetchUsers",
  async () => {
    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
  }
);

const usersSlice = createSlice({
  initialState: [],
  name: "usersSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default usersSlice.reducer;
