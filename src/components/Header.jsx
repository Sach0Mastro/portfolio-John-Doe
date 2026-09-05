import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand className="fw-bold">JOHN DOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="text-uppercase">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="text-uppercase">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="text-uppercase">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="text-uppercase">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/mentions-legales" className="text-uppercase">
              Mentions légales
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;