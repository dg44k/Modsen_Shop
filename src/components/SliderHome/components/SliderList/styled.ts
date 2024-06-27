import styled from "styled-components";

export const StyledSliderList = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
  width: 100%;
  margin: 0 auto;

  & > * {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
  }
`;
