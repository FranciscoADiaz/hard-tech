import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import DetalleProducto from "./paginas/DetalleProducto";
import NavbarC from "./componentes/navbar/NavbarC";
import SobreNosotros from "./paginas/SobreNosotros";
import Carrito from "./paginas/Carrito";
import Footer from "./componentes/footer/Footer";
import Registrarse from "./paginas/Registrarse";
import IniciarSesion from "./paginas/IniciarSesion";
import Pagina404 from "./paginas/Pagina404";
import AdminProductos from "./paginas/AdminProductos"
import FormAdmin from "./paginas/FormAdmin"; 
import Favoritos from "./paginas/Favoritos";
import "./App.css";
import "./index.css";
import PrivateRouteC from "./componentes/privateroute/PrivateRouteC";

function App() {
  return (
    <Router basename="/hard-tech/">
      <NavbarC />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/user" element={<PaginaPrincipal />} />
        <Route path="/user/Favoritos" element={<Favoritos />} />
        <Route path="/admin" element={<PaginaPrincipal />} />

        <Route path="/user/Carrito" element={<Carrito />} />

        <Route path="/SobreNosotros" element={<SobreNosotros />} />

        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/user/producto/:id" element={<DetalleProducto />} />
        <Route path="/admin/producto/:id" element={<DetalleProducto />} />
        <Route
          path="/admin/productos"
          element={
            <PrivateRouteC rol="admin">
              <AdminProductos />
            </PrivateRouteC>
          }
        />
        <Route path="/admin/productos/formulario" element={<FormAdmin />} />
        <Route path="/admin/productos/formulario/:id" element={<FormAdmin />} />
        <Route
          path="/admin/editar/:id"
          element={
            <PrivateRouteC rol="admin">
              <FormAdmin />
            </PrivateRouteC>
          }
        />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
