import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Asset/logo.png"
import "../Styles/Navbars.css";

const Navbars = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="main-nav"
        id="mains-nav"
        variant="dark"
      >
        <Container>
          <img src={logo} alt="" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Nav.Link href="#memes">Instant Buy/Sell</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Learn</Nav.Link>
              <Nav.Link className="btn" id="btns" href="memes">
                Login
              </Nav.Link>
              <Nav.Link className="btn" id="btns" href="#memes">
                Get Started
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars