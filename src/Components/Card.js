import styled from "styled-components";

const CardUser = styled.div.attrs(() => ({
  className: "d-flex justify-content-betwen w-100 p-2",
}))`
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #0c6dff;
  }
`;
const MessagesCount = styled.span.attrs(() => ({
  className: "d-flex justify-content-center align-items-center",
}))`
  min-width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 50%;
`;

export default function Card(props) {
  return (
    <CardUser>
      <div className="d-flex justify-content-center align-items-center me-2">
        <img
          src={require("../assets/imgs/Avatar-Profile-Vector-PNG-Cutout.png")}
          alt=""
          style={{ width: "50px" }}
        />
      </div>
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center text-light">
          <h6 className="line-clamp">{props.name}</h6>
          <span style={{ fontSize: "14px" }}>10:34 PM</span>
        </div>

        <div className="d-flex justify-content-between align-items-center text-light">
          <span className="line-clamp">{props.lastMessage}</span>
          <MessagesCount>{props.messagesCount}</MessagesCount>
        </div>
      </div>
    </CardUser>
  );
}
