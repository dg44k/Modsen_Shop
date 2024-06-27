import React, { FC } from "react";
import { StyledSlideImage } from "./styled";
import { SliderListItemProps } from "../../types";
import { Link } from "react-router-dom";

const SliderListItem: FC<SliderListItemProps> = ({ image, alt, id }) => {
  return (
    <Link to={`/card/${id}`}>
      <StyledSlideImage src={image} alt={alt} />
    </Link>
  );
};

export default SliderListItem;
