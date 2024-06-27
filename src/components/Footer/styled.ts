import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 1px #d8d8d8 solid;
  padding: 30px 0 15px 0;
  flex: 0 1 auto;
`;

export const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const StyledFlexLinks = styled.div`
  display: flex;
  gap: 40px;
`;

export const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledAdditionalLink = styled(Link)`
  color: #707070;
  text-transform: uppercase;
  cursor: pointer;

  transition: 0.3s ease-in-out;

  &:hover {
    color: #000;
  }

  &:active {
    color: #000;
  }
`;

export const StyledPrivacy = styled.p`
  & > a {
    color: #707070;
    transition: 0.3s ease-in-out;
  }

  & > a:hover {
    color: #000;
  }
`;
