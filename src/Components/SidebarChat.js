import { NavLink } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../rtk/Slices/UsersSlice";
import { fetchMesssages } from "../rtk/Slices/MessagesSlice";
import Loader from "./Loader";
import Error from "./Error";

const Sidebar = styled.div.attrs(() => ({
  className: "pt-2 pb-2",
}))`
  width: 22%;
  height: 90vh;
  background-color: ${(props) => props.theme.main};
  border-inline-end: 2px solid ${(props) => props.theme.span};
  margin-bottom: 10vh;
  overflow-y: auto;
  @media (max-width: 991px) {
    width: 100%;
    border: none;
  }

  & .active {
    background-color: #0c6dff;
  }
`;

export default function SideBarChat() {
  const usersState = useSelector((state) => state.users);
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchMesssages());
  }, [dispatch]);

  return (
    <Sidebar>
      {messages.setLoading && !messages.error ? (
        <Loader />
      ) : messages.error ? (
        <Error />
      ) : (
        usersState.map((user, index) => (
          <NavLink key={index} to={`${user.id}`} className="nav-link">
            <Card
              name={user.name}
              messagesCount={messages.data[index].length}
              lastMessage={
                messages.data[index][messages.data[index].length - 1]
              }
            />
          </NavLink>
        ))
      )}
    </Sidebar>
  );
}
