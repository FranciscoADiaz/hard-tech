import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import DetalleProducto from "./paginas/DetalleProducto";
import Contacto from "./paginas/Contacto";
import NavbarC from "./componentes/navbar/NavbarC";
import SobreNosotros from "./paginas/SobreNosotros";
import Carrito from "./paginas/Carrito";
import Footer from "./componentes/footer/Footer";
import "./App.css";
import "./index.css";
import Registrarse from "./paginas/Registrarse";
import IniciarSesion from "./paginas/IniciarSesion";

function App() {
  return (
    <BrowserRouter basename="/hard-tech">
      <NavbarC />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
