export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type TCartProduct = TProduct & {
  quantity: number;
};
