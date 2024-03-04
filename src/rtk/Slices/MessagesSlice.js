import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import Loader from "../../Components/Loader";

export const fetchMesssages = createAsyncThunk(
  "messagesSlice/fetchMesssages",
  async () => {
    return await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const usersMessages = [[], [], [], [], [], [], [], [], [], []];
        let counter = -1;

        data.forEach((message, index) => {
          if (index % 10 !== 0) usersMessages[counter].push(message.title);
          else {
            counter++;
            usersMessages[counter].push(message.title);
          }
        });
        return usersMessages;
      });
  }
);

const messagesSlice = createSlice({
  initialState: [],
  name: "messagesSlice",
  reducers: {
    send: (state, action) => {
      state[action.payload.index].push(action.payload.title);
      return state;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchMesssages.pending, () => {
    //   return <Loader />;
    // });
    builder.addCase(fetchMesssages.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { send } = messagesSlice.actions;
export default messagesSlice.reducer;
