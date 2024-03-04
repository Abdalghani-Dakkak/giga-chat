import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarStyled = styled(Navbar).attrs(() => ({
  expand: "lg",
  fixed: "bottom",
  className: "w-100",
}))`
  min-height: 10vh;
  background-color: ${(props) => props.theme.main};
`;
const LinkStyled = styled(Link).attrs(() => ({
  to: "/",
  className: "nav-link fs-2",
}))`
  color: ${(props) => props.theme.secondary};

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;
const NavLinkStyled = styled(NavLink).attrs(() => ({
  className: "nav-link text-light",
}))`
  &:hover {
    color: ${(props) => props.theme.secondary} !important;
  }
  &.active {
    color: ${(props) => props.theme.secondary} !important;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
  }
`;

export default function BottomBar() {
  return (
    <NavbarStyled>
      <Container>
        <LinkStyled>Giga Chat</LinkStyled>
        <Navbar.Toggle
          className="nav-toggler"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto w-50 fs-5 d-flex justify-content-between align-items-center">
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/chat">Chat</NavLinkStyled>
            <NavLinkStyled to="/settings">Setting</NavLinkStyled>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarStyled>
  );
}
