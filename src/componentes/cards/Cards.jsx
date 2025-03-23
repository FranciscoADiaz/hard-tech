
import Card from "react-bootstrap/Card";
import { Link } from "react-router";
import "./Cards.css";

const Cards = (producto) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="cards">
        <Card.Img variant="top" src={producto.image} alt={producto.alt} />
        <Card.Body>
          <Card.Title className="text-truncate">{producto.titulo}</Card.Title>
          <Card.Text> ${producto.precio} </Card.Text>
          <Card.Text className="text-truncate">
            {" "}
            {producto.description}{" "}
          </Card.Text>
          <div className="text-center">
            <Link className="boton-card">Ver mas</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
