import { Col, Container, Row } from "react-bootstrap";
import Carousell from "../componentes/carousell/Carousell";
import Cards from "../componentes/cards/Cards";
import { useEffect, useState} from "react";
import Buscador from "../componentes/buscador/Buscador";
const HomePage = () => {

const productos = [
  {
    id: 1,
    titulo: "Procesador Intel Core i9 14900K",
    descripcion: "Procesador Intel Core i9 14900K",
    imagen:
      "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38615_Procesador_Intel_Core_i9_14900K_6.0GHz_Turbo_Socket_1700_Raptor_Lake_82539926-grn.jpg",
    precio: 624.74,
    categoria: "laptops",
  },
  {
    id: 2,
    titulo: 'Monitor Gamer ASUS 27"',
    descripcion: "144Hz, 1ms, Full HD",
    imagen:
      "https://http2.mlstatic.com/D_Q_NP_727419-MLU72965182576_112023-O.webp",
    precio: 80.0,
    categoria: "monitores",
  },
  {
    id: 3,
    titulo: "Teclado Mecánico Redragon",
    descripcion: "Switches Red, RGB",
    imagen:
      "https://twister.com.ar/wp-content/uploads/2020/02/K552-BB-2.png.webp",
    precio: 25000,
    categoria: "perifericos",
  },
  {
    id: 4,
    titulo: "Mouse Logitech G502",
    descripcion: "Sensor HERO 25K, 11 botones programables",
    imagen: "https://mla-s1-p.mlstatic.com/738372-MLA40024494003_122019-F.jpg",
    precio: 30000,
    categoria: "perifericos",
  },
  {
    id: 5,
    titulo: "Procesador AMD Ryzen 7 5800X",
    descripcion: "8 núcleos, 16 hilos, 4.7GHz",
    imagen:
      "https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-5-5500-svideo-ccooler-0.jpg",
    precio: 150000,
    categoria: "procesadores",
  },
  {
    id: 6,
    titulo:
      "Silla Gamer Vertagear SL5800 HygennX Carbon Black Ergonomic (Peso MAX. 113kg)",
    descripcion:
      "La silla gamer Vertagear SL5800 suele tener un diseño ergonómico, con un acabado en color negro y detalles en carbono. Suele estar equipada con características como reposabrazos ajustables, soporte lumbar y un alto respaldo que proporciona comodidad durante largas sesiones de juego. La base es generalmente robusta para soportar un peso máximo de hasta 113 kg. Además, puede estar tapizada con materiales transpirables que favorecen la ventilación. ",
    imagen:
      "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43255_Silla_Gamer_Vertagear_SL5800_HygennX_Carbon_Black_Ergonomic__Peso_MAX._113kg__0e8d00e8-grn.jpg",
    precio: 523.99,
    categoria: "Sillas",
  },
  {
    id: 7,
    titulo:
      "Monitor Gamer Acer Nitro 27 KG271 M3biip Widescreen IPS 1080p 180Hz AMD FreeSync",
    descripcion:
      "Tamaño de 27 pulgadas, lo que proporciona una pantalla amplia para una experiencia inmersiva",
    imagen:
      "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40512_Monitor_Gamer_Acer_Nitro_27__KG271_M3biip_Widescreen_IPS_1080p_180Hz_AMD_FreeSync_bb277898-grn.jpg",
    precio: 315.0,
    categoria: "monitores",
  },
  {
    id: 8,
    titulo:
      "Gabinete ASUS ROG Hyperion GR701 E-ATX Vidrio Templado 4x 140mm ARGB Fan USB-C Fast Charge Black",
    descripcion:
      "Gabinete con vidrio templado de color negro con fuente en posicion superior",
    imagen:
      "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39661_Gabinete_ASUS_ROG_Hyperion_GR701_E-ATX_Vidrio_Templado_4x_140mm_ARGB_Fan_USB-C_Fast_Charge_Black_070795af-grn.jpg",
    precio: 69.455,
    categoria: "gabinetes",
  },
  {
    id: 9,
    titulo: "Mother MSI PRO B760M-E DDR4 S1700",
    descripcion:
      "La MSI PRO B760M-P DDR5 es una placa madre micro-ATX diseñada para procesadores Intel de 12.ª, 13.ª y 14.ª generación con socket LGA 1700. Soporta memoria DDR5 de hasta 6800+ MHz (OC), brindando mayor velocidad y eficiencia energética.",
    imagen:
      "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39800_Mother_MSI_PRO_B760M-E_DDR4_S1700_f8942f85-grn.jpg",
    precio: 152.999,
    categoria: "mothers",
  },
  {
    id: 10,
    titulo: "Auriculares Logitech G435 Lightspeed Wireless Bluetooth White*	",
    descripcion:
      "Los auriculares Logitech G435 Lightspeed Wireless Bluetooth White son unos audífonos inalámbricos diseñados para gaming y uso diario.",
    imagen:
      "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39691_Auriculares_Logitech_G435_Lightspeed_Wireless_Bluetooth_White___2351d4a8-grn.jpg",
    precio: 124.379,
    categoria: "perifericos",
  },
  {
    id: 11,
    titulo: "Microfono Asus ROG STRIX Carnyx RGB AuraSync USB-C Black",
    descripcion:
      "El micrófono ASUS ROG STRIX Carnyx RGB AuraSync USB-C Black es un micrófono premium diseñado para streaming, gaming y creación de contenido.",
    imagen:
      "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41443_Microfono_Asus_ROG_STRIX_Carnyx_RGB_AuraSync_USB-C_Black_ace5d37f-grn.jpg",
    precio: 288.999,
    categoria: "perifericos",
  },
  {
    id: 12,
    titulo: "Laptop HP Pavilion 15",
    descripcion:
      "Laptop de 15.6 pulgadas, procesador Intel Core i7, 16GB RAM y 512GB SSD.",
    imagen:
      "https://gselectronic.com.ar/wp-content/uploads/2024/03/HP-Pavilion-Laptop-15-eg0048nr-1.jpg",
    precio: 899.999,
    categoria: "Laptops",
  },
  {
    id: 13,
    titulo:
      "Patriot DDR5 64GB (2x32GB) 6000MHz Viper Venom RGB CL30 Intel XMP 3.0 / AMD EXPO",
    descripcion:
      "La Patriot DDR5 64GB (2x32GB) 6000MHz Viper Venom RGB CL30 es un kit de memoria RAM de alto rendimiento, diseñado para gamers, creadores de contenido y entusiastas del hardware.",
    imagen:
      "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39521_Memoria_Patriot_DDR5_32GB__2x16GB__6400MHz_Viper_Venom_RGB_CL32_Intel_XMP_3.0_818c167a-grn.jpg",
    precio: 240.955,
    categoria: "memorias",
  },
  {
    id: 14,
    titulo:
      "Joystick ASUS ROG Raikiri Pro OLED Wireless 2.4Ghz Bluetooth PC // XBOX solo cableado",
    descripcion:
      "El ASUS ROG Raikiri Pro OLED Wireless es un control premium diseñado para PC y Xbox (con conexión por cable). ",
    imagen:
      "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41806_Joystick_ASUS_ROG_Raikiri_Pro_OLED_Wireless_2.4Ghz_Bluetooth_PC____XBOX_solo_cableado_4336b8fb-grn.jpg",
    precio: 231.955,
    categoria: "joystick",
  },
  {
    id: 15,
    titulo: "Placa de Video ASUS Dual GeForce RTX 4060 8GB GDDR6 OC V2",
    descripcion:
      "La ASUS Dual GeForce RTX 4060 8GB GDDR6 OC V2 es una tarjeta gráfica de alto rendimiento diseñada para gaming en 1080p y productividad avanzada.",
    imagen:
      "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_42576_Placa_de_Video_ASUS_Dual_GeForce_RTX_4060_8GB_GDDR6_OC_V2_a7b6bed1-grn.jpg",
    precio: 478.65,
    categoria: "placa de video",
  },
];

  const obtenerProductos = async () => {
    try {
      const productosApi = await fetch('productos');
      const data = await productosApi.json();
      localStorage.setItem('productos', JSON.stringify(data))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      <Carousell />
      <Buscador/>
      <Container className="contenedorPP">
        <Row className="px-4 my-5">
          {productos.map((producto) => (
            <Col sm="12" md="6" lg="4" key={producto.id} className="my-3">
              <Cards
                image={producto.imagen}
                alt={producto.descripcion}
                description={producto.descripcion}
                idProducto={producto.id}
                titulo={producto.titulo}
                precio={producto.precio}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
