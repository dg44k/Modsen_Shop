import { ProductType } from "@/types/types";

export interface SliderDotsProps {
  slides: ProductType[];
}

export interface SliderProps {
  slides: ProductType[];
}

export interface SliderListItemProps {
  isActive: boolean;
  image: string;
  alt: string;
}
