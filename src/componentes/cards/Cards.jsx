import { useNavigate } from "react-router-dom";
import "./Cards.css";

const Cards = ({ producto }) => {
  const navigate = useNavigate();

  const handleVerDetalle = () => {
    localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
    navigate(`/producto/${producto.id}`);
  };

  return (
    <div className="home-product-card">
      <img
        src={producto.imagen}
        alt={producto.descripcion}
        className="home-product-image"
      />
      <h3 className="home-product-title">{producto.titulo}</h3>
      <p className="home-product-description">{producto.descripcion}</p>
      <p className="home-product-price">Precio: ${producto.precio}</p>
      <button className="home-btn-agregar" onClick={handleVerDetalle}>
        Ver Detalle
      </button>
    </div>
  );
};

export default Cards;
