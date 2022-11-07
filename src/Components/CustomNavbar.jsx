
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container,Nav,Navbar, NavDropdown} from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import '../styles/customNavbar.css'
const CustomNavbar = () => {

  const location = useLocation()
  console.log(location)

  return (<Container fluid className='px-md-3 px-1'>
  <Navbar bg="white" expand="sm" className='navbarWidth pr-md-0 pl-md-0 mb-0'>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
      <Nav.Link href="/" className='mr-sm-5 navAnim'><b>Home</b></Nav.Link>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav.Link href="/hotels" className='mr-5 navAnim'><b>Hotels</b></Nav.Link>
        <Nav.Link href="#link-2" className='mr-md-5 mr-5 navAnim'><b>Weather</b></Nav.Link>
        <Nav.Link href="#link-3" className='pr-2  ml-4 ml-md-0 navAnim'><b>About-Us</b></Nav.Link>
    </Navbar.Collapse>
      </Nav>
  </Navbar>
  </Container>
  )
}

export default CustomNavbar