import { BrowserRouter as Router, Routes, Route } from "react-router";
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


function App() {
  return (
    <>
      <div className="fondo-general">
        <Router>
          <NavbarC />
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/SobreNosotros" element={<SobreNosotros />} />
            <Route path="/Registrarse" element={<Registrarse />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/DetalleProducto/:id" element={<DetalleProducto />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
