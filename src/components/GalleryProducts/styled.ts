import styled from "styled-components";

export const WrapperGalleryProducts = styled.div`
  display: flex;
  gap: 40px;
`;

export const ListMiniImageProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const MiniImageProduct = styled.img`
  cursor: pointer;
  max-width: 120px;
  width: 100%;
  object-fit: contain;
`;

export const BigImageProduct = styled.img`
  cursor: pointer;
  max-width: 540px;
  width: 100%;
  object-fit: contain;
`;

export const Modal = styled.div`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    max-height: 90vh;
  }
`;
