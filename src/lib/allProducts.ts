import { ProductType } from "./types";

export const AllProducts: ProductType[] = [
  {
    id: 1,
    name: "Mate de ceramica - puntillismo y flores - turquesa y rosado",
    price: 699,
    images: ["/products/mate.png"],
    description:
      "Mate de ceramica con diseño en puntillismo y flores, colores turquesa y rosa.",
    category: "mates",
    stock: 1
  },
  {
    id: 2,
    name: "Cuadro de mdf - puntillismo y flores - rosado",
    price: 2999,
    images: ["/products/cuadro.png"],
    description:
      "Cuadro de mdf con diseño en puntillismo y flores, color rosado. Medidas 100cm x 100cm.",
    category: "cuadros",
    stock: 1
  },
  {
    id: 3,
    name: "Taza de ceramica - puntillismo y flores - rosado",
    price: 750,
    images: ["/products/taza.png"],
    description:
      "Taza de ceramica con diseño en puntillismo y flores, color rosado.",
    category: "tazas",
    stock: 1
  },
  {
    id: 4,
    name: "Maceta de arcilla - flores - turquesa y violeta",
    price: 699,
    images: ["/products/maceta.png", "/products/taza.png"],
    description:
      "Maceta de arcilla con diseño en flores, colores turquesa y violeta. Medidas 10cm",
    category: "macetas",
    stock: 1
  },
];
