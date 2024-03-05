import { Outlet } from "react-router-dom";
import SideBarChat from "../Components/SidebarChat";
import { useState } from "react";
import Layout from "../Components/Layout";
import styled from "styled-components";

const ChatParent = styled.div`
  @media (min-width: 992px) {
    width: 78%;
    margin-bottom: 10vh;
  }
`;

export default function Chat() {
  const [, setOnResize] = useState(0);

  window.onresize = () => {
    setOnResize((prev) => prev + 1);
  };

  return (
    <div className="d-flex flex-column">
      <Layout>
        <div className="d-flex">
          <SideBarChat />
          <ChatParent>
            <Outlet />
          </ChatParent>
        </div>
      </Layout>
    </div>
  );
}
