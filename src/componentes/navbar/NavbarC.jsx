import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavbarC = () => {
  const navigate = useNavigate();
  const usuarioLogeado = JSON.parse(sessionStorage.getItem("usuarioLogeado"));

  const cerrarSesion = () => {
    sessionStorage.removeItem("usuarioLogeado");
    navigate("/");
    setTimeout(() => {
      window.location.reload(); // Refresca el navbar
    }, 100);
  };

  // Determinar a dónde redirigir cuando se hace clic en el logo
  const handleLogoClick = () => {
    if (usuarioLogeado?.rol === "administrador") {
      navigate("/admin");
    } else if (usuarioLogeado?.rol === "usuario") {
      navigate("/user");
    } else {
      navigate("/");
    }
  };

  return (
    <Navbar expand="lg" className="navbar" sticky="top">
      <Container>
        <span onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <img
            src="https://i.ibb.co/605nwL8L/LOSO-SIN-FONDO-1.png"
            alt="Logo"
            className="logo-navbar"
          />
        </span>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            {usuarioLogeado?.nombreUsuario && (
              <span className="nav-item saludo-usuario">
                Hola, {usuarioLogeado.nombreUsuario} 👋
              </span>
            )}

            {!usuarioLogeado && (
              <>
                <NavLink to="/" className="nav-item">
                  Inicio
                </NavLink>
                <NavLink to="/SobreNosotros" className="nav-item">
                  Sobre Nosotros
                </NavLink>
                <NavLink to="/Contacto" className="nav-item">
                  Contacto
                </NavLink>
                <div className="auth-links">
                  <NavLink to="/IniciarSesion" className="nav-item">
                    Iniciar Sesión
                  </NavLink>
                  <NavLink to="/Registrarse" className="nav-item">
                    Registrarse
                  </NavLink>
                </div>
              </>
            )}

            {usuarioLogeado?.rol === "usuario" && (
              <>
                <NavLink to="/user" className="nav-item">
                  Inicio
                </NavLink>
                <NavLink to="/user/Favoritos" className="nav-item">
                  Favoritos
                </NavLink>
                <NavLink to="/user/Carrito" className="nav-item">
                  Carrito
                </NavLink>
                <span className="nav-item cerrar-sesion" onClick={cerrarSesion}>
                  Cerrar Sesión
                </span>
              </>
            )}

            {usuarioLogeado?.rol === "administrador" && (
              <>
                <NavLink to="/admin" className="nav-item">
                  Inicio
                </NavLink>
                <NavLink to="/admin/products" className="nav-item">
                  Administrar Productos
                </NavLink>
                <NavLink to="/admin/users" className="nav-item">
                  Administrar Usuarios
                </NavLink>
                <span className="nav-item cerrar-sesion" onClick={cerrarSesion}>
                  Cerrar Sesión
                </span>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
