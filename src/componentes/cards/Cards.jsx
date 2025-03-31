import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Cards.css";

const Cards = ({ producto }) => {
  const navigate = useNavigate();
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavorito(favs.some((p) => p.id === producto.id));
  }, [producto.id]);

  const toggleFavorito = () => {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];

    let nuevosFavs;
    if (favorito) {
      nuevosFavs = favs.filter((p) => p.id !== producto.id);
    } else {
      nuevosFavs = [...favs, producto];
    }

    localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));
    setFavorito(!favorito);
  };

  return (
    <div className="home-product-card position-relative">
      <span className="card-favorito-icon" onClick={toggleFavorito}>
        {favorito ? "★" : "☆"}
      </span>
      <img
        src={producto.imagen}
        alt={producto.descripcion}
        className="home-product-image"
      />
      <h3 className="home-product-title">{producto.titulo}</h3>
      <p className="home-product-description">{producto.descripcion}</p>
      <p className="home-product-price">Precio: ${producto.precio}</p>
      <button
        className="home-btn-agregar"
        onClick={() => navigate(`/producto/${producto.id}`)}
      >
        Ver Detalle
      </button>
    </div>
  );
};

export default Cards;
