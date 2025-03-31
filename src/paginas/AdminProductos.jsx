import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TablaAdmin from "../componentes/tablas/TablaProductos";
import Swal from "sweetalert2";
import "./AdminProductos.css";


const AdminProductos = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado"));
    if (!usuario || usuario.rol !== "administrador") {
      Swal.fire(
        "Acceso denegado",
        "Solo administradores pueden acceder",
        "error"
      );
      navigate("/");
    }

    const productosGuardados =
      JSON.parse(localStorage.getItem("productos")) || [];
    setProductos(productosGuardados);
  }, [navigate]);

  const eliminarProducto = (id) => {
    Swal.fire({
      title: "¿Eliminar producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then((res) => {
      if (res.isConfirmed) {
        const actualizados = productos.filter((p) => p.id !== id);
        setProductos(actualizados);
        localStorage.setItem("productos", JSON.stringify(actualizados));
        Swal.fire("Eliminado", "Producto eliminado correctamente", "success");
      }
    });
  };

  const editarProducto = (id) => {
    navigate(`/admin/productos/formulario/${id}`);
  };

  return (
    <div className="admin-productos-page">
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="titulo-admin">Administrar Productos</h2>
          <Button
            className="btn-agregar"
            onClick={() => navigate("/admin/productos/formulario")}
          >
            Agregar Producto
          </Button>
        </div>

        <TablaAdmin
          data={productos}
          type="productos"
          onEliminar={eliminarProducto}
          onEditar={editarProducto}
          actualizarLista={() => {
            const productosGuardados =
              JSON.parse(localStorage.getItem("productos")) || [];
            setProductos(productosGuardados);
          }}
        />
      </Container>
    </div>
  );
};

export default AdminProductos;
