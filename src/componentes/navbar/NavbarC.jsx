import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavbarC = () => {
  return (
    <Navbar expand="lg" className="navbar" sticky="top">
      <Container>
        <NavLink to="/">
          <img
            src="https://i.ibb.co/605nwL8L/LOSO-SIN-FONDO-1.png"  
            alt="Logo"
            className="logo-navbar"
          />
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <NavLink to="/" className="nav-item">Inicio</NavLink>
            <NavLink to="/SobreNosotros" className="nav-item">Sobre Nosotros</NavLink>
            <NavLink to="/Contacto" className="nav-item">Contacto</NavLink>
            <NavLink to="/Carrito" className="nav-item">Carrito</NavLink>
            <NavLink to="/IniciarSesion" className="nav-item">Iniciar Sesión</NavLink>
            <NavLink to="/Registrarse" className="nav-item">Registrarse</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;

