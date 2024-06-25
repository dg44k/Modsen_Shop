import styled from "styled-components";

export const CardWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  max-width: 250px;
  border-radius: 8px;
  border: 1px solid #000;
  padding: 3px;
`;

export const CardImageStyled = styled.img`
  max-height: 250px;
  object-fit: contain;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const WrapperInfoCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardTitleStyled = styled.p`
  font-size: 20px;
  line-height: 26px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardPriceStyled = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  color: #a18a68;
`;
