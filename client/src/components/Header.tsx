import React from 'react'
import { Container} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import { Offcanvas } from 'react-bootstrap'
// import { FormControl } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
const Header = () => {
    return (
<Navbar bg="bg-light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
        <Nav.Link href="/aboutus">About US</Nav.Link>
        <Nav.Link href="/admission">Admission</Nav.Link>
        <Nav.Link href="/contactus">Contact US</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
