import React from "react";
import { StyledSlideImage } from "./styled";
import { SliderListItemProps } from "../../types";

const SliderListItem: React.FC<SliderListItemProps> = props => {
  return (
    <div>
      <StyledSlideImage src={props.image} alt={props.alt} />
    </div>
  );
};

export default SliderListItem;
