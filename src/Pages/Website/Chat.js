import { Outlet, useLocation } from "react-router-dom";
import BottomBar from "../../Components/BottomBar";
import SideBarChat from "../../Components/SidebarChat";
import { useState } from "react";

export default function Chat() {
  const [onResize, setOnResize] = useState(0);
  const { pathname } = useLocation();
  const reg = /\d+/gi;

  window.onresize = () => {
    setOnResize((prev) => prev + 1);
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <SideBarChat />
        <div className="the-chat-parent">
          <Outlet />
        </div>
      </div>
      {((document.body.clientWidth < 991 &&
        !window.location.pathname.split("/").slice(-1).join().match(reg)) ||
        document.body.clientWidth > 991) && (
        <div>
          <BottomBar />
        </div>
      )}
    </div>
  );
}
