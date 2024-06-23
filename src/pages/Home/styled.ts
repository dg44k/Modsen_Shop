import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStylesForHome = createGlobalStyle`
	header{
		border: none!important;
	}
`;

export const StyledHeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
`;

export const StyledLinkViewAll = styled(Link)`
  font-weight: 500;
  font-size: 20px;
  color: #a18a68;
`;
