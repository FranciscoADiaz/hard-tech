import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content row">
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <NavLink to="/">
              <img
                src="https://i.ibb.co/605nwL8L/LOSO-SIN-FONDO-1.png"
                alt="Logo HardTech"
                className="logo-footer"
              />
            </NavLink>
          </div>

          <div className="col-12 col-md-4">
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank" rel="noreferrer">
                  <FaTwitter /> X
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok /> TikTok
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <ul className="footer-links">
              <li>
                <a href="#">Términos y Condiciones</a>
              </li>
              <li>
                <a href="#">Política de Privacidad</a>
              </li>
              <li>
                <a href="#">Cookies y Publicidad</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copy Pegado al fondo */}
      <div className="footer-bottom text-center">
        © 2025 HardTech. Todos los derechos reservados.
      </div>
    </footer>
  );
}
