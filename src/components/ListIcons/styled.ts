import { styled } from "styled-components";

export const StyledIcons = styled.div`
  display: flex;
  gap: 30px;

  & > a {
    color: #707070;
  }

  & > svg {
    cursor: pointer;

    transition: 0.3s ease-in-out;
  }

  & > a:hover {
    color: #000;
  }
`;
