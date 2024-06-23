import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0 15px 0;
  border-bottom: 1px solid #d8d8d8;
  line-height: 32p;
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
  font-weight: 500;
`;

export const StyledIconCart = styled.div`
  .nav__icon-cart {
    display: block;
    margin-left: -20px;
    cursor: pointer;
  }
`;
