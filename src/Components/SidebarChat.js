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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </NavLink>
      {/* </div> */}
      {/* ))} */}
    </div>
  );
}
