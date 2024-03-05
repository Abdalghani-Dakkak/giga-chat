import { useDispatch } from "react-redux";
import { fetchUsers } from "../rtk/Slices/UsersSlice";
import { fetchMesssages } from "../rtk/Slices/MessagesSlice";

import "./error.css";

export default function Error() {
  const dispatch = useDispatch();
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <h2 className="fs-1 fw-bold text-danger">Error</h2>
      <button
        className="refrech-btn p-3 fs-5 fw-bold text-danger"
        onClick={() => {
          dispatch(fetchUsers());
          dispatch(fetchMesssages());
        }}
      >
        Refrech
      </button>
    </div>
  );
}
