import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: 1px solid #000;
  text-transform: uppercase;
  border-radius: 8px;
  padding: 3px 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    border: none;
    background-color: #000;
    color: #fff;
  }
`;
