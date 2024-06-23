export type ProductType = {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  description: string;
  rating: ratingType;
};

type ratingType = {
  rate: number;
  count: number;
};
