import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
console.log(Navbar);
const NavBar = (props) => {

    return (
        <Navbar expand="lg md xl sm" className=" custom-navbar-shadow fixed-top" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Mon profile</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Accueil</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <NavDropdown title="Autres menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Espace réservé</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Quelques choses</NavDropdown.Item>
                            <NavDropdown.Divider />

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;