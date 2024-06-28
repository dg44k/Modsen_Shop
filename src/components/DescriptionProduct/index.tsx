import { FC } from "react";

import {
  DescriptionProductHeading,
  StyledDescriptionLine,
  StyledDescriptionProduct,
  WrapperDescriptionProduct,
} from "./styled";
import { DescriptionProductProps } from "./types";

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
