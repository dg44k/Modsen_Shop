import styled from "styled-components";

export const StyledSliderDots = styled.div`
  display: flex;
  gap: 14px;
`;

export const StyledSliderDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;

  &:active {
    width: 16px;
    height: 16px;
    border: 1px solid #fff;
    background: none;
  }
`;
