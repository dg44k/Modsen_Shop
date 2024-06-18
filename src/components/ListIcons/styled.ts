import { styled } from "styled-components";

export const StyledIcons = styled.div`
  & {
    display: flex;
    gap: 30px;
  }

  .icon-link {
    cursor: pointer;
    color: #707070;

    transition: 0.3s ease-in-out;
  }

  .icon-link:hover {
    color: #000;
  }

  .icon-link:active {
    color: #000;
  }
`;
