
import React from 'react'
import { useState , useEffect } from 'react'
import { Container,Dropdown,Nav,Navbar} from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import '../styles/customNavbar.css'
import { FaUser } from 'react-icons/fa';
const CustomNavbar = () => {

  const [userData,setUserData] = useState([])


  const fetchHotels = async () => {
    try {
      let response = await fetch(
        `https://customhotels-494f8951a67d.herokuapp.com/users/me`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${window.localStorage.getItem("SetToken")}`
          },
        }
      );
      let data = await response.json();
      setUserData(data)
    } catch (error) {
      console.log(error);
    }
  };

  const tokenUsed = window.localStorage.getItem("SetToken");

    useEffect(()=>{
      if (window.localStorage.getItem("SetToken")) {
        fetchHotels();
      }
    },[tokenUsed])

  // const location = useLocation()

  return (<Container fluid className='px-md-3 px-1'>
  <Navbar bg="white" expand="md" className='navbarWidth pr-md-0 pl-md-0 mb-0'>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className='mr-auto'>
      {window.localStorage.getItem("SetToken") ? <Dropdown>
  <Dropdown.Toggle variant="" id="dropdown-basic" style={{border:"none",fontSize:"17px"}}>
  <b><FaUser className='mb-1 mr-1'/> {userData.username}</b>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/myProfile">My Profile</Dropdown.Item>
    <Dropdown.Item onClick={()=>{
      window.localStorage.removeItem("SetToken");
    }} href="/">Log Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> : <Nav.Link href="/login-register" className='navAnim ml-2'><b>Log in / Register</b></Nav.Link> }
    
    </Nav>
      <Nav className="ml-auto">
      <Nav.Link href="/" className='mr-md-5 mr-0 navAnim'><b>Home</b></Nav.Link>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav.Link href="/hotels" className='mr-md-5 mr-0 navAnim'><b>Hotels</b></Nav.Link>
        <Nav.Link href="#link-2" className='mr-md-5 mr-0 navAnim'><b>Weather</b></Nav.Link>
        <Nav.Link href="/about-site" className='pr-2 ml-md-0 navAnim'><b>About-Site</b></Nav.Link>
    </Navbar.Collapse>
      </Nav>
  </Navbar>
  </Container>
  )
}

export default CustomNavbar