import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  width: 90%;
  max-width: 400px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;

export const ModalBody = styled.div`
  padding-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  margin-top: 20px;
`;

export const ModalButton = styled.button`
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
