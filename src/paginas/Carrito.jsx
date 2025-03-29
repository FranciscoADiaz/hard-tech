// src/paginas/Carrito.jsx
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./Carrito.css";

const Carrito = () => {
  const [productos, setProductos] = useState([]);
  const [cantidades, setCantidades] = useState({});

  useEffect(() => {
    const productosGuardados =
      JSON.parse(localStorage.getItem("carrito")) || [];
    setProductos(productosGuardados);

    const cantidadesIniciales = {};
    productosGuardados.forEach((p) => {
      cantidadesIniciales[p.id] = 1;
    });
    setCantidades(cantidadesIniciales);
  }, []);

  const handleCantidadChange = (id, value) => {
    setCantidades({ ...cantidades, [id]: parseInt(value) });
  };

  const eliminarProducto = (id) => {
    Swal.fire({
      title: "¿Eliminar este producto?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8A2BE2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevosProductos = productos.filter((p) => p.id !== id);
        setProductos(nuevosProductos);
        localStorage.setItem("carrito", JSON.stringify(nuevosProductos));
        Swal.fire("Eliminado", "El producto fue eliminado.", "success");
      }
    });
  };

  const totalFinal = productos.reduce((acc, prod) => {
    const cantidad = cantidades[prod.id] || 1;
    return acc + prod.price * cantidad;
  }, 0);

  const handleComprar = () => {
    Swal.fire({
      icon: "success",
      title: "¡Gracias por tu compra!",
      text: "Recibirás un email con el comprobante.",
    });
    setProductos([]);
    localStorage.removeItem("carrito");
  };

  if (productos.length === 0) {
    return (
      <div className="carrito-vacio-container">
        <h2 className="carrito-vacio">Tu carrito está vacío 🛒</h2>
        <p className="carrito-vacio-texto">
          Agregá productos desde la página principal
        </p>
      </div>
    );
  }

  return (
    <div className="carrito-container">
      <h2 className="carrito-titulo">Tu Carrito</h2>
      {productos.map((producto) => (
        <div key={producto.id} className="carrito-item">
          <img
            src={producto.image}
            alt={producto.title}
            className="carrito-img"
          />
          <div className="carrito-detalles">
            <h3 className="carrito-nombre">{producto.title}</h3>
            <p className="carrito-precio">Precio: ${producto.price}</p>
            <input
              type="number"
              min="1"
              value={cantidades[producto.id]}
              onChange={(e) =>
                handleCantidadChange(producto.id, e.target.value)
              }
              className="carrito-cantidad"
            />
            <p className="carrito-total">
              Total: ${producto.price * (cantidades[producto.id] || 1)}
            </p>
            <button
              className="btn-eliminar"
              onClick={() => eliminarProducto(producto.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <div className="carrito-footer">
        <p className="carrito-total-final">
          Total Final: ${totalFinal.toFixed(2)}
        </p>
        <button className="btn-comprar" onClick={handleComprar}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Carrito;
