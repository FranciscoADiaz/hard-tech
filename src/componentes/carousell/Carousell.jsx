import Carousel from "react-bootstrap/Carousel";

const Carousell = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            src="../../img/banner1.webp"
            alt="Banner Envios Gratis HardTech"
            className="w-100"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src="../../img/banner2.webp"
            alt="Banner HardTech"
            className="w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../../img/banner3.webp"
            alt="Banner Promociones HardTech"
            className="w-100"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousell;
