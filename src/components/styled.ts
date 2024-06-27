import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html. body, .container {
		height: 100%;
	}

	body, #root {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

	body {
		font-family: "DM Sans", sans-serif;
		font-size: 16px;
		font-weight: 400;
		font-style: normal;
		line-height: 27px;
	}

	main {
		flex: 1 0 auto;
	}

	a {
		text-decoration: none;
	}

	h1 {
		font-size: 33px;
		font-weight: 500;
	}
	
	.loading-api, .error-api {
		display: flex;
  	justify-content: center;
  	align-items: center;
	}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1248px;
  width: 100%;
  height: 100vh;
  padding: 0 5px 10px 5px;
`;
