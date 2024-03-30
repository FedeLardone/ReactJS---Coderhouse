import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
<>
<Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link to="/category/PC" as={NavLink}>PC</Nav.Link>
            <Nav.Link to="/category/PS5" as={NavLink}>PS5</Nav.Link>
            <Nav.Link to="/category/XBOX" as={NavLink}>XBOX</Nav.Link>
        </Nav>
        <CartWidget />
        </Container>
    </Navbar>

</>
);
