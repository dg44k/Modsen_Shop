export type ProductType = {
  id: string;
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
