import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavbarComp extends Component {
  render() {
    return (
      <>
        <Navbar bg="warning" variant="light">
          <Navbar.Brand></Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/page0">
              <Nav.Item>Főoldal</Nav.Item>
            </Nav.Link>

            <Nav.Link as={Link} to="/page1">
              <Nav.Item>Jegyzetek</Nav.Item>
            </Nav.Link>

            <Nav.Link as={Link} to="/page2">
              <Nav.Item>Állapotkezelés</Nav.Item>
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
