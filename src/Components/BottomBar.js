import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

export default function BottomBar() {
  return (
    <Navbar expand="lg" className="bottom-bar w-100" fixed="bottom">
      <Container>
        <Link to="/" className="navbar-brand text-light fs-2">
          Giga Chat
        </Link>
        <Navbar.Toggle
          className="nav-toggler"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto w-50 fs-5 d-flex justify-content-between align-items-center">
            <NavLink to="/" className="nav-link text-light">
              Home
            </NavLink>
            <NavLink to="/chat" className="nav-link text-light">
              Chat
            </NavLink>
            <NavLink to="/settings" className="nav-link text-light">
              Setting
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
