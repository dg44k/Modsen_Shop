import styled from "styled-components";

export const ProductIconsShow = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 0%;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.6);
  opacity: 1;
  transition: 0.5s ease-in-out;

  & > * {
    opacity: 0;
    color: #000;
  }

  & .icon {
    width: 25px;
    height: 25px;
  }
`;

export const CardWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  max-width: 250px;
  border-radius: 8px;
  padding: 3px;

  transition: 0.3s ease-in-out;

  &:hover .card_product-show {
    height: 100%;
  }

  &:hover .card_product-show > * {
    animation: slide-icon 0.5s forwards;
  }

  @keyframes slide-icon {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
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
  color: #000;
`;

export const CardPriceStyled = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  color: #a18a68;
`;
