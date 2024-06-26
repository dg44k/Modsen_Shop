import React, { FC } from "react";
import { StyledSlideImage } from "./styled";
import { SliderListItemProps } from "../../types";

const SliderListItem: FC<SliderListItemProps> = ({ image, alt }) => {
  return (
    <div>
      <StyledSlideImage src={image} alt={alt} />
    </div>
  );
};

export default SliderListItem;
