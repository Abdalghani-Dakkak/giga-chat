import { NavLink } from "react-router-dom";
import Card from "./Card";
// import { User } from "../Pages/Website/Context/UserContext";
// import { useContext, useEffect } from "react";

export default function SideBarChat() {
  // let users = [];

  // const user = useContext(User);

  // useEffect(() => {
  //   user.setUsers({
  //     id: 1,
  //     name: "Ahmed",
  //     message: "Hello world",
  //     messageCount: "4",
  //     time: "10:34 PM",
  //   });
  // }, []);

  // for (let i = 0; i <= 30; i++) {
  //   users.push(user.users);
  // }

  return (
    <div className="sidebar pt-2 pb-2">
      {/* {users.map((user, index) => ( */}
      {/* <div key={index}> */}
      <NavLink to={`1`} className="nav-link">
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
      </NavLink>
      {/* </div> */}
      {/* ))} */}
    </div>
  );
}
