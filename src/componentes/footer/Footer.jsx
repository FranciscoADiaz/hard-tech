// Footer.js
import { NavLink } from "react-router";
import "./Footer.css";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <div>
      <footer className="text-withe">
        <div className="footer">
          <Container>
            <nav className="row">
              <NavLink
                to="/"
                className="col-12 col-md-3 d-flex align-items-center justify-content-center pl-3"
              >
                <img
                  src="../../img/LogoHardTech.png"
                  alt="Logo HardTech"
                  className="logo-footer"
                />
              </NavLink>
              <ul className="navbar-nav col-12 col-md-3  m-auto py-4 pl-4">
                <li className="text-center navbar-nav ">
                  <NavLink
                    className="fs-5 a"
                    to="https://www.instagram.com/"
                    target="_blank"
                  >
                    <i className="bi bi-facebook"/> Instagram
                  </NavLink>
                </li>
                <li className="text-center li">
                  <NavLink
                    className="fs-5 a"
                    to="https://www.facebook.com/?locale=es_LA"
                    target="_blank"
                  >
                    Facebook
                  </NavLink>
                </li>
                <li className="text-center ">
                  <NavLink className="fs-5 a" to="https://x.com/" target="_blank">
                    X
                  </NavLink>
                </li>
                <li className="text-center li">
                  <NavLink
                    className="fs-5 a"
                    to="https://www.tiktok.com/upload?lang=es"
                    target="_blank"
                  >
                    Tiktok
                  </NavLink>
                </li>
              </ul>
              <ul class=" navbar-nav col-12 col-md-3 m-auto py-4 ">
                <li className="text-center navbar-nav">
                  <NavLink className="fs-5 a" to="#" target="_blank">
                    Terminos y Condiciones
                  </NavLink>
                </li>
                <li className="text-center">
                  <NavLink className="fs-5 a" to="#" target="_blank">
                    Politica de Privacidad
                  </NavLink>
                </li>
                <li className="text-center ">
                  <NavLink className="fs-5 a" to="#" target="_blank">
                    Cookies y Publicidad
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      </footer>
    </div>
  );
}
