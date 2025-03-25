import "./DetalleProducto.css";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const DetalleProducto = () => {
  const { id } = useParams();

  const productos = JSON.parse(localStorage.getItem("productos"));
  const producto = productos?.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <div className="image-container">
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="product-detail-image"
            />
          </div>
        </Col>

        <Col md={6}>
          <h2 className="product-detail-title">{producto.titulo}</h2>
          <p className="product-detail-category">
            <strong>Categoría:</strong> {producto.categoria}
          </p>
          <p className="product-detail-price">
            <strong>Precio:</strong> ${producto.precio}
          </p>
          <p className="product-description">{producto.descripcion}</p>
          <p className="product-detail-id">
            <strong>Producto ID:</strong> {id}
          </p>

          <button className="btn-agregar" onClick={agregarAlCarrito}>
            Agregar al carrito
          </button>
        </Col>
      </Row>
    </Container>
  );
};

const agregarAlCarrito = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Producto agregado al carrito",
    showConfirmButton: false,
    timer: 1500,
  });
};

export default DetalleProducto;
