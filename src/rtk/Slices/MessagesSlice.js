import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
        return {
          data: usersMessages,
          setLoading: false,
          error: false,
        };
      });
  }
);

const messagesSlice = createSlice({
  initialState: {
    data: [],
    setLoading: false,
    error: false,
  },
  name: "messagesSlice",
  reducers: {
    send: (state, action) => {
      state.data[action.payload.index].push(action.payload.title);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMesssages.pending, () => {
      return {
        data: [],
        setLoading: true,
        error: false,
      };
    });
    builder.addCase(fetchMesssages.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchMesssages.rejected, () => {
      return {
        data: [],
        setLoading: false,
        error: true,
      };
    });
  },
});

export const { send } = messagesSlice.actions;
export default messagesSlice.reducer;
