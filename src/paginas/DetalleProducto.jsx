import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap";
import "./DetalleProducto.css";

const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productoSeleccionado = localStorage.getItem("productoSeleccionado");
    const productosTotales =
      JSON.parse(localStorage.getItem("productos")) || [];

    if (productoSeleccionado) {
      const parseado = JSON.parse(productoSeleccionado);
      if (parseado.id === parseInt(id)) {
        setProducto(parseado);
        return;
      }
    }

    const productoEncontrado = productosTotales.find(
      (p) => p.id === parseInt(id)
    );
    if (productoEncontrado) {
      setProducto(productoEncontrado);
      return;
    }

    Swal.fire({
      icon: "error",
      title: "Producto no encontrado",
      text: "No pudimos cargar el producto. Serás redirigido al inicio.",
    });
    navigate("/");
  }, [id, navigate]);

  const agregarAlCarrito = () => {
    const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado"));
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (!usuario) {
      Swal.fire({
        icon: "info",
        title: "Debes iniciar sesión",
        text: "Serás redirigido al login.",
        timer: 2000,
        showConfirmButton: false,
      });
      setTimeout(() => navigate("/IniciarSesion"), 2000);
      return;
    }

    if (usuario.rol === "administrador") {
      Swal.fire({
        icon: "info",
        title: "Función no disponible",
        text: "Los administradores no pueden agregar productos al carrito.",
      });
      return;
    }

    const yaExiste = carrito.find((p) => p.id === producto.id);
    if (yaExiste) {
      Swal.fire({
        icon: "info",
        title: "Ya está en el carrito",
        text: "Podés modificar la cantidad desde el carrito.",
      });
      return;
    }

    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: "Se cargó correctamente al carrito.",
    });
  };

  const comprarAhora = () => {
    const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado"));

    if (!usuario) {
      Swal.fire({
        icon: "info",
        title: "Debes iniciar sesión",
        text: "Serás redirigido al login.",
        timer: 2000,
        showConfirmButton: false,
      });
      setTimeout(() => navigate("/IniciarSesion"), 2000);
    } else {
      Swal.fire({
        icon: "success",
        title: "Función en desarrollo",
        text: "Próximamente vas a poder pagar con MercadoPago 💳",
      });
    }
  };

  if (!producto) {
    return <div className="text-center my-5">Cargando producto...</div>;
  }

  return (
    <div className="detalle-producto-page">
      <Container className="my-5">
        <Row>
          <Col md={6} className="text-center">
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="product-detail-image"
            />
          </Col>
          <Col md={6}>
            <h2 className="product-detail-title">{producto.titulo}</h2>
            <p className="product-detail-price">Precio: ${producto.precio}</p>
            <p className="product-description">{producto.descripcion}</p>
            <p className="product-detail-category">
              Categoría: {producto.categoria || "Sin categoría"}
            </p>
            <p className="product-detail-id">ID: {producto.id}</p>

            <button
              className="btn-agregar text-center"
              onClick={agregarAlCarrito}
            >
              Agregar al carrito
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetalleProducto;
