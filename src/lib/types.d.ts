export type MainProductsType = {
  id: number;
  title: string;
  img: sting;
};

export type ProductType = {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
  description: string;
  stock: number;
};

export type ProductCartType = {
  product: ProductType;
  quantity: number;
};
