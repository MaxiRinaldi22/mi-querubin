import { MainProductsType, ProductType } from "./types";

export const categories = [
  "Mates",
  "Macetas",
  "Cuadros",
  "Llaveros",
  "Porta llaves",
  "Porta celular",
  "Porta incienso",
  "Tazas",
  "Colgantes",
];

export const departamentos = [
  "Artigas",
  "Canelones",
  "Cerro Largo",
  "Colonia",
  "Durazno",
  "Flores",
  "Florida",
  "Lavalleja",
  "Maldonado",
  "Montevideo",
  "Paysandú",
  "Río Negro",
  "Rivera",
  "Rocha",
  "Salto",
  "San José",
  "Soriano",
  "Tacuarembó",
  "Treinta y Tres"
];



export const MainProducts: MainProductsType[] = [
  { id: 1, title: "Mates", img: "/svg/mates-svg.png" },
  { id: 2, title: "Macetas", img: "/svg/macetas-svg.png" },
  { id: 3, title: "Cuadros", img: "/svg/cuadros-svg.png" },
  { id: 4, title: "Llaveros", img: "/svg/llaveros-svg.png" },
];

// Mock product data
export const OutstandingProducts: ProductType[] = [
  {
    id: "1",
    name: "Mate de ceramica - puntillismo y flores - turquesa y rosado",
    price: 699,
    images: ["/products/mate.png"],
    description:
      "Mate de ceramica con diseño en puntillismo y flores, colores turquesa y rosa.",
    category: "mates",
    stock: 1,
  },
  {
    id: "2",
    name: "Cuadro de mdf - puntillismo y flores - rosado",
    price: 2999,
    images: ["/products/cuadro.png"],
    description:
      "Cuadro de mdf con diseño en puntillismo y flores, color rosado. Medidas 100cm x 100cm.",
    category: "cuadros",
    stock: 0,
  },
  {
    id: "3",
    name: "Taza de ceramica - puntillismo y flores - rosado",
    price: 750,
    images: ["/products/taza.png"],
    description:
      "Taza de ceramica con diseño en puntillismo y flores, color rosado.",
    category: "tazas",
    stock: 1,
  },
  {
    id: "4",
    name: "Maceta de arcilla - flores - turquesa y violeta",
    price: 699,
    images: ["/products/maceta-violeta.png"],
    description:
      "Maceta de arcilla con diseño en flores, colores turquesa y violeta. Medidas 10cm",
    category: "macetas",
    stock: 0,
  },
];
