import { BrowserRouter as Router, Routes, Route } from "react-router";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import Contacto from "./paginas/Contacto";
import NavbarC from "./componentes/navbar/NavbarC";
import SobreNosotros from "./paginas/SobreNosotros";
import Registrarse from "./paginas/Registrarse";
import IniciarSesion from "./paginas/IniciarSesion";
import Carrito from "./paginas/Carrito";
import Footer from "./componentes/footer/Footer";
import './App.css'

import { Search } from "react-bootstrap-icons";


function App() {


  return (
    <>
      <Router>
        <NavbarC />
        <Routes>
          <Route
            path="/"
            element={<PaginaPrincipal/>}
          />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Registrarse" element={<Registrarse />} />
          <Route path="/IniciarSesion" element={<IniciarSesion />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Search" element={<Search/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
