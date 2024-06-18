import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html. body {
		height: 100%;
	}

	body, #root {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

	body {
		// display: flex;
		// flex-direction: column;

		font-family: "DM Sans", sans-serif;
		font-size: 16px;
		font-weight: 400;
		font-style: normal;
		line-height: 27px;
	}

	a {
		text-decoration: none;
	}
`;

export const Container = styled.div`
  max-width: 1248px;
  width: 100%;
  margin: auto 0;

  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
`;
