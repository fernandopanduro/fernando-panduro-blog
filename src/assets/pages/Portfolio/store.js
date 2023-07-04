import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 12,
  pages: 11.5,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "MG Motor México",
      image: "https://raw.githubusercontent.com/fernandopanduro/fernando-panduro-blog/1e05fabb71115f203dec3c43a842369950011cba/src/assets/pictures/img/mg.png",
      aspect: 1.51,
      text: "Potenciando la presencia digital de MG Motors: Contribuí al éxito de MG Motors al brindar soporte y mejoras continuas a su página web, optimizando su rendimiento, asegurando la usabilidad y ofreciendo una experiencia en línea fluida para los usuarios."
    },
    {
      offset: 2,
      factor: 2.25,
      header: "Eorum",
      image: "https://raw.githubusercontent.com/fernandopanduro/fernando-panduro-blog/main/src/assets/pictures/img/eorum.jpg",
      aspect: 1.5037,
      text:
        "Sumérgete en el ecommerce de moda urbana japonesa con Eorum: Se dedica a proporcionar la mejor selección de ropa y accesorios de estilo streetwear japonés para hombres, ofreciendo Sukajan Jackets, camisetas, sudaderas con capucha y una amplia gama de accesorios que capturan la influencia de la moda callejera japonesa."
    },
    {
      offset: 3,
      factor: 1.75,
      header: "Kia",
      image: "https://raw.githubusercontent.com/fernandopanduro/fernando-panduro-blog/1e05fabb71115f203dec3c43a842369950011cba/src/assets/pictures/img/kia.jpg",
      aspect: 1.55,
      text:
        "Conectando a Kia México con su audiencia en línea: Formé parte del equipo encargado de fortalecer la conexión entre Kia México y su audiencia a través de su página web, implementando mejoras estratégicas, contenido relevante y una navegación intuitiva para maximizar el compromiso del usuario."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Mazy",
      image: "https://raw.githubusercontent.com/fernandopanduro/fernando-panduro-blog/1e05fabb71115f203dec3c43a842369950011cba/src/assets/pictures/img/mazy.jpg",
      aspect: 1.5,
      text:
        "Empoderando tu experiencia culinaria en movimiento: A través del desarrollo de un ecommerce personalizado, contribuí a llevar Mazy a tus manos, permitiéndote disfrutar de comidas deliciosas y bien calientes, sin importar dónde te encuentres."
    },
    {
      offset: 5,
      factor: 2.0,
      header: "Stania",
      image: "https://raw.githubusercontent.com/fernandopanduro/fernando-panduro-blog/main/src/assets/pictures/img/Stania.jpg",
      aspect: 0.665,
      text:
        "Elevando la experiencia de compra en línea con Stania Clothing: Ayudé a diseñar y programar el sitio web de Stania Clothing, brindando una experiencia de usuario intuitiva y atractiva, donde las mujeres pueden explorar colecciones de ropa contemporánea y encontrar piezas únicas que reflejen su estilo individual."
    },
    { offset: 7, 
      factor: 1.05, 
      header: "vendetta", 
      image: "https://raw.githubusercontent.com/fernandopanduro/fernando-panduro-blog/main/src/assets/pictures/img/Vendetta.jpg", 
      aspect: 1.77, 
      text: "Un mundo de estilo desafiante y cautivador. Como frontend developer, desempeñé un papel clave en la creación de la landing page de Vendetta, una tienda de ropa para mujeres que irradia audacia y originalidad. Desde la elección de colores vibrantes hasta la implementación de diseños atractivos, trabajé para crear una experiencia visualmente impactante que refleje la esencia vanguardista de la marca. Sumérgete en nuestro universo de moda y experimenta la excelencia del frontend en cada detalle en Vendetta." 
    },
    { offset: 8.5, 
      factor: 1.05, 
      header: "Llantera Garcia", 
      image: "https://raw.githubusercontent.com/fernandopanduro/fernando-panduro-blog/1e05fabb71115f203dec3c43a842369950011cba/src/assets/pictures/img/llantera.jpg", 
      aspect: 1.77, 
      text: "Tejiendo el éxito digital: Como desarrollador web, tejí las páginas web con precisión y creatividad, creando una plataforma digital que facilitó la interacción con los clientes, aumentó la visibilidad en línea y fomentó el crecimiento sostenido del negocio." 
    },
    { offset: 9.7, 
      factor: 1.05, 
      header: "Energy", 
      image: "https://raw.githubusercontent.com/fernandopanduro/fernando-panduro-blog/1e05fabb71115f203dec3c43a842369950011cba/src/assets/pictures/img/energy.jpg", 
      aspect: 1.77, 
      text: "Desatando el poder del sol para un mundo sostenible. Como parte del equipo de desarrollo, creé una landing page cautivadora para Energy, una empresa líder en la comercialización de paneles solares de alta calidad. Convierte la energía solar en electricidad renovable y sé parte del cambio hacia un futuro más limpio y consciente con nuestro planeta." 
    },

  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8.5, pos: new Vector3(), scale: 1.25, factor: 1.5 },
    { x: 0, offset: 9.5, pos: new Vector3(), scale: 1.25, factor: 1.5 },
    { x: 0, offset: 11, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
