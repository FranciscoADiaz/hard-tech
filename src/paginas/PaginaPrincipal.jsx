import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./PaginaPrincipal.css";
import Carousell from "../componentes/carousell/Carousell";
import Buscador from "../componentes/buscador/Buscador";
import Cards from "../componentes/cards/Cards";

const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const productosLS = JSON.parse(localStorage.getItem("productos"));

    if (productosLS && productosLS.length > 0) {
      const actualizados = productosLS.map((p) => ({
        ...p,
        status: p.status || "enable",
      }));
      const habilitados = actualizados.filter((p) => p.status === "enable");

      setProductos(habilitados);
      setFilteredProductos(habilitados);
      localStorage.setItem("productos", JSON.stringify(actualizados));
    } else {
      const productosIniciales = [
        {
          id: 1,
          titulo: "Procesador Intel Core i9 14900K",
          descripcion: "Procesador Intel Core i9 14900K",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38615_Procesador_Intel_Core_i9_14900K_6.0GHz_Turbo_Socket_1700_Raptor_Lake_82539926-grn.jpg",
          precio: 450000,
          categoria: "procesadores",
          status: "enable",
        },
        {
          id: 2,
          titulo: 'Monitor Gamer ASUS 27"',
          descripcion: "144Hz, 1ms, Full HD",
          imagen:
            "https://http2.mlstatic.com/D_Q_NP_727419-MLU72965182576_112023-O.webp",
          precio: 350000,
          categoria: "monitores",
          status: "enable",
        },
        {
          id: 3,
          titulo: "Teclado Mecánico Redragon",
          descripcion: "Switches Red, RGB",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_44144_Teclado_Mecanico_Asus_ROG_Strix_XA12_Scope_II_Switch_RX_Red_RGB_1d86f117-grn.jpg",
          precio: 25000,
          categoria: "perifericos",
          status: "enable",
        },
        {
          id: 4,
          titulo: "Mouse Logitech G502",
          descripcion: "Sensor HERO 25K, 11 botones programables",
          imagen:
            "https://mla-s1-p.mlstatic.com/738372-MLA40024494003_122019-F.jpg",
          precio: 30000,
          categoria: "perifericos",
          status: "enable",
        },
        {
          id: 5,
          titulo: "Procesador AMD Ryzen 7 5800X",
          descripcion: "8 núcleos, 16 hilos, 4.7GHz",
          imagen:
            "https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-5-5500-svideo-ccooler-0.jpg",
          precio: 149999,
          categoria: "procesadores",
          status: "enable",
        },
        {
          id: 6,
          titulo:
            "Silla Gamer Vertagear SL5800 HygennX Carbon Black Ergonomic (Peso MAX. 113kg)",
          descripcion:
            "Diseño ergonómico, reposabrazos ajustables, soporte lumbar, respaldo alto, transpirabilidad.",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43253_Silla_Gamer_Vertagear_SL5800_HygennX_Black_White_Ergonomic_Peso_MAX._113kg_d54fd7f9-grn.jpg",
          precio: 523999,
          categoria: "Sillas",
          status: "enable",
        },
        {
          id: 7,
          titulo: 'Monitor Gamer Acer Nitro 27" IPS 180Hz',
          descripcion: "Pantalla inmersiva de 27 pulgadas, AMD FreeSync",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40512_Monitor_Gamer_Acer_Nitro_27__KG271_M3biip_Widescreen_IPS_1080p_180Hz_AMD_FreeSync_bb277898-grn.jpg",
          precio: 314999,
          categoria: "monitores",
          status: "enable",
        },
        {
          id: 8,
          titulo: "Gabinete ASUS ROG Hyperion",
          descripcion: "Vidrio templado, ARGB, USB-C, robusto",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39661_Gabinete_ASUS_ROG_Hyperion_GR701_E-ATX_Vidrio_Templado_4x_140mm_ARGB_Fan_USB-C_Fast_Charge_Black_070795af-grn.jpg",
          precio: 69455,
          categoria: "gabinetes",
          status: "enable",
        },
        {
          id: 9,
          titulo: "Mother MSI PRO B760M-E DDR4",
          descripcion: "Compatible con Intel Gen 12-13-14, DDR4, micro-ATX",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39800_Mother_MSI_PRO_B760M-E_DDR4_S1700_f8942f85-grn.jpg",
          precio: 152999,
          categoria: "mothers",
          status: "enable",
        },
        {
          id: 10,
          titulo: "Auriculares Logitech G435 Wireless",
          descripcion: "Livianos, Bluetooth + Lightspeed, color blanco",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39691_Auriculares_Logitech_G435_Lightspeed_Wireless_Bluetooth_White___2351d4a8-grn.jpg",
          precio: 124379,
          categoria: "perifericos",
          status: "enable",
        },
        {
          id: 11,
          titulo: "Micrófono Asus ROG STRIX Carnyx RGB",
          descripcion: "USB-C, RGB AuraSync, sonido premium",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41443_Microfono_Asus_ROG_STRIX_Carnyx_RGB_AuraSync_USB-C_Black_ace5d37f-grn.jpg",
          precio: 288999,
          categoria: "perifericos",
          status: "enable",
        },
        {
          id: 12,
          titulo: "Laptop HP Pavilion 15",
          descripcion: 'Intel i7, 16GB RAM, 512GB SSD, 15.6" FHD',
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_44049_Notebook_HP_Victus_15-FA0033_15.6__i5-12450H_8GB_SSD_512GB_RTX3050_FHD_144Hz_Win11_5782adea-grn.jpg",
          precio: 899999,
          categoria: "laptops",
          status: "enable",
        },
        {
          id: 13,
          titulo: "RAM Patriot DDR5 64GB Viper RGB",
          descripcion: "2x32GB 6000MHz CL30, XMP 3.0 / AMD EXPO",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39521_Memoria_Patriot_DDR5_32GB_2x16GB_6400MHz_Viper_Venom_RGB_CL32_Intel_XMP_3.0_818c167a-grn.jpg",
          precio: 240955,
          categoria: "memorias",
          status: "enable",
        },
        {
          id: 14,
          titulo: "Joystick ASUS ROG Raikiri Pro OLED",
          descripcion: "Wireless 2.4GHz, Bluetooth, Xbox/PC",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_37815_Joystick_ASUS_ROG_Raikiri_Pro_OLED_Wireless_2.4Ghz_Bluetooth_PC__XBOX_solo_cableado_0594364d-grn.jpg",
          precio: 231955,
          categoria: "joystick",
          status: "enable",
        },
        {
          id: 15,
          titulo: "Placa de Video ASUS RTX 4060 8GB OC",
          descripcion: "GDDR6, rendimiento 1080p, dual fan",
          imagen:
            "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_42576_Placa_de_Video_ASUS_Dual_GeForce_RTX_4060_8GB_GDDR6_OC_V2_a7b6bed1-grn.jpg",
          precio: 480000,
          categoria: "placa de video",
          status: "enable",
        },
      ];

      setProductos(productosIniciales);
      setFilteredProductos(productosIniciales);
      localStorage.setItem("productos", JSON.stringify(productosIniciales));
    }
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterProducts(term, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, category);
  };

  const filterProducts = (term, category) => {
    let filtered = productos.filter((producto) =>
      producto.titulo.toLowerCase().includes(term.toLowerCase())
    );

    if (category) {
      filtered = filtered.filter((producto) => producto.categoria === category);
    }

    setFilteredProductos(filtered);
  };

  return (
    <>
      <Carousell />
      <Buscador
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
      />
      <Container fluid className="home-container">
        <Row className="px-4 my-5 gx-3 gy-4">
          {filteredProductos.map((producto) => (
            <Col sm="12" md="6" lg="4" key={producto.id} className="my-3">
              <Cards producto={producto} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
