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

export const MainProducts: MainProductsType[] = [
  { id: 1, title: "Mates", img: "/products/mate.png" },
  { id: 2, title: "Macetas", img: "/products/maceta.png" },
  { id: 3, title: "Cuadros", img: "/products/cuadro.png" },
  { id: 4, title: "Tazas", img: "/products/taza.png" },
];


// Mock product data
export const OutstandingProducts: ProductType[] = [
  { id: 1, name: 'Mate de ceramica - puntillismo y flores - turquesa y rosado', price: 699, image: '/products/mate.png', description: 'Mate de ceramica con diseño en puntillismo y flores, colores turquesa y rosa.', category: 'mates' },
  { id: 2, name: 'Cuadro de mdf - puntillismo y flores - rosado', price: 2999, image: '/products/cuadro.png', description:'Cuadro de mdf con diseño en puntillismo y flores, color rosado. Medidas 100cm x 100cm.', category: 'cuadros' },
  { id: 3, name: 'Taza de ceramica - puntillismo y flores - rosado', price: 750, image: '/products/taza.png', description: 'Taza de ceramica con diseño en puntillismo y flores, color rosado.', category: 'tazas' },
  { id: 4, name: 'Maceta de arcilla - flores - turquesa y violeta', price: 699, image: '/products/maceta.png', description: 'Maceta de arcilla con diseño en flores, colores turquesa y violeta. Medidas 10cm', category: 'macetas' },
]

