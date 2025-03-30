import { useState } from "react";
import "./Buscador.css";

const Buscador = ({ onSearch, onCategoryChange }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onCategoryChange(e.target.value);
  };

  return (
    <section className="search buscador">
      <input
        type="search"
        placeholder="Buscar"
        className="search-bar"
        value={search}
        onChange={handleSearchChange}
      />
      <select
        className="category-filter"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="">Todas las categorías</option>
        <option value="laptops">Laptops</option>
        <option value="monitores">Monitores</option>
        <option value="perifericos">Periféricos</option>
        <option value="procesadores">Procesadores</option>
        <option value="Sillas">Sillas</option>
        <option value="gabinetes">Gabinetes</option>
        <option value="mothers">Mothers</option>
        <option value="memorias">Memorias</option>
        <option value="joystick">Joysticks</option>
        <option value="placa de video">Placas de Video</option>
      </select>
    </section>
  );
};

export default Buscador;
