import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 15px 0;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 60px;
`;

export const Logo = styled.a`
  font-family: "Allerta Stencil", sans-serif;
  font-size: 35px;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
`;

export const Span = styled.span`
  color: #a18a68;
`;

export const StyledLink = styled.a`
  color: #000;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #c7c7c7;
  }
`;

export const StyledIconCart = styled.div`
  .nav__icon-cart {
    display: block;
    margin-left: -20px;
    cursor: pointer;

    transition: 0.3s ease-in-out;
  }

  .nav__icon-cart:hover {
    color: #c7c7c7;
  }
`;
