import { Button, Table } from "react-bootstrap";
import "./TablaAdmin.css";

const TablaAdmin = ({ data = [], onEditar, onEliminar }) => {
  return (
    <div className="tabla-admin-container">
      <h2 className="tabla-admin-titulo">Listado de Productos</h2>
      {data.length === 0 ? (
        <p className="tabla-admin-vacio">No hay productos cargados.</p>
      ) : (
        <Table bordered hover responsive className="tabla-admin">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>{producto.categoria}</td>
                <td>
                  <img
                    src={producto.imagen}
                    alt={producto.titulo}
                    className="tabla-admin-img"
                  />
                </td>
                <td>
                  <Button
                    className="btn-editar"
                    onClick={() => onEditar(producto.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    className="btn-eliminar"
                    onClick={() => onEliminar(producto.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TablaAdmin;
