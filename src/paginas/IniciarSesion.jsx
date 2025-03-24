import FormC from "../componentes/form/FormC";
import { Container } from "react-bootstrap";

const IniciarSesion = () => {
  return (
    <>
      <Container className="w-100" >
        <FormC idPage="login" />
      </Container>
    </>
  );
};

export default IniciarSesion;
