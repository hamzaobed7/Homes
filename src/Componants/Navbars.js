import React from "react";
import "./navbar.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../photos/logo.png";

export default function Navbars() {
  return (
    <Navbar expand="lg" id="navbar"  className="mb-3 px-3">
      <div className="glow-effect"></div>
      <Container >
        <Navbar.Brand><img src={logo} alt="logo" style={{ height: "40px" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link  href="#residencies" id="nav-link" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Residencies</Nav.Link>
            <Nav.Link href="#our-values" id="nav-link" className="nav-link">Our Value</Nav.Link>
            <Nav.Link href="#contact-us" id="nav-link" className="nav-link">Contact us</Nav.Link>
            <Nav.Link href="#Get-start" id="nav-link" className="nav-link">Get Started</Nav.Link>
            <Nav.Link href="#get-started">
              <Button variant="outline-primary" size="sm">Contact</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
