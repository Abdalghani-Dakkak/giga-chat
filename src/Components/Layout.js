import { useParams } from "react-router-dom";
import BottomBar from "./BottomBar";

export default function Layout({ children }) {
  // const { pathname } = useLocation();
  const { id } = useParams();

  return (
    <>
      {children}
      {((document.body.clientWidth <= 991 && !id) ||
        document.body.clientWidth > 991) && <BottomBar />}
    </>
  );
}
