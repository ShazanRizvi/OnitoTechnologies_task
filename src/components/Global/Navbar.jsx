import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png"

const Appbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <img
            src={logo}
            width="40"
            height="40"
            
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Navbar.Brand href="#home" style={{ fontWeight: "600", padding:"5px" }}>
            Onito Technologies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Registration Form</Nav.Link>
              <Nav.Link href="#link">Registered Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Appbar
