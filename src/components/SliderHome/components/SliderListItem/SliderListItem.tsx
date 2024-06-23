import React from "react";
import { StyledSlideImage } from "./styled";

interface SliderListItemProps {
  isActive: boolean;
  image: string;
  alt: string;
}

const SliderListItem: React.FC<SliderListItemProps> = props => {
  return (
    <div>
      <StyledSlideImage src={props.image} alt={props.alt} />
    </div>
  );
};

export default SliderListItem;
