import styled from "styled-components";

export const StyledFlexHeadings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  margin: 0 auto;

  .error__link {
    width: 100%;
    max-width: 180px;
    align-self: center;
    text-align: center;
    border: 1px solid #000;
    border-radius: 4px;
    color: #000;
    font-weight: 700;
    padding: 10px 25px;
    margin-top: 64px;

    transition: 0.3s ease-in-out;
  }

  .error__link:hover {
    color: #fff;
    background-color: #000;
  }
`;

export const StyledHeadingOne = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: center;
`;

export const StyledHeadingThree = styled.h3`
  color: #707070;
  font-weight: 400;
  text-align: center;
`;
