import styled from "styled-components";

export const SimpleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 90px 0 150px 0;
`;

export const WrapperSimilarProducts = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, max-content);
  gap: 50px;
  justify-content: space-between;
`;

export const StyledHeading = styled.div`
  font-size: 26px;
`;
