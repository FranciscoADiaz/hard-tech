import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import  "./Navbar.css"
const NavbarC = () => {
  
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <NavLink to="/">
            <img
              src="https://trello.com/1/cards/67d80f377ad55dc4df25d044/attachments/67db4a0f7016e440b82edf71/download/LOSO_SIN_FONDO_1.png"
              alt="Logo"
              className="w-25"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="a" to="/">
                Inicio
              </NavLink>
              <NavLink className="a" to="/SobreNosotros">
                Sobre Nosotros
              </NavLink>
              <NavLink className="a" to="/Contacto">
                Contacto
              </NavLink>
            </Nav>

            <Nav className="ms-auto">
              <NavLink className="a" to="/iniciarSesion">
                Iniciar Sesion
              </NavLink>
              <NavLink className="a" to="/registrarse">
                Registrarse
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
