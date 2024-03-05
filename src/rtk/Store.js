import { configureStore } from "@reduxjs/toolkit";
import MessagesSlice from "./Slices/MessagesSlice";
import ThemesSlice from "./Slices/ThemesSlice";
import UsersSlice from "./Slices/UsersSlice";

export const store = configureStore({
  reducer: {
    messages: MessagesSlice,
    users: UsersSlice,
    theme: ThemesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
