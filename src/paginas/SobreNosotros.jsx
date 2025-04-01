import { Container, Row, Col, Image } from "react-bootstrap";
import "./SobreNosotros.css";

const SobreNosotros = () => {
  const integrantesCol1 = [
    { nombre: "Nicolas", img: "https://i.ibb.co/Kj036HY9/Nico.jpg"},
    { nombre: "Tobias", img: "https://i.ibb.co/Z6jZk95D/tobias.png"},
  ];

  const integrantesCol2 = [
    { nombre: "Ana Paula", img: "https://i.ibb.co/67CgD1NC/Ana.jpg" },
    { nombre: "Francisco", img: "https://i.ibb.co/fYbbMHv2/Franciscoo.png" },
  ];

  return (
    <div className="sobre-nosotros-page">
      <Container className="sobre-nosotros my-5">
        <Row>
          <Col>
            <h2>Sobre Nosotros</h2>
            <p className="texto-nosotros">
              Somos un equipo apasionado por la tecnología, el gaming y el
              hardware. Trabajamos día a día para ofrecerte la mejor experiencia
              y los mejores productos del mercado.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6} className="integrantes-columna">
            {integrantesCol1.map((integrante, index) => (
              <div key={index} className="integrante">
                <Image src={integrante.img} roundedCircle className="avatar" />
                <p>{integrante.nombre}</p>
              </div>
            ))}
          </Col>

          <Col md={6} className="integrantes-columna">
            {integrantesCol2.map((integrante, index) => (
              <div key={index} className="integrante">
                <Image src={integrante.img} roundedCircle className="avatar" />
                <p>{integrante.nombre}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SobreNosotros;
