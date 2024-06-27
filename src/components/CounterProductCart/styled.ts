import styled from "styled-components";

export const WrapperCounter = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonCounter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border: 1px solid #000;
  border-radius: 8px;
  background: none;

  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const SliceCounterValue = styled.div`
  width: 25px;
  text-align: center;
  font-weight: 500;
`;
