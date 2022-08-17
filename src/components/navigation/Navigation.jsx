import React from 'react'
import '../navigation/Navigation.css'
import { Container,Navbar,Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div>
        <Navbar className="nav" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Logo/Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="link" href="#home">About</Nav.Link>
                    <Nav.Link className="link" href="#link">Skill</Nav.Link>
                    <Nav.Link className="link" href="#link">Project</Nav.Link>
                    <Nav.Link className="link" href="#link">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation