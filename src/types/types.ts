export type ProductType = {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  description: string;
  rating: RatingType;
};

type RatingType = {
  rate: number;
  count: number;
};
