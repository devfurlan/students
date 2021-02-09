import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Navbar bg="secondary" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="/dashboard">Students</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Nav>
          <Navbar.Text>Olá, {user.name} | </Navbar.Text>
          <Nav.Link onClick={signOut}>
            Sair
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

