import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: 1px solid #000;
  text-transform: uppercase;
  border-radius: 8px;
  padding: 4px 10px;
  cursor: pointer;

  transition: 0.3s ease-in-out;

  & > a {
    color: #000;
  }

  &:hover {
    border: none;
    background-color: #000;

    & > a {
      color: #fff;
    }
  }
`;
