import { useContext, useState, useEffect } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/evangadi-logo-black.png";
import { AppState } from "../../App";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const Header = () => {
  const { user, setUser } = useContext(AppState); // Make sure you have setUser available
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    setIsLoggedIn(!!user); // Set true or false based on user existence
  }, [user]);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // If the user is logged in, handle logout
      setUser(null); // Clear user context or state
      navigate("/login"); // Navigate to login page after logout
    } else {
      // If the user is not logged in, navigate to the register page
      navigate("/register");
    }
  };

  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      className="shadow-sm border-bottom py-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" style={{ width: "170px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              How it Works
            </Nav.Link>
            <button
              className="btn btn-primary px-5"
              onClick={handleButtonClick}>
              {isLoggedIn ? "Logout" : "Sign In"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
