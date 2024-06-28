import { FC } from "react";
import { Link } from "react-router-dom";

import { SliderListItemProps } from "../../types";
import { StyledSlideImage } from "./styled";

const SliderListItem: FC<SliderListItemProps> = ({ image, alt, id }) => {
  return (
    <Link to={`/card/${id}`}>
      <StyledSlideImage src={image} alt={alt} />
    </Link>
  );
};

export default SliderListItem;
