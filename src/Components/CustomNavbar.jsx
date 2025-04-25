"use client"
import { useState, useEffect } from "react"
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import "../styles/customNavbar.css"
import { FaUser, FaHome, FaHotel, FaInfoCircle, FaBars } from "react-icons/fa"

const CustomNavbar = () => {
  const [userData, setUserData] = useState([])
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()

  const fetchHotels = async () => {
    try {
      const response = await fetch(`https://customhotels-494f8951a67d.herokuapp.com/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("SetToken")}`,
        },
      })
      const data = await response.json()
      setUserData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem("SetToken")) {
      fetchHotels()
    }
  }, [window.localStorage.getItem("SetToken")])

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "active" : ""
  }

  const handleLogout = () => {
    window.localStorage.removeItem("SetToken")
    window.location.href = "/"
  }

  const isLoggedIn = window.localStorage.getItem("SetToken")

  return (
    <div className="navbar-container">
      <Container fluid>
        <Navbar
          bg="white"
          expand="lg"
          className="elegant-navbar"
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
        >
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Brand - visible on all screen sizes */}
            <Navbar.Brand href="/" className="brand-text me-auto">
              <span className="brand-highlight">C</span>ustom <span className="brand-highlight">H</span>otels
            </Navbar.Brand>

            {/* User Section and Toggle Button - Right aligned */}
            <div className="d-flex align-items-center">
              {/* User Section - Always visible, adapts to screen size */}
              <div className="user-section">
                {isLoggedIn ? (
                  <Dropdown align={{ lg: "end" }}>
                    <Dropdown.Toggle variant="" id="dropdown-basic" className="user-dropdown">
                      <FaUser className="user-icon" />
                      <span className="username d-none d-sm-inline">{userData.username}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu-animated">
                      <Dropdown.Item href="/myProfile">My Profile</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Nav.Link href="/login-register" className="login-link">
                    <span className="d-none d-sm-inline">Sign In</span>
                    <span className="d-inline d-sm-none">Sign In</span>
                  </Nav.Link>
                )}
              </div>

              {/* Navbar Toggle */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler ms-3">
                <FaBars />
              </Navbar.Toggle>
            </div>
          </div>

          {/* Collapsible Navigation */}
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
            <Nav className="mx-auto main-nav">
              <Nav.Link href="/" className={`nav-link-elegant ${getNavLinkClass("/")}`}>
                <FaHome className="nav-icon" /> <span>Home</span>
              </Nav.Link>
              <Nav.Link href="/hotels" className={`nav-link-elegant ${getNavLinkClass("/hotels")}`}>
                <FaHotel className="nav-icon" /> <span>Hotels</span>
              </Nav.Link>
              <Nav.Link href="/about-site" className={`nav-link-elegant ${getNavLinkClass("/about-site")}`}>
                <FaInfoCircle className="nav-icon" /> <span>About</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

export default CustomNavbar
