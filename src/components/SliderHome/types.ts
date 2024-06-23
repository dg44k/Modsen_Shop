import { ProductType } from "@/types/types";

export interface SliderDotsProps {
  products: ProductType[];
}

export interface SliderProps {
  products: ProductType[];
}

export interface SliderListItemProps {
  isActive: boolean;
  image: string;
  alt: string;
}
