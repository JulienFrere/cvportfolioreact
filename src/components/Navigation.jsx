import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/" className="mx-5">
        JOHN DOE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact className="mx-2">
            ACCUEIL
          </Nav.Link>
          <Nav.Link as={NavLink} to="/service" className="mx-2">
            SERVICES
          </Nav.Link>
          <Nav.Link as={NavLink} to="/realisations" className="mx-2">
            RÉALISATIONS
          </Nav.Link>
          <Nav.Link as={NavLink} to="/blog" className="mx-2">
            BLOG
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="mx-2">
            ME CONTACTER
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
