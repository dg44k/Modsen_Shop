import styled from "styled-components";

export const ListCardsStyled = styled.div`
  display: grid;
  gap: 70px;
  margin-bottom: 150px;
  grid-template-columns: repeat(3, 1fr);
  grid-area: list;
`;

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
