import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiFillStar,
  AiOutlineFundProjectionScreen
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

export default function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavColor] = useState(false);

  function scrollHandler() {
    updateNavColor(window.scrollY >= 20 ? true : false);
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <h4>ThPhuc</h4>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => { updateExpanded(expand ? false : "expanded")}}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/about">
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/projects">
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Project
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/profile">
              <CgFileDocument style={{ marginBottom: "2px" }} /> Profile
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
            <Button
              href="github"
              target="_blank"
              className="fork-btn-inner"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              <AiFillStar style={{ fontSize: "1.1em" }} />
            </Button>
          </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}