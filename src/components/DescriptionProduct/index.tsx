import React, { FC } from "react";
import { DescriptionProductProps } from "./types";
import {
  DescriptionProductHeading,
  StyledDescriptionLine,
  StyledDescriptionProduct,
  WrapperDescriptionProduct,
} from "./styled";

const DescriptionProduct: FC<DescriptionProductProps> = ({ description }) => {
  return (
    <WrapperDescriptionProduct>
      <DescriptionProductHeading>Description</DescriptionProductHeading>
      <StyledDescriptionLine />
      <StyledDescriptionProduct>{description}</StyledDescriptionProduct>
    </WrapperDescriptionProduct>
  );
};

export default DescriptionProduct;
