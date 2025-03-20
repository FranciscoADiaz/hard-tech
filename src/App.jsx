import { BrowserRouter as Router, Routes, Route } from "react-router";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import Productos from "./paginas/Productos";
import Contacto from "./paginas/Contacto";
import NavbarC from "./componentes/navbar/NavbarC";
import SobreNosotros from "./paginas/SobreNosotros";
import Registrarse from "./paginas/Registrarse";
import IniciarSesion from "./paginas/IniciarSesion";


function App() {
  return (
    <>
      <Router>
        <NavbarC />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/DetalleProducto/:id" element={<Productos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Registrarse" element={<Registrarse />} />
          <Route path="/IniciarSesion" element={<IniciarSesion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
