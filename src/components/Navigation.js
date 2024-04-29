import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../style/navigationstyle.scss";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">John Doe</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact>
            ACCUEIL
          </Nav.Link>
          <Nav.Link as={NavLink} to="/service">
            SERVICES
          </Nav.Link>
          <Nav.Link as={NavLink} to="/realisations">
            RÉALISATIONS
          </Nav.Link>
          <Nav.Link as={NavLink} to="/blog">
            BLOG
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            ME CONTACTER
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
