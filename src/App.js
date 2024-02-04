import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Website/Home";
import Chat from "./Pages/Website/Chat";
import Settings from "./Pages/Website/Settings";
import UserChat from "./Components/UserChat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />}>
          <Route path=":id" element={<UserChat />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
