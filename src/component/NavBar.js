import { Container, Nav, Navbar } from "react-bootstrap";
import "../NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Suraj.kr</Navbar.Brand>
          <Nav className="me navbar-left">
            <Nav.Link to="#"><Link className="navLink" id="RouterNavLink" to="/">Home</Link></Nav.Link>
            <Nav.Link to="#"><Link className="navLink" id="RouterNavLink" to="/Products">Products</Link></Nav.Link>
            <Nav.Link to="#"><Link className="navLink" id="RouterNavLink" to="/FetchAPIData">FetchAPIData</Link></Nav.Link>
            <Nav.Link to="#"><Link className="navLink" id="RouterNavLink" to="/About">About</Link></Nav.Link>
            <Nav.Link to="#"><Link className="navLink" id="RouterNavLink" to="/Skills">Skills</Link></Nav.Link>
            <Nav.Link to="#"><Link className="navLink" id="RouterNavLink" to="/Blog">Blog</Link></Nav.Link>
            <Nav.Link to="#"><Link className="navLink" id="RouterNavLink" to="/Contact">Contact</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
