import styled from "styled-components";

export const WrapperDescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DescriptionProductHeading = styled.h3`
  position: relative;
  font-size: 20px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 100;
    top: 193%;
    left: 0;
    width: 112px;
    height: 1px;
    background-color: #000;
  }
`;

export const StyledDescriptionLine = styled.hr`
  color: #d8d8d8;
  margin-top: 25px;
`;

export const StyledDescriptionProduct = styled.p`
  color: #707070;
  font-size: 16px;
  margin-top: 30px;
`;
