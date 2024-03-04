import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Settings from "./Pages/Settings";
import UserChat from "./Components/UserChat";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

function App() {
  const themeState = useSelector((state) => state.theme);
  return (
    <>
      <ThemeProvider theme={themeState}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />}>
            <Route path=":id" element={<UserChat />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
