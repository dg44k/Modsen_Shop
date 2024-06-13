import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: "DM Sans", sans-serif;
		font-size: 16px;
		font-weight: 400;
		font-style: normal;
	}

	a {
		text-decoration: none;
	}
`;

export const Container = styled.div`
	max-width: 1248px;
`
