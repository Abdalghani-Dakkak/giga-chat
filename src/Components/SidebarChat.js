import { NavLink } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../rtk/Slices/UsersSlice";
import { fetchMesssages } from "../rtk/Slices/MessagesSlice";

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

  console.log(messages);

  return (
    <Sidebar>
      {usersState.map((user, index) => (
        <NavLink key={index} to={`${user.id}`} className="nav-link">
          <Card
            name={user.name}
            messagesCount={messages[index].length}
            lastMessage={messages[index][messages[index].length - 1]}
          />
        </NavLink>
      ))}
      {/* <NavLink to={`1`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`2`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`3`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`4`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`5`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`6`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`7`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`8`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`9`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`10`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`11`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`12`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`13`} className="nav-link">
        <Card />
      </NavLink>
      <NavLink to={`14`} className="nav-link">
        <Card />
      </NavLink> */}
    </Sidebar>
  );
}
