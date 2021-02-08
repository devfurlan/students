import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="secondary" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">Students</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Nav>
          <Navbar.Text>Olá, Fulano | </Navbar.Text>
          <Nav.Link eventKey={2} href="#memes">
            Sair
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

