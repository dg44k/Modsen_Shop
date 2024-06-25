import styled from "styled-components";

export const StyledSliderDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledSliderDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &.active {
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    background: none;
  }
`;
