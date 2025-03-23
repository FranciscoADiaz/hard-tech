import "./DetalleProducto.css";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const DetalleProducto = () => {
  const { id } = useParams();

  // Datos mockeados o vacíos por ahora
  const product = {
    id: "001",
    name: "Silla Gamer",
    price: 1000,
    category: "Silla gamer",
    description: "silla gamer silla gamer silla gamer",
    stock: 10,
    image:
      "https://imgs.search.brave.com/O56I24RgUCG7-0dieMLllV-H_mW2wR3RuOjrewYp0jM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iYWxh/bXJ1c2guY29tL2Nk/bi9zaG9wL2ZpbGVz/L0JSLTkzMjgyMF8w/MV8xMDAwUFgud2Vi/cD92PTE3MDU1MTY4/MzAmd2lkdGg9MTAw/MA",
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </Card>
        </Col>

        <Col md={6}>
          <h2 className="product-detail-title">{product.name}</h2>
          <p>
            <strong>Categoría:</strong> {product.category}
          </p>
          <p>
            <strong>Precio:</strong> ${product.price}
          </p>
          <p className="product-description">{product.description}</p>
          <p>
            <strong>Stock disponible:</strong> {product.stock}
          </p>
          <p>
            <strong>Producto ID</strong> {id}
          </p>

          <button
            variant="outline-dark"
            className="btn-agregar"
            onClick={agregarAlCarrito}
          >
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
