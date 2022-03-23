import React from "react";
import StyleNavbar from "./StyleNavbar";
import { Navbar, Nav, Button } from "react-bootstrap";
import NavbarLogo from "../../assets/NavbarLogo.svg";
import NavbarAdmin from "../../assets/NavbarAdmin.svg";
import NavbarAllignment from "../../assets/NavbarAllignment.svg";
import NavbarCanvas from "../../assets/NavbarCanvas.svg";
import NavbarLearning from "../../assets/NavbarLearning.svg";
import NavbarMyOkrs from "../../assets/NavbarMyOkrs.svg";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <StyleNavbar>
      <Navbar bg="dark" className="main-navbar justify-content-center">
        <Navbar.Brand as={Link} to="/">
          <img
            src={NavbarLogo}
            alt="Logo"
            className="d-inline-block navbar-logo"
          />
        </Navbar.Brand>{" "}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            {" "}
            <img
              src={NavbarCanvas}
              className="canvas-img"
              alt="Small logo"
            />{" "}
            <span className="navbar-text"> Canvas </span>{" "}
          </Nav.Link>
          <Nav.Link as={Link} to="#">
            {" "}
            <img
              src={NavbarMyOkrs}
              className="okrs-img"
              alt="Small logo"
            />{" "}
            <span className="navbar-text"> My OKRs </span>
          </Nav.Link>
          <Nav.Link as={Link} to="/align">
            {" "}
            <img
              src={NavbarAllignment}
              className="okrs-img"
              alt="Small logo"
            />{" "}
            <span className="navbar-text"> Alignment </span>
          </Nav.Link>
          <Nav.Link as={Link} to="#">
            {" "}
            <img
              src={NavbarLearning}
              className="navbar-img"
              alt="Small logo"
            />{" "}
            <span className="navbar-text"> Learning </span>
          </Nav.Link>
          <Nav.Link as={Link} to="#">
            {" "}
            <img
              src={NavbarAdmin}
              className="admin-img"
              alt="Small logo"
            />{" "}
            <span className="navbar-text"> Admin </span>
          </Nav.Link>
        </Nav>{" "}
        <Nav>
          <Button className="navbar-button"> SN </Button>{" "}
        </Nav>{" "}
      </Navbar>{" "}
    </StyleNavbar>
  );
}
export default Navbars;
