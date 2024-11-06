import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
console.log(Navbar);
const NavBar = (props) => {

    return (
        <Navbar expand="lg md xl sm" className=" custom-navbar-shadow fixed-top" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Stéphan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link href="#home">Accueil</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#">Espace propriétaire</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;