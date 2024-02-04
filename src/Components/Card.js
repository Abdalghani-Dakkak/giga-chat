// import { useContext } from "react";
// import { User } from "../Pages/Website/Context/UserContext";

export default function Card() {
  // const user = useContext(User);

  return (
    <div className="d-flex justify-content-betwen w-100 p-2 card-user">
      <div className="d-flex justify-content-center align-items-center me-2">
        <img
          src={require("../assets/imgs/Avatar-Profile-Vector-PNG-Cutout.png")}
          alt=""
          style={{ width: "50px" }}
        />
      </div>
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center text-light">
          <h4>Ahmed</h4>
          <span style={{ fontSize: "14px" }}>10:34 PM</span>
        </div>

        <div className="d-flex justify-content-between align-items-center text-light">
          <span>Hello</span>
          <span
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "var(--secondary-color)",
              borderRadius: "50%",
            }}
          >
            4
          </span>
        </div>
      </div>
    </div>
  );
}
