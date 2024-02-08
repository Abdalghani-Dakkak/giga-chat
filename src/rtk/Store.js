import { configureStore } from "@reduxjs/toolkit";
import messagesSlice from "./Slices/MessagesSlice";

export const store = configureStore({
  reducer: {
    messages: messagesSlice,
  },
});
