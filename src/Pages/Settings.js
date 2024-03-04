import Cookies from "universal-cookie";
import Layout from "../Components/Layout";
import { useDispatch } from "react-redux";
import { switchTheme } from "../rtk/Slices/ThemesSlice";

const cookie = new Cookies();
let dark = cookie.get("dark");

export default function Settings() {
  const dispatch = useDispatch();
  return (
    <>
      <Layout>
        <h1>Settings</h1>
        <button
          onClick={() => {
            dark = !dark;
            cookie.set("dark", dark);
            dispatch(switchTheme(dark));
          }}
        >
          Switch Them
        </button>
      </Layout>
    </>
  );
}
