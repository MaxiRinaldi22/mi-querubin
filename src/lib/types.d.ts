export type MainProductsType = {
  id: number;
  title: string;
  img: sting;
};

export type ProductType = {
  id: string;
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

export type FormInfoType = {
  personalInfo: {
    name: string;
    lastName: string;
    document: string;
  };
  directionInfo: {
    direccion: string;
    opcionalDirreccion?: string;
    city: string;
    departament: string;
  };
  contactInfo: {
    phone: string;
    email: string;
  };
  tipo: string;
  notes?: string;
  pickupInfo?: {
    name: string;
    document: string;
  };
};

export type DBType = {
  cartInfo: ProductCartType[];
  formData: FormInfoType;
}