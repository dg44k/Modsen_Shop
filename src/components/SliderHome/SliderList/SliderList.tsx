import React from "react";
import SliderListItem from "../SliderListItem/SliderListItem";
import { StyledSliderList } from "./styled";

const SliderList: React.FC = () => {
  return (
    <StyledSliderList>
      <SliderListItem />
      <SliderListItem />
      <SliderListItem />
      <SliderListItem />
      <SliderListItem />
    </StyledSliderList>
  );
};

export default SliderList;
