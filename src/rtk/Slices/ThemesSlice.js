import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../../Helper/Colors";
import Cookies from "universal-cookie";

const cookie = new Cookies();
if (cookie.get("dark") === undefined)
  cookie.set("dark", window.matchMedia("(prefers-color-scheme: dark)").matches);

let dark = cookie.get("dark");
let theme;

if (dark) theme = themes.dark;
else theme = themes.light;

const themeSlice = createSlice({
  initialState: theme,
  name: "themesSlice",
  reducers: {
    switchTheme: (state, action) => {
      if (action.payload) return themes.dark;
      else return themes.light;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
