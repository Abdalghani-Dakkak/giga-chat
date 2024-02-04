import { Outlet } from "react-router-dom";
import BottomBar from "../../Components/BottomBar";
import SideBarChat from "../../Components/SidebarChat";

export default function Chat() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <SideBarChat />
        <div className="w-0 the-chat-parent" style={{ marginBottom: "10vh", zIndex: "1" }}>
          <Outlet />
        </div>
      </div>
      <div>
        <BottomBar />
      </div>
    </div>
  );
}
