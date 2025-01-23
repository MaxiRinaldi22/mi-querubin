import { ProductType } from "./types";

// cambiar el id por un sku
export const AllProducts: ProductType[] = [
  {
    id: 1,
    name: "Mate de ceramica - puntillismo y flores - turquesa y rosado",
    price: 699,
    images: ["/products/mate.png"],
    description:
      "Mate de ceramica con diseño en puntillismo y flores, colores turquesa y rosa.",
    category: "mates",
    stock: 0,
  },
  {
    id: 2,
    name: "Cuadro de mdf - puntillismo y flores - rosado",
    price: 2999,
    images: ["/products/cuadro.png"],
    description:
      "Cuadro de mdf con diseño en puntillismo y flores, color rosado. Medidas 100cm x 100cm.",
    category: "cuadros",
    stock: 0,
  },
  {
    id: 3,
    name: "Taza de ceramica - puntillismo y flores - rosado",
    price: 750,
    images: ["/products/taza.png"],
    description:
      "Taza de ceramica con diseño en puntillismo y flores, color rosado.",
    category: "tazas",
    stock: 1,
  },
  {
    id: 4,
    name: "Maceta de arcilla - flores - turquesa y violeta",
    price: 699,
    images: ["/products/maceta-violeta.png", "/products/taza.png"],
    description:
      "Maceta de arcilla con diseño en flores, colores turquesa y violeta. Medidas 10cm",
    category: "macetas",
    stock: 1,
  },
  {
    id: 5,
    name: "Maceta de arcilla - puntillismo - marron, azul, naranja y blanco",
    price: 699,
    images: ["/products/maceta-marron01.png"],
    description:
      "Maceta de arcilla con diseño en puntillismo, colores marron, azul, naranja y blanco. Medidas 30cm",
    category: "macetas",
    stock: 1,
  },
  {
    id: 6,
    name: "Maceta de arcilla - puntillismo - azul, blanco, naraja y celeste",
    price: 450,
    images: ["/products/maceta-azul.png"],
    description:
      "Maceta de arcilla con diseño en puntillismo, colores azul, blanco, naraja y celeste. Medidas 10cm",
    category: "macetas",
    stock: 0,
  },
  {
    id: 7,
    name: "Maceta de arcilla - puntillismo - marron, azul, naranja y blanco",
    price: 699,
    images: ["/products/maceta-marron02.png"],
    description:
      "Maceta de arcilla con diseño en puntillismo, colores marron, azul, naranja y blanco. Medidas 30cm",
    category: "macetas",
    stock: 1,
  },
];
