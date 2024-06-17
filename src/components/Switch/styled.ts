import { styled } from "styled-components";

export const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 21px;
  cursor: pointer;

  &:before {
    position: absolute;
    top: 0;
    left: -15px;
    content: "";
    display: inline-block;
    border-left: 1px solid #707070;
    height: 90%;
    width: 1px;
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const SwitchSlider = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #78788029;
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${({ checked }) =>
      checked ? "translateX(19px)" : "translateX(0)"};
  }
`;
