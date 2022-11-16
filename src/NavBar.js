import React from "react";
import { Navbar, Container, Nav, Dropdown, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

var Barndstyle = {
  color: "#61dafb",
  fontSize: "120%",
  fontFamily: "Bakbak One",
};

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand bg="dark" variant="dark" href="/">
          <babel style={Barndstyle}>Numerical Methods</babel>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Bisection">Bisection</Nav.Link>
          <NavDropdown title="Roots of Equation" id="nav-dropdown">
            <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
            <NavDropdown.Item href="/falsePosition">False-Position</NavDropdown.Item>
            <NavDropdown.Item href="/OnePoint">One-Point Iteration</NavDropdown.Item>
            <NavDropdown.Item href="/Newton">Newton-raphson</NavDropdown.Item>
            <NavDropdown.Item href="/Secant">Secant</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Linear Algebra" id="nav-dropdown">
            <NavDropdown.Item href="/Cramer">Cramer's Rule</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
