"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileAlt, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faHouseChimneyUser,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(!expand);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="/" onClick={() => updateExpanded(false)}>
                <FontAwesomeIcon icon={faHouseChimneyUser} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/About" onClick={() => updateExpanded(false)}>
                <FontAwesomeIcon icon={faUser} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Project" onClick={() => updateExpanded(false)}>
                <FontAwesomeIcon icon={faCodepen} /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Resume" onClick={() => updateExpanded(false)}>
                <FontAwesomeIcon icon={faFileAlt} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Rawiabelhouchette/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <FontAwesomeIcon icon={faCodeBranch} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
